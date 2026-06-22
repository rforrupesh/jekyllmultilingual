// ── UnificarPDF Service Worker ──────────────────────────────
const CACHE_NAME = 'unificarpdf-v1';

// All assets needed to run the app offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  // pdf-lib (the core merge engine)
  'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js',
  // pako (compression)
  'https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js',
];

// ── INSTALL: pre-cache everything ──────────────────────────
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache each asset individually so one failure doesn't block others
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url =>
          cache.add(url).catch(err => {
            console.warn('[SW] Failed to cache:', url, err);
          })
        )
      );
    })
  );
});

// ── ACTIVATE: remove old caches ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: serve from cache, fall back to network ──────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — try network, then optionally cache the response
      return fetch(event.request).then(response => {
        // Only cache successful responses for same-origin or our CDN assets
        if (
          response.ok &&
          (url.origin === self.location.origin ||
           url.hostname === 'unpkg.com' ||
           url.hostname === 'cdnjs.cloudflare.com')
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline and not cached
        // For HTML navigation requests, return the cached index
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./') || caches.match('./index.html');
        }
        return new Response('Offline — resource not cached', { status: 503 });
      });
    })
  );
});

// ── MESSAGE: allow page to trigger cache refresh ───────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data?.type === 'CACHE_STATUS') {
    caches.open(CACHE_NAME).then(cache =>
      cache.keys().then(keys => {
        event.ports[0].postMessage({ cached: keys.length });
      })
    );
  }
});
