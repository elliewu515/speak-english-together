const CACHE_NAME = 'speak-english-together-v4';

self.addEventListener('install', (event) => {
    // Skip waiting to activate immediately
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Network-first strategy: always try network first, fallback to cache
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache the fresh version
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            })
            .catch(() => {
                // Offline fallback: try cache
                return caches.match(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            // Delete all old caches
            return Promise.all(keys.map(k => caches.delete(k)));
        })
    );
});
