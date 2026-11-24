const CACHE_NAME = 'calistenia-pro-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './program.html',
  './dashboard.html',
  './exercise.html',
  './library.html',
  './calculator.html',
  './style.css',
  './script.js',
  './exercises-data.js',
  './manifest.json',
  './assets/img/hero-athlete.jpg',
  './assets/img/og-cover.jpg',
  './assets/img/benefit-strength.jpg',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/img/icon-maskable-512.png',
  './assets/img/apple-touch-icon.png',
  './assets/img/squat.png',
  './assets/img/squat_start.png',
  './assets/img/squat_end.png',
  './assets/img/pushup.png',
  './assets/img/pushup_start.png',
  './assets/img/pushup_end.png',
  './assets/img/pullup.png',
  './assets/img/pullup_start.png',
  './assets/img/pullup_end.png',
  './assets/img/dip.png',
  './assets/img/dip_start.png',
  './assets/img/dip_end.png',
  './assets/img/lunge_start.png',
  './assets/img/lunge_end.png',
  './assets/img/plank.png',
  './assets/img/generic.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // Um asset bloqueado não pode impedir a instalação do service worker.
      .then((cache) => Promise.all(ASSETS_TO_CACHE.map((asset) => cache.add(asset).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null))))
      .then(() => self.clients.claim())
  );
});

// Rede primeiro (código sempre atualizado), cache como fallback offline.
function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)).catch(() => {});
      }
      return response;
    })
    .catch(() => caches.match(request).then((cached) => cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error())));
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (!/^https?:$/.test(url.protocol)) return;

  const isSameOrigin = url.origin === self.location.origin;
  const isCodeAsset = isSameOrigin && /\.(?:js|css)$/.test(url.pathname);

  if (request.mode === 'navigate' || isCodeAsset) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Imagens e fontes: cache primeiro, rede como fallback.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response && (response.status === 200 || response.type === 'opaque')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)).catch(() => {});
          }
          return response;
        })
        .catch(() => Response.error());
    })
  );
});
