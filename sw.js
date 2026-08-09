const CACHE_NAME = 'calistenia-pro-v2-premium';
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
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((network) => {
        if (!network || network.status !== 200 || network.type !== 'basic') return network;
        const clone = network.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return network;
      }).catch(() => {
        if (event.request.headers.get('accept')?.includes('text/html')) return caches.match('./index.html');
      });
    })
  );
});
