const CACHE_NAME = 'unspoken-love-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/IMG-20250314-WA0003.jpg'
  // If you added an ambient.mp3, put '/ambient.mp3' here too
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});