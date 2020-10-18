const version = '1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(`static-${version}`)
      .then((cache) =>
        cache.addAll([
          '/',
          '/index.html',
          '/index.css',
          '/sw.js',
          '/logo.png',
          '/particles.min.js',
          '/wallpaper.jpg',
          '/app.js',
        ]),
      ),
  );
});