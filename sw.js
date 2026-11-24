const CACHE_NAME = 'calistenia-pro-v5';

// Pré-cache do "shell" do app. Um asset bloqueado não pode impedir a instalação do SW.
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
  './assets/fonts/inter-latin.woff2',
  './assets/fonts/playfair-700.woff2',
  './assets/fonts/playfair-700-italic.woff2',
  './assets/img/hero-athlete.webp',
  './assets/img/og-cover.jpg',
  './assets/img/benefit-strength.webp',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/img/icon-maskable-512.png',
  './assets/img/apple-touch-icon.png',
  './assets/img/squat.webp',
  './assets/img/squat_start.webp',
  './assets/img/squat_end.webp',
  './assets/img/pushup.webp',
  './assets/img/pushup_start.webp',
  './assets/img/pushup_end.webp',
  './assets/img/pullup.webp',
  './assets/img/pullup_start.webp',
  './assets/img/pullup_end.webp',
  './assets/img/dip.webp',
  './assets/img/dip_start.webp',
  './assets/img/dip_end.webp',
  './assets/img/lunge_start.webp',
  './assets/img/lunge_end.webp',
  './assets/img/plank.webp',
  './assets/img/generic.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
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

// Imagens e fontes: mostra o cache na hora e atualiza em segundo plano.
// Assim uma ilustração nova substitui a antiga sem precisar trocar o nome do arquivo.
function staleWhileRevalidate(request) {
  return caches.match(request).then((cached) => {
    const network = fetch(request)
      .then((response) => {
        if (response && (response.status === 200 || response.type === 'opaque')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)).catch(() => {});
        }
        return response;
      })
      .catch(() => cached || Response.error());
    return cached || network;
  });
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

  event.respondWith(staleWhileRevalidate(request));
});
