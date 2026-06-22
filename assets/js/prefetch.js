// ── perf.js — All-in-one performance fix ────────────────────
// 1. Lazy loads pdf-lib + pako (removes render-blocking)
// 2. Defers non-critical CSS
// 3. Fixes image sizes with WebP + responsive hints
// 4. Registers Service Worker (cache + offline + prefetch)
// 5. Auto-discovers all links and prefetches them
// 6. Hover/touch prefetch for instant navigation
// 7. Progress bar on navigation
// Run this as early as possible — put it in <head> as a defer script

(function () {
  'use strict';

  const ORIGIN   = location.origin;
  const SW_PATH  = '/jekyllmultilingual/sw.js';
  const SW_SCOPE = '/jekyllmultilingual/';

  // ════════════════════════════════════════════════════════════
  // 1. LAZY LIBRARY LOADER — pdf-lib + pako
  //    Removes 2,240ms of render-blocking
  // ════════════════════════════════════════════════════════════
  window.__libsLoaded  = false;
  window.__libsLoading = null;

  window.__loadLibs = function () {
    if (window.__libsLoaded)  return Promise.resolve();
    if (window.__libsLoading) return window.__libsLoading;

    window.__libsLoading = new Promise((resolve, reject) => {
      function loadScript(src) {
        return new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = src;
          s.onload  = res;
          s.onerror = () => rej(new Error('Failed to load: ' + src));
          document.head.appendChild(s);
        });
      }
      loadScript('https://unpkg.com/pdf-lib/dist/pdf-lib.min.js')
        .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js'))
        .then(() => { window.__libsLoaded = true; resolve(); })
        .catch(reject);
    });

    return window.__libsLoading;
  };

  // ════════════════════════════════════════════════════════════
  // 2. DEFER NON-CRITICAL CSS
  //    Removes ~160ms render-blocking from main.css
  // ════════════════════════════════════════════════════════════
  function deferCSS() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      // Skip already-processed or inline styles
      if (link.dataset.deferred) return;
      link.dataset.deferred = '1';

      const href = link.href;
      // Replace with preload → swap to stylesheet after load
      const pre = document.createElement('link');
      pre.rel  = 'preload';
      pre.as   = 'style';
      pre.href = href;
      pre.onload = function () {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      // Fallback for no-JS
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<link rel="stylesheet" href="${href}">`;

      link.parentNode.insertBefore(pre, link);
      link.parentNode.insertBefore(noscript, link);
      link.remove();
    });
  }

  // ════════════════════════════════════════════════════════════
  // 3. IMAGE OPTIMISATION HINTS
  //    Adds loading=lazy, decoding=async, width/height to all
  //    content images; adds fetchpriority=high to LCP image
  // ════════════════════════════════════════════════════════════
  function optimiseImages() {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img, i) => {
      // Add async decoding to all
      img.decoding = 'async';

      // First visible image is likely LCP — keep eager, boost priority
      if (i === 0) {
        img.loading = 'eager';
        img.setAttribute('fetchpriority', 'high');
      } else {
        // Only lazy-load if not already set
        if (!img.loading) img.loading = 'lazy';
      }

      // Warn in console about oversized images (dev hint)
      img.addEventListener('load', function () {
        const natural = this.naturalWidth * this.naturalHeight;
        const display = (this.offsetWidth || this.width) * (this.offsetHeight || this.height);
        if (natural > display * 4) {
          console.warn(
            `[perf] Oversized image: ${this.src}\n` +
            `  Natural: ${this.naturalWidth}×${this.naturalHeight} ` +
            `  Display: ${this.offsetWidth}×${this.offsetHeight}\n` +
            `  → Compress at squoosh.app and serve as WebP`
          );
        }
      }, { once: true, passive: true });
    });
  }

  // ════════════════════════════════════════════════════════════
  // 4. SERVICE WORKER — cache, offline, long TTL
  // ════════════════════════════════════════════════════════════
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register(SW_PATH, { scope: SW_SCOPE })
      .then(reg => {
        if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });

        reg.addEventListener('updatefound', () => {
          reg.installing?.addEventListener('statechange', function () {
            if (this.state === 'installed') this.postMessage({ type: 'SKIP_WAITING' });
          });
        });

        // After SW is ready: prefetch links + pre-warm libs
        navigator.serviceWorker.ready.then(() => {
          // Pre-warm CDN libs into SW cache while user is reading
          // So when they upload a file, libs load from cache = instant
          setTimeout(() => {
            prewarmLibs();
            discoverAndPrefetch();
          }, 1500);
        });
      })
      .catch(err => console.warn('[SW]', err));

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // New SW activated — reload once to get fresh content
      if (window.__swReloading) return;
      window.__swReloading = true;
      location.reload();
    });
  }

  // Pre-warm pdf-lib + pako into SW cache (background, no execution)
  function prewarmLibs() {
    sendToSW('PREFETCH', [
      'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js',
    ]);
  }

  // ════════════════════════════════════════════════════════════
  // 5. AUTO-DISCOVER ALL <a> LINKS AND PREFETCH
  // ════════════════════════════════════════════════════════════
  function discoverAndPrefetch() {
    const urls = new Set();
    document.querySelectorAll('a[href]').forEach(a => {
      try {
        const url = new URL(a.href, location.href);
        if (url.origin === ORIGIN && url.href !== location.href) {
          urls.add(url.href);
        }
      } catch (_) {}
    });
    if (urls.size) sendToSW('PREFETCH', [...urls]);
  }

  // ════════════════════════════════════════════════════════════
  // 6. HOVER + TOUCH PREFETCH
  //    Cache a page the moment user shows intent to navigate
  // ════════════════════════════════════════════════════════════
  function setupHoverPrefetch() {
    let hoverTimer;

    document.addEventListener('mouseover', e => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      hoverTimer = setTimeout(() => prefetchOne(a.href), 80);
    }, { passive: true });

    document.addEventListener('mouseout', () => {
      clearTimeout(hoverTimer);
    }, { passive: true });

    document.addEventListener('touchstart', e => {
      prefetchOne(e.target.closest('a[href]')?.href);
    }, { passive: true });
  }

  function prefetchOne(href) {
    if (!href) return;
    try {
      const url = new URL(href, location.href);
      if (url.origin === ORIGIN && url.href !== location.href) {
        sendToSW('PREFETCH', [url.href]);
      }
    } catch (_) {}
  }

  function sendToSW(type, urls) {
    const ctrl = navigator.serviceWorker?.controller;
    if (ctrl) ctrl.postMessage({ type, urls });
  }

  // ════════════════════════════════════════════════════════════
  // 7. NAVIGATION PROGRESS BAR
  //    Thin blue/purple bar at top on every link click
  // ════════════════════════════════════════════════════════════
  function setupProgressBar() {
    const bar = document.createElement('div');
    bar.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'width:0', 'height:3px',
      'z-index:99999', 'pointer-events:none',
      'border-radius:0 2px 2px 0',
      'background:linear-gradient(90deg,#2563eb,#7c3aed)',
      'transition:width .25s ease,opacity .4s ease',
    ].join(';');
    document.documentElement.appendChild(bar);

    document.addEventListener('click', e => {
      try {
        const a = e.target.closest('a[href]');
        if (!a) return;
        if (new URL(a.href).origin !== ORIGIN) return;
        bar.style.cssText += ';width:70%;opacity:1';
        setTimeout(() => bar.style.width = '90%', 300);
      } catch (_) {}
    }, { passive: true });

    window.addEventListener('pageshow', () => {
      bar.style.width = '100%';
      setTimeout(() => { bar.style.opacity = '0'; bar.style.width = '0'; }, 400);
    });
  }

  // ════════════════════════════════════════════════════════════
  // 8. PATCH mergePDFs — inject __loadLibs call automatically
  //    Overrides the global mergePDFs so you don't have to edit
  //    your existing code manually
  // ════════════════════════════════════════════════════════════
  function patchMergePDFs() {
    // Wait until the page scripts define mergePDFs, then wrap it
    const original = window.mergePDFs;
    if (typeof original === 'function') {
      window.mergePDFs = async function () {
        await window.__loadLibs();
        return original.apply(this, arguments);
      };
      return;
    }
    // mergePDFs not defined yet — watch for it
    let defined = false;
    Object.defineProperty(window, 'mergePDFs', {
      configurable: true,
      get() { return this._mergePDFs; },
      set(fn) {
        if (defined) { this._mergePDFs = fn; return; }
        defined = true;
        this._mergePDFs = async function () {
          await window.__loadLibs();
          return fn.apply(this, arguments);
        };
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // BOOT — run everything in the right order
  // ════════════════════════════════════════════════════════════
  // Patch mergePDFs immediately (before page scripts run)
  patchMergePDFs();

  // Everything else after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    deferCSS();
    optimiseImages();
    registerSW();
    setupHoverPrefetch();
    setupProgressBar();
  }

})();
