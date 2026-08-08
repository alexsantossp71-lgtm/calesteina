const CACHE_NAME = 'calistenia-pro-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './program.html',
  './exercise.html',
  './library.html',
  './calculator.html',
  './style.css',
  './script.js',
  './exercises-data.js',
  './manifest.json',
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
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
