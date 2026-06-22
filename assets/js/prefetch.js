// ── perf.js v3 — Performance + A11y + Auto Cache ─────────────
// ONE file fixes: render-blocking, contrast, font sizes,
// image lazy load, SW cache with long TTL, link prefetch
// Usage: <script src="perf.js" defer></script> in <head>
// Keep sw.js in your repo root folder.

(function () {
  'use strict';

  const ORIGIN   = location.origin;
  const SW_PATH  = '/jekyllmultilingual/sw.js';
  const SW_SCOPE = '/jekyllmultilingual/';

  // ════════════════════════════════════════════════════════════
  // 1. LAZY LIBRARY LOADER — removes 2,240ms render-blocking
  // ════════════════════════════════════════════════════════════
  window.__libsLoaded  = false;
  window.__libsLoading = null;

  window.__loadLibs = function () {
    if (window.__libsLoaded)  return Promise.resolve();
    if (window.__libsLoading) return window.__libsLoading;
    window.__libsLoading = new Promise((resolve, reject) => {
      function load(src) {
        return new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = src; s.onload = res;
          s.onerror = () => rej(new Error('Failed: ' + src));
          document.head.appendChild(s);
        });
      }
      load('https://unpkg.com/pdf-lib/dist/pdf-lib.min.js')
        .then(() => load('https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js'))
        .then(() => { window.__libsLoaded = true; resolve(); })
        .catch(reject);
    });
    return window.__libsLoading;
  };

  // ════════════════════════════════════════════════════════════
  // 2. DEFER NON-CRITICAL CSS — removes ~160ms blocking
  // ════════════════════════════════════════════════════════════
  function deferCSS() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (link.dataset.deferred) return;
      link.dataset.deferred = '1';
      const href = link.href;
      const pre  = document.createElement('link');
      pre.rel = 'preload'; pre.as = 'style'; pre.href = href;
      pre.onload = function () { this.onload = null; this.rel = 'stylesheet'; };
      const ns = document.createElement('noscript');
      ns.innerHTML = `<link rel="stylesheet" href="${href}">`;
      link.parentNode.insertBefore(pre, link);
      link.parentNode.insertBefore(ns, link);
      link.remove();
    });
  }

  // ════════════════════════════════════════════════════════════
  // 3. ACCESSIBILITY + CONTRAST CSS
  // ════════════════════════════════════════════════════════════
  const A11Y_CSS = `
    .page-sub{color:#595959!important;font-size:15px!important}
    .upload-box p{color:#646464!important}
    .upload-note{color:#767676!important;font-size:13px!important}
    .tip-n{color:#2563eb!important;font-size:15px!important;font-weight:700!important;min-width:28px}
    .tip{color:#333!important;font-size:15px!important;line-height:1.65!important}
    .section-body a,.post-content a,#infoContent a{color:#1a56db!important;text-decoration:underline!important;text-underline-offset:3px;font-weight:500}
    .section-body a:hover,.post-content a:hover,#infoContent a:hover{color:#1e40af!important;text-decoration-thickness:2px}
    .section-body{color:#3d3d3d!important;font-size:15px!important;line-height:1.8!important}
    .card p,.card ul li{color:#4a4a4a!important;font-size:14px!important;line-height:1.6!important}
    .row-size{color:#767676!important}
    .row-num{color:#595959!important}
    .file-count{background:#e5e5e5!important;color:#444!important}
    .btn-sm{color:#333!important}
    .btn-sm svg{stroke:#444!important}
    .add-row-btn{color:#595959!important}
    .drag-handle span{background:#888!important}
    .row-del{color:#767676!important}
    .row-del:hover{color:#dc2626!important}
    .upload-box h2{color:#1a1a1a!important;font-size:17px!important;font-weight:600!important}
    table th{color:#1a1a1a!important;font-size:14px}
    table td{color:#333!important;font-size:14px;line-height:1.6}
    .section-title{color:#1a1a1a!important}
    .progress-text{color:#1a1a1a!important}
    .site-footer,.footer{color:#595959!important}
    button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #2563eb!important;outline-offset:3px;border-radius:4px}
    .menu a:focus-visible,.lang-dropdown a:focus-visible{outline:2px solid #2563eb!important;outline-offset:2px;border-radius:6px}
  `;

  function injectA11yCSS() {
    const s = document.createElement('style');
    s.id = 'a11y-fix';
    s.textContent = A11Y_CSS;
    document.head.appendChild(s);
  }

  // ════════════════════════════════════════════════════════════
  // 4. IMAGE OPTIMISATION
  // ════════════════════════════════════════════════════════════
  function optimiseImages() {
    document.querySelectorAll('img').forEach((img, i) => {
      img.decoding = 'async';
      if (i === 0) {
        img.loading = 'eager';
        img.setAttribute('fetchpriority', 'high');
      } else if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // 5. COLLECT ALL PAGE ASSETS (CSS, JS, images, fonts, flags)
  //    Returns every URL the page is already using
  // ════════════════════════════════════════════════════════════
  function collectPageAssets() {
    const urls = new Set();
    const add  = href => {
      try {
        const u = new URL(href, location.href);
        if (u.protocol.startsWith('http')) urls.add(u.href);
      } catch (_) {}
    };

    // <link href="..."> (CSS, icons, preloads)
    document.querySelectorAll('link[href]').forEach(el => add(el.href));

    // <script src="...">
    document.querySelectorAll('script[src]').forEach(el => add(el.src));

    // <img src="...">
    document.querySelectorAll('img[src]').forEach(el => add(el.src));

    // <img srcset="...">
    document.querySelectorAll('img[srcset]').forEach(el => {
      el.srcset.split(',').forEach(part => add(part.trim().split(/\s+/)[0]));
    });

    // CSS background-image via computed style (catches logo, flags etc.)
    document.querySelectorAll('[style*="url("]').forEach(el => {
      const m = el.style.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
      if (m) add(m[1]);
    });

    return [...urls];
  }

  // ════════════════════════════════════════════════════════════
  // 6. SERVICE WORKER — register + auto-cache all assets
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

        navigator.serviceWorker.ready.then(() => {
          // Small delay so page renders first, then cache everything
          setTimeout(() => {
            const assets = collectPageAssets();

            // Add CDN libs too
            assets.push(
              'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js'
            );

            // Send ALL assets to SW — it will apply correct TTL per type
            sendToSW('PREFETCH', assets);

            // Also prefetch all internal page links
            discoverAndPrefetch();
          }, 800);
        });
      })
      .catch(err => console.warn('[SW]', err));
  }

  // ════════════════════════════════════════════════════════════
  // 7. AUTO-DISCOVER ALL <a> LINKS AND PREFETCH
  // ════════════════════════════════════════════════════════════
  function discoverAndPrefetch() {
    const urls = new Set();
    document.querySelectorAll('a[href]').forEach(a => {
      try {
        const url = new URL(a.href, location.href);
        if (url.origin === ORIGIN && url.href !== location.href) urls.add(url.href);
      } catch (_) {}
    });
    if (urls.size) sendToSW('PREFETCH', [...urls]);
  }

  // ════════════════════════════════════════════════════════════
  // 8. HOVER + TOUCH PREFETCH
  // ════════════════════════════════════════════════════════════
  function setupHoverPrefetch() {
    let timer;
    document.addEventListener('mouseover', e => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      timer = setTimeout(() => prefetchOne(a.href), 80);
    }, { passive: true });
    document.addEventListener('mouseout', () => clearTimeout(timer), { passive: true });
    document.addEventListener('touchstart', e => {
      prefetchOne(e.target.closest('a[href]')?.href);
    }, { passive: true });
  }

  function prefetchOne(href) {
    if (!href) return;
    try {
      const url = new URL(href, location.href);
      if (url.origin === ORIGIN && url.href !== location.href) sendToSW('PREFETCH', [url.href]);
    } catch (_) {}
  }

  function sendToSW(type, urls) {
    const ctrl = navigator.serviceWorker?.controller;
    if (ctrl) ctrl.postMessage({ type, urls });
  }

  // ════════════════════════════════════════════════════════════
  // 9. NAVIGATION PROGRESS BAR
  // ════════════════════════════════════════════════════════════
  function setupProgressBar() {
    const bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;width:0;height:3px;z-index:99999;pointer-events:none;border-radius:0 2px 2px 0;background:linear-gradient(90deg,#2563eb,#7c3aed);transition:width .25s ease,opacity .4s ease';
    document.documentElement.appendChild(bar);
    document.addEventListener('click', e => {
      try {
        const a = e.target.closest('a[href]');
        if (!a || new URL(a.href).origin !== ORIGIN) return;
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
  // 10. AUTO-PATCH mergePDFs — no manual code edit needed
  // ════════════════════════════════════════════════════════════
  function patchMergePDFs() {
    const wrap = fn => async function () {
      await window.__loadLibs();
      return fn.apply(this, arguments);
    };
    if (typeof window.mergePDFs === 'function') {
      window.mergePDFs = wrap(window.mergePDFs); return;
    }
    let _fn;
    Object.defineProperty(window, 'mergePDFs', {
      configurable: true,
      get() { return _fn; },
      set(fn) { _fn = wrap(fn); }
    });
  }

  // ════════════════════════════════════════════════════════════
  // BOOT
  // ════════════════════════════════════════════════════════════
  patchMergePDFs();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    deferCSS();
    injectA11yCSS();
    optimiseImages();
    registerSW();
    setupHoverPrefetch();
    setupProgressBar();
  }

})();
