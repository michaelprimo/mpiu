
const version = "1.0.6.8";
const cacheName = `Mpiuagency-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/styles/index.css`,
        `/scripts/comlink.global.js`,
        '/images/ombrello.png',
        '/logo.png',
        `/scripts/pwacompat.min.js`,
        '/traliccio.svg',
        '/particles.min.js',
        '/particles.json',
        '/app.js'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
