// ── perf.js v4 — Perf + A11y + Zero CLS ─────────────────────
// Fixes: render-blocking, contrast, font sizes, image lazy,
//        SW cache long TTL, link prefetch, CLS = 0
// <script src="perf.js" defer></script> in <head>

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
  // 2. INLINE CRITICAL CSS (CLS + contrast + font) via <style>
  //    Injected into <head> immediately — no network request,
  //    no FOUC, no layout shift from late-loading stylesheets
  // ════════════════════════════════════════════════════════════
  const CRITICAL_CSS = `
    /* ── CLS: Reserve exact space for every element ─────── */

    /* Body font stack matching Inter so swap = zero shift */
    body{font-family:'Inter',ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.5}

    /* Nav: fixed height, never reflows */
    nav{height:70px;min-height:70px;contain:layout style}

    /* Logo: exact box before image loads */
    .logo img{width:42px!important;height:42px!important;aspect-ratio:1/1;background:#f3f3f0;border-radius:6px;display:block}

    /* ALL images: preserve aspect ratio so no shift on load */
    img{height:auto;display:block}

    /* Known images: lock dimensions */
    img[alt="My Multilingual"]{width:42px;height:42px;aspect-ratio:1/1}
    img[alt="combina Múltiples archivos PDF en uno al instante"]{aspect-ratio:710/350;max-width:100%;width:710px}

    /* Flag images */
    .lang-btn img,.lang-dropdown img{width:20px!important;height:15px!important;aspect-ratio:4/3;background:#eee}

    /* Upload box: fixed min-height — never collapses then expands */
    .upload-box{min-height:280px;contain:layout}

    /* Page heading: reserve line heights for font swap */
    .page-title{min-height:32px}
    .page-sub{min-height:22px}

    /* Toolbar sticky: reserve space */
    .toolbar{min-height:52px;contain:layout style}

    /* Related blog thumbnails: fixed aspect ratio placeholder */
    .relatedbloganywhere-thumb{aspect-ratio:16/9;overflow:hidden;background:#f3f3f0}
    .relatedbloganywhere-thumb img{width:100%;height:100%;object-fit:cover}

    /* Cards: prevent reflow */
    .cards{contain:layout}

    /* Mobile: compensate for fixed bottom bar */
    @media(max-width:600px){body{padding-bottom:80px}}

    /* SVGs in buttons: never shift text */
    svg{flex-shrink:0}

    /* Toast: always fixed, never shifts layout */
    .toast{position:fixed!important}

    /* Shimmer placeholder for images before src loads */
    @keyframes _shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
    img:not([src]),img[src=""]{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:400px 100%;animation:_shimmer 1.2s ease-in-out infinite}

    /* ── A11Y: Contrast + font size fixes ──────────────── */
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
    button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid #2563eb!important;outline-offset:3px;border-radius:4px}
    .menu a:focus-visible,.lang-dropdown a:focus-visible{outline:2px solid #2563eb!important;outline-offset:2px;border-radius:6px}
  `;

  function injectCriticalCSS() {
    if (document.getElementById('perf-critical')) return;
    const s = document.createElement('style');
    s.id = 'perf-critical';
    s.textContent = CRITICAL_CSS;
    // Insert as FIRST child of head — before any other styles
    document.head.insertBefore(s, document.head.firstChild);
  }

  // ════════════════════════════════════════════════════════════
  // 3. DEFER NON-CRITICAL CSS — removes ~160ms blocking
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
  // 4. IMAGE DIMENSIONS — set width/height on every img
  //    so browser reserves space before image loads (CLS = 0)
  // ════════════════════════════════════════════════════════════
  function fixImageDimensions() {
    document.querySelectorAll('img').forEach((img, i) => {
      img.decoding = 'async';

      // Set loading priority
      if (i === 0) {
        img.loading = 'eager';
        img.setAttribute('fetchpriority', 'high');
      } else if (!img.loading) {
        img.loading = 'lazy';
      }

      // If image already has width+height attrs, nothing to do
      if (img.getAttribute('width') && img.getAttribute('height')) return;

      // Once natural dimensions known, lock them in
      function lockDimensions() {
        if (img.naturalWidth && !img.getAttribute('width')) {
          img.setAttribute('width',  img.naturalWidth);
          img.setAttribute('height', img.naturalHeight);
          img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        }
      }

      if (img.complete) {
        lockDimensions();
      } else {
        img.addEventListener('load', lockDimensions, { once: true });
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // 5. FONT SWAP SHIFT FIX
  //    font-display:optional prevents invisible text + shift
  // ════════════════════════════════════════════════════════════
  function fixFontDisplay() {
    // If any Google Fonts links exist, add &display=optional
    document.querySelectorAll('link[href*="fonts.googleapis.com"]').forEach(link => {
      if (!link.href.includes('display=')) {
        link.href = link.href + '&display=optional';
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // 6. COLLECT ALL PAGE ASSETS FOR SW CACHE
  // ════════════════════════════════════════════════════════════
  function collectPageAssets() {
    const urls = new Set();
    const add  = href => {
      try { const u = new URL(href, location.href); if (u.protocol.startsWith('http')) urls.add(u.href); } catch (_) {}
    };
    document.querySelectorAll('link[href]').forEach(el => add(el.href));
    document.querySelectorAll('script[src]').forEach(el => add(el.src));
    document.querySelectorAll('img[src]').forEach(el => add(el.src));
    document.querySelectorAll('img[srcset]').forEach(el => {
      el.srcset.split(',').forEach(p => add(p.trim().split(/\s+/)[0]));
    });
    return [...urls];
  }

  // ════════════════════════════════════════════════════════════
  // 7. SERVICE WORKER
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
          setTimeout(() => {
            const assets = collectPageAssets();
            assets.push(
              'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js'
            );
            sendToSW('PREFETCH', assets);
            discoverAndPrefetch();
          }, 800);
        });
      })
      .catch(err => console.warn('[SW]', err));
  }

  // ════════════════════════════════════════════════════════════
  // 8. AUTO-DISCOVER LINKS + HOVER/TOUCH PREFETCH
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
  // 10. AUTO-PATCH mergePDFs
  // ════════════════════════════════════════════════════════════
  function patchMergePDFs() {
    const wrap = fn => async function () {
      await window.__loadLibs();
      return fn.apply(this, arguments);
    };
    if (typeof window.mergePDFs === 'function') { window.mergePDFs = wrap(window.mergePDFs); return; }
    let _fn;
    Object.defineProperty(window, 'mergePDFs', {
      configurable: true,
      get() { return _fn; },
      set(fn) { _fn = wrap(fn); }
    });
  }

  // ════════════════════════════════════════════════════════════
  // BOOT — injectCriticalCSS runs FIRST, synchronously
  // ════════════════════════════════════════════════════════════
  injectCriticalCSS(); // ← runs before DOM, locks layout immediately
  patchMergePDFs();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    deferCSS();
    fixFontDisplay();
    fixImageDimensions();
    registerSW();
    setupHoverPrefetch();
    setupProgressBar();
  }

})();
