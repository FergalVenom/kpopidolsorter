const CACHE_NAME = 'kpop-sorter-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'src/css/reset.css',
  'src/css/styles.css',
  'src/js/data.js',
  'src/js/data/2025-11-01.js',
  'src/js/data/custom.js',
  'src/js/html2canvas.min.js',
  'src/js/lz-string.min.js',
  'src/js/seedrandom.min.js',
  'src/js/main.js',
  'src/assets/Nana.jpg'
];

// Install Event - cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell and core assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - intercept requests
self.addEventListener('fetch', event => {
  // Only handle HTTP/HTTPS requests (avoid chrome-extension:// etc.)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached core asset or previously cached image
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request).then(networkResponse => {
        // If it is an image request (e.g. from imgur), cache it dynamically on the fly
        if (event.request.url.includes('imgur.com') || event.request.destination === 'image') {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      }).catch(err => {
        console.log('Network request failed:', event.request.url, err);
        // Fail silently or show fallback image if possible
      });
    })
  );
});
