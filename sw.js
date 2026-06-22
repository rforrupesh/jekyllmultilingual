// ── UnificarPDF Service Worker v5 ────────────────────────────
// Auto-detects and caches ALL assets from the page response.
// Overrides GitHub Pages' 10min TTL with long SW cache.

const CACHE_NAME = 'unificarpdf-v5';
const SCOPE      = '/jekyllmultilingual/';

// CDN domains — cache forever (versioned URLs never change)
const CDN_HOSTS = ['unpkg.com', 'cdnjs.cloudflare.com', 'fonts.gstatic.com', 'fonts.googleapis.com'];
const isCDN    = h => CDN_HOSTS.some(d => h === d || h.endsWith('.' + d));
const isOrigin = u => u.origin === self.location.origin;
const isAsset  = u => /\.(css|js|woff2?|ttf|png|jpg|jpeg|svg|ico|webp|avif|gif|json)(\?.*)?$/.test(u.pathname);

// How long WE cache things (SW overrides server headers)
const TTL = {
  image : 60 * 60 * 24 * 30,   // 30 days  (images rarely change)
  asset : 60 * 60 * 24 * 7,    // 7 days   (css/js)
  cdn   : 60 * 60 * 24 * 365,  // 1 year   (CDN versioned)
  page  : 60 * 60 * 24,        // 1 day    (HTML pages)
};

function isImage(u) {
  return /\.(png|jpg|jpeg|webp|avif|gif|svg|ico)(\?.*)?$/.test(u.pathname);
}

// Clone response and inject long Cache-Control header
async function withLongCache(response, seconds) {
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', `public, max-age=${seconds}`);
  headers.set('X-SW-Cached', 'true');
  const body = await response.arrayBuffer();
  return new Response(body, { status: response.status, statusText: response.statusText, headers });
}

// ── INSTALL: cache the main HTML shell immediately ───────────
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Pre-cache the root page so SW can parse + cache all its assets
      fetch(SCOPE).then(r => {
        if (r.ok) cache.put(SCOPE, r.clone());
      }).catch(() => {})
    )
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: intercept + serve with long TTL ───────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // CDN libs (pdf-lib, pako) → 1-year cache
  if (isCDN(url.hostname)) {
    event.respondWith(serveWithTTL(event.request, TTL.cdn));
    return;
  }

  // Same-origin images → 30-day cache
  if (isOrigin(url) && isImage(url)) {
    event.respondWith(serveWithTTL(event.request, TTL.image));
    return;
  }

  // Same-origin CSS/JS/fonts → 7-day cache
  if (isOrigin(url) && isAsset(url)) {
    event.respondWith(serveWithTTL(event.request, TTL.asset));
    return;
  }

  // HTML pages → stale-while-revalidate + 1-day cache
  if (isOrigin(url)) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
});

// Cache-first with TTL override
async function serveWithTTL(request, ttlSeconds) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  // Check if cached copy is still fresh enough
  if (cached) {
    const cachedAt = cached.headers.get('X-SW-CachedAt');
    if (cachedAt) {
      const age = (Date.now() - parseInt(cachedAt, 10)) / 1000;
      if (age < ttlSeconds) return cached; // still fresh
    } else {
      return cached; // no timestamp = first SW version, serve it
    }
  }

  // Fetch fresh copy
  try {
    const response = await fetch(request);
    if (!response.ok) return cached || response;

    const headers = new Headers(response.headers);
    headers.set('Cache-Control', `public, max-age=${ttlSeconds}`);
    headers.set('X-SW-CachedAt', String(Date.now()));
    headers.set('X-SW-TTL', String(ttlSeconds));

    const body = await response.arrayBuffer();
    const stored = new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    cache.put(request, stored.clone());
    return stored;
  } catch {
    return cached || new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate for HTML
async function staleWhileRevalidate(request) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchAndCache = fetch(request).then(async res => {
    if (!res.ok) return res;
    const headers = new Headers(res.headers);
    headers.set('Cache-Control', `public, max-age=${TTL.page}`);
    headers.set('X-SW-CachedAt', String(Date.now()));
    const body = await res.arrayBuffer();
    const stored = new Response(body, { status: res.status, statusText: res.statusText, headers });
    cache.put(request, stored.clone());
    return stored;
  }).catch(() => null);

  return cached || fetchAndCache || new Response('Offline', { status: 503 });
}

// ── MESSAGES ─────────────────────────────────────────────────
self.addEventListener('message', async event => {
  const { type, urls } = event.data || {};

  if (type === 'SKIP_WAITING') { self.skipWaiting(); return; }

  // Prefetch list of URLs with appropriate TTL
  if (type === 'PREFETCH' && Array.isArray(urls)) {
    const cache = await caches.open(CACHE_NAME);
    Promise.allSettled(urls.map(async rawUrl => {
      const cached = await cache.match(rawUrl);
      if (cached) return; // already cached

      try {
        const url = new URL(rawUrl);
        const res = await fetch(rawUrl);
        if (!res.ok) return;

        const ttl = isCDN(url.hostname) ? TTL.cdn
                  : isImage(url)        ? TTL.image
                  : isAsset(url)        ? TTL.asset
                  : TTL.page;

        const headers = new Headers(res.headers);
        headers.set('Cache-Control', `public, max-age=${ttl}`);
        headers.set('X-SW-CachedAt', String(Date.now()));
        const body = await res.arrayBuffer();
        const stored = new Response(body, { status: res.status, statusText: res.statusText, headers });
        cache.put(rawUrl, stored);
      } catch (_) {}
    }));
  }

  // Auto-extract and cache all assets found in an HTML page
  if (type === 'CACHE_PAGE_ASSETS' && typeof urls?.[0] === 'string') {
    try {
      const html = await fetch(urls[0]).then(r => r.text());
      const found = extractAssets(html, urls[0]);
      const ctrl  = await self.clients.matchAll();
      // Re-send as PREFETCH
      event.source?.postMessage({ type: 'PREFETCH', urls: found });
    } catch (_) {}
  }
});

// Parse HTML string and extract all linked assets
function extractAssets(html, baseUrl) {
  const base   = new URL(baseUrl);
  const assets = new Set();
  const patterns = [
    /href=["']([^"']+\.(?:css|js|woff2?|png|jpg|jpeg|svg|ico|webp|avif|gif))["']/gi,
    /src=["']([^"'#?]+\.(?:js|png|jpg|jpeg|svg|ico|webp|avif|gif))["']/gi,
    /url\(["']?([^"')]+\.(?:woff2?|png|jpg|jpeg|svg|ico|webp))["']?\)/gi,
  ];
  patterns.forEach(re => {
    let m;
    while ((m = re.exec(html)) !== null) {
      try {
        const abs = new URL(m[1], base).href;
        if (abs.startsWith('http')) assets.add(abs);
      } catch (_) {}
    }
  });
  return [...assets];
}
