const CACHE_NAME = 'seestory-v1';
const urlsToCache = [
  '/',
];

// Install event - cache essentials
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Cache opened:', CACHE_NAME);
        return cache.addAll(urlsToCache)
          .catch((err) => {
            console.warn('⚠️ Some assets could not be cached:', err);
          });
      })
      .catch((err) => {
        console.error('❌ Cache error:', err);
      })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle manifest specially
  if (request.url.includes('manifest.json')) {
    return event.respondWith(
      fetch(request)
        .then((response) => {
          // Don't cache manifest for dynamic updates
          return response;
        })
        .catch(() => {
          // If offline, try cache
          return caches.match(request);
        })
    );
  }

  // Network first strategy
  event.respondWith(
    fetch(request, { 
      // Important for ngrok: don't use credentials which can cause issues
      credentials: 'include' 
    })
      .then((response) => {
        // Don't cache if not successful
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone and cache successful responses
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(request, responseToCache).catch(() => {
              // Silently handle cache errors
            });
          });

        return response;
      })
      .catch((err) => {
        console.log(`Network failed for ${request.url}, trying cache...`);
        // Fallback to cache when offline
        return caches.match(request)
          .catch(() => {
            console.warn(`No cache for ${request.url}`);
          });
      })
  );
});

