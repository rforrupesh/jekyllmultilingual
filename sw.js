// ── UnificarPDF Service Worker v3 — Zero Hardcoded URLs ─────
// Pages tell the SW what to cache. SW never hardcodes any URLs.

const CACHE_NAME = 'unificarpdf-v3';

// CDN domains we trust to cache
const TRUSTED_CDN = ['unpkg.com', 'cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

const isCDN    = h => TRUSTED_CDN.some(d => h === d || h.endsWith('.' + d));
const isOrigin = u => u.origin === self.location.origin;
const isAsset  = u => /\.(css|js|woff2?|ttf|png|jpg|jpeg|svg|ico|webp|gif|json)(\?.*)?$/.test(u.pathname);
const isHTML   = r => (r.headers?.get('accept') || '').includes('text/html');

// ── INSTALL: nothing to pre-cache, page will tell us ─────────
self.addEventListener('install', () => self.skipWaiting());

// ── ACTIVATE ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: smart routing ──────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // CDN libs → Cache First (immutable)
  if (isCDN(url.hostname)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Same-origin assets (CSS/JS/images) → Cache First
  if (isOrigin(url) && isAsset(url)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Same-origin HTML → Stale While Revalidate (instant + stays fresh)
  if (isOrigin(url)) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
});

// ── Strategies ────────────────────────────────────────────────
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) (await caches.open(CACHE_NAME)).put(req, res.clone());
    return res;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(req) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  // Always revalidate in background
  const fresh  = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
  return cached || fresh || new Response('Offline', { status: 503 });
}

// ── MESSAGES from page ────────────────────────────────────────
self.addEventListener('message', async event => {
  const { type, urls } = event.data || {};

  // Page sends discovered links → we cache them silently
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
