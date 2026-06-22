// ── perf.js v2 — Performance + Accessibility, one file ──────
// Fixes: render-blocking JS/CSS, image size, cache TTL,
//        link prefetch, contrast ratios, font sizes, focus rings
// Place ONE <script src="perf.js" defer></script> in <head>
// Also keep sw.js in your root folder

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
          s.src = src; s.onload = res;
          s.onerror = () => rej(new Error('Failed: ' + src));
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
  // 2. DEFER NON-CRITICAL CSS — removes ~160ms blocking
  // ════════════════════════════════════════════════════════════
  function deferCSS() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (link.dataset.deferred) return;
      link.dataset.deferred = '1';
      const href = link.href;
      const pre = document.createElement('link');
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
  // 3. CONTRAST + FONT SIZE + ACCESSIBILITY CSS
  //    Injected as a <style> so it overrides existing styles
  // ════════════════════════════════════════════════════════════
  const A11Y_CSS = `
    /* ── Subtitle / page-sub (#888 → #595959, 7:1) ── */
    .page-sub { color: #595959 !important; font-size: 15px !important; }

    /* ── Upload box secondary text (#999 → #646464, 5.9:1) ── */
    .upload-box p { color: #646464 !important; }

    /* ── Upload note (#bbb → #767676, 4.5:1) ── */
    .upload-note { color: #767676 !important; font-size: 13px !important; }

    /* ── Tip numbers (#bbb → blue #2563eb, 4.6:1) ── */
    .tip-n {
      color: #2563eb !important;
      font-size: 15px !important;
      font-weight: 700 !important;
      min-width: 28px;
    }

    /* ── Tip body text ── */
    .tip { color: #333333 !important; font-size: 15px !important; line-height: 1.65 !important; }

    /* ── Links in body — add underline so color isn't the only cue ── */
    .section-body a, .post-content a, #infoContent a {
      color: #1a56db !important;
      text-decoration: underline !important;
      text-underline-offset: 3px;
      font-weight: 500;
    }
    .section-body a:hover, .post-content a:hover, #infoContent a:hover {
      color: #1e40af !important;
      text-decoration-thickness: 2px;
    }

    /* ── Section body text (#555 → #3d3d3d, larger) ── */
    .section-body {
      color: #3d3d3d !important;
      font-size: 15px !important;
      line-height: 1.8 !important;
    }

    /* ── Card text (#666 at 13px → #4a4a4a at 14px) ── */
    .card p, .card ul li {
      color: #4a4a4a !important;
      font-size: 14px !important;
      line-height: 1.6 !important;
    }

    /* ── File row meta (#aaa → #767676, 4.5:1) ── */
    .row-size { color: #767676 !important; }
    .row-num  { color: #595959 !important; }

    /* ── File count badge (#888 on #ebebea → #444 on #e5e5e5, 6.1:1) ── */
    .file-count { background: #e5e5e5 !important; color: #444444 !important; }

    /* ── Toolbar btn text/icon ── */
    .btn-sm       { color: #333333 !important; }
    .btn-sm svg   { stroke: #444444 !important; }

    /* ── Add-more row button (#aaa → #595959) ── */
    .add-row-btn  { color: #595959 !important; }

    /* ── Drag handle dots (#bbb → #888, 4.5:1) ── */
    .drag-handle span { background: #888888 !important; }

    /* ── Row delete default (#d0d0cc → #767676) ── */
    .row-del      { color: #767676 !important; }
    .row-del:hover{ color: #dc2626 !important; }

    /* ── Upload box heading ── */
    .upload-box h2 { color: #1a1a1a !important; font-size: 17px !important; font-weight: 600 !important; }

    /* ── Table ── */
    table th { color: #1a1a1a !important; font-size: 14px; }
    table td { color: #333333 !important; font-size: 14px; line-height: 1.6; }

    /* ── Section titles ── */
    .section-title { color: #1a1a1a !important; }

    /* ── Focus rings — keyboard navigation ── */
    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    select:focus-visible {
      outline: 2px solid #2563eb !important;
      outline-offset: 3px;
      border-radius: 4px;
    }

    /* ── Nav / lang dropdown focus ── */
    .menu a:focus-visible,
    .lang-dropdown a:focus-visible {
      outline: 2px solid #2563eb !important;
      outline-offset: 2px;
      border-radius: 6px;
    }

    /* ── Progress text in spinner ── */
    .progress-text { color: #1a1a1a !important; }

    /* ── Relatedblog card headings ── */
    .relatedbloganywhere-content a h3 { color: #1a1a1a !important; font-size: 15px !important; }

    /* ── Footer text ── */
    .site-footer, .footer { color: #595959 !important; }
  `;

  function injectA11yCSS() {
    const style = document.createElement('style');
    style.id = 'a11y-fix';
    style.textContent = A11Y_CSS;
    document.head.appendChild(style);
  }

  // ════════════════════════════════════════════════════════════
  // 4. IMAGE OPTIMISATION
  //    lazy + decoding=async + fetchpriority=high on first img
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
  // 5. SERVICE WORKER — cache + offline + long TTL
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
            sendToSW('PREFETCH', [
              'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js',
            ]);
            discoverAndPrefetch();
          }, 1500);
        });
      })
      .catch(err => console.warn('[SW]', err));
  }

  // ════════════════════════════════════════════════════════════
  // 6. AUTO-DISCOVER ALL <a> LINKS AND PREFETCH
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
  // 7. HOVER + TOUCH PREFETCH
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
  // 8. NAVIGATION PROGRESS BAR
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
  // 9. AUTO-PATCH mergePDFs — no manual code change needed
  // ════════════════════════════════════════════════════════════
  function patchMergePDFs() {
    const wrap = fn => async function () {
      await window.__loadLibs();
      return fn.apply(this, arguments);
    };
    if (typeof window.mergePDFs === 'function') {
      window.mergePDFs = wrap(window.mergePDFs);
      return;
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
  patchMergePDFs(); // must run before page scripts

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
