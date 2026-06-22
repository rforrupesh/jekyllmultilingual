// ── Auto Link Prefetcher — zero hardcoded URLs ───────────────
// Reads all <a href> links from the current page automatically
// and tells the Service Worker to cache them.

(function () {
  'use strict';

  const SW_PATH  = '/jekyllmultilingual/sw.js';
  const SW_SCOPE = '/jekyllmultilingual/';
  const ORIGIN   = location.origin;

  // ── Register SW ───────────────────────────────────────────
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register(SW_PATH, { scope: SW_SCOPE })
    .then(reg => {
      // Activate new SW immediately if waiting
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      reg.addEventListener('updatefound', () => {
        reg.installing?.addEventListener('statechange', function () {
          if (this.state === 'installed') this.postMessage({ type: 'SKIP_WAITING' });
        });
      });

      // Once SW is controlling the page, auto-discover and prefetch
      navigator.serviceWorker.ready.then(() => {
        setTimeout(discoverAndPrefetch, 1200); // after page fully renders
      });
    })
    .catch(err => console.warn('[SW]', err));

  // ── Discover all <a> links on this page ───────────────────
  function discoverAndPrefetch() {
    const urls = new Set();

    document.querySelectorAll('a[href]').forEach(a => {
      try {
        const url = new URL(a.href, location.href);
        // Only same-origin, skip current page and anchors
        if (url.origin === ORIGIN && url.href !== location.href) {
          urls.add(url.href);
        }
      } catch (_) {}
    });

    if (urls.size) sendToSW('PREFETCH', [...urls]);
  }

  // ── Hover prefetch (desktop) ──────────────────────────────
  let hoverTimer;
  document.addEventListener('mouseover', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    hoverTimer = setTimeout(() => prefetchOne(a.href), 100);
  }, { passive: true });
  document.addEventListener('mouseout', () => clearTimeout(hoverTimer), { passive: true });

  // ── Touch prefetch (mobile) ───────────────────────────────
  document.addEventListener('touchstart', e => {
    prefetchOne(e.target.closest('a[href]')?.href);
  }, { passive: true });

  function prefetchOne(href) {
    if (!href) return;
    try {
      const url = new URL(href, location.href);
      if (url.origin === ORIGIN && url.href !== location.href) {
        sendToSW('PREFETCH', [url.href]);
      }
    } catch (_) {}
  }

  // ── Send message to SW ────────────────────────────────────
  function sendToSW(type, urls) {
    const ctrl = navigator.serviceWorker.controller;
    if (ctrl) ctrl.postMessage({ type, urls });
  }

  // ── Top progress bar on navigation ───────────────────────
  const bar = Object.assign(document.createElement('div'), {
    style: 'position:fixed;top:0;left:0;width:0;height:3px;z-index:99999;pointer-events:none;border-radius:0 2px 2px 0;background:linear-gradient(90deg,#2563eb,#7c3aed);transition:width .25s,opacity .4s'
  });
  document.documentElement.appendChild(bar);

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    try {
      if (new URL(a.href).origin === ORIGIN) {
        bar.style.cssText += ';width:75%;opacity:1';
        setTimeout(() => bar.style.width = '92%', 250);
      }
    } catch (_) {}
  }, { passive: true });

  window.addEventListener('pageshow', () => {
    bar.style.width = '100%';
    setTimeout(() => { bar.style.opacity = '0'; bar.style.width = '0'; }, 350);
  });

})();
