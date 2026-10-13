const CACHE_NAME = 'dic-juridico-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './image_0.png' // Sua imagem de fundo
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Responde às requisições usando o cache (permite uso offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});