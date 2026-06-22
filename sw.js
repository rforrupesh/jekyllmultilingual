// ── UnificarPDF Service Worker v4 — Performance + Cache ──────
const CACHE_NAME = 'unificarpdf-v4';

// Long cache for immutable assets (CDN libs never change at same URL)
const IMMUTABLE_CDN = ['unpkg.com', 'cdnjs.cloudflare.com', 'fonts.gstatic.com'];

// Helpers
const isCDN    = h => IMMUTABLE_CDN.some(d => h === d || h.endsWith('.' + d));
const isOrigin = u => u.origin === self.location.origin;
const isAsset  = u => /\.(css|js|woff2?|ttf|png|jpg|jpeg|svg|ico|webp|gif|avif|json)(\?.*)?$/.test(u.pathname);

// ── INSTALL ───────────────────────────────────────────────────
self.addEventListener('install', () => self.skipWaiting());

// ── ACTIVATE ──────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // CDN libs (pdf-lib, pako) → Cache forever, serve instantly
  if (isCDN(url.hostname)) {
    event.respondWith(cacheForever(event.request));
    return;
  }

  // Same-origin static assets → Cache with long TTL override
  if (isOrigin(url) && isAsset(url)) {
    event.respondWith(cacheAssetLong(event.request));
    return;
  }

  // HTML pages → Stale-while-revalidate
  if (isOrigin(url)) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
});

// Cache forever (CDN libs with version in URL — safe)
async function cacheForever(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) {
      // Store with long cache headers stripped — SW is the cache
      const cache = await caches.open(CACHE_NAME);
      // Clone and rewrite cache-control to be long
      const headers = new Headers(res.headers);
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      const longRes = new Response(await res.blob(), { status: res.status, statusText: res.statusText, headers });
      cache.put(req, longRes.clone());
      return longRes;
    }
    return res;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

// Cache static assets with 7-day TTL
async function cacheAssetLong(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(CACHE_NAME);
      const headers = new Headers(res.headers);
      headers.set('Cache-Control', 'public, max-age=604800'); // 7 days
      const longRes = new Response(await res.blob(), { status: res.status, statusText: res.statusText, headers });
      cache.put(req, longRes.clone());
      return longRes;
    }
    return res;
  } catch {
    const fallback = await caches.match(req);
    return fallback || new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate for HTML
async function staleWhileRevalidate(req) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  const fresh  = fetch(req).then(res => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return cached || fresh || new Response('Offline', { status: 503 });
}

// ── MESSAGES ──────────────────────────────────────────────────
self.addEventListener('message', async event => {
  const { type, urls } = event.data || {};

  if (type === 'PREFETCH' && Array.isArray(urls)) {
    const cache = await caches.open(CACHE_NAME);
    Promise.allSettled(
      urls.map(url =>
        caches.match(url).then(hit => {
          if (!hit) return fetch(url).then(r => { if (r.ok) cache.put(url, r.clone()); }).catch(() => {});
        })
      )
    );
  }

  if (type === 'SKIP_WAITING') self.skipWaiting();
});
