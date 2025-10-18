const CACHE_NAME = 'cahier-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
  'index.html',
  'style.css',
  'main.js',
  'manifest.json',
  'dashboard.html',
  'assets/logo.png',
  'assets/logo.jpeg',
  'assets/photo1.jpeg',
  'assets/photo5.jpeg',
  'assets/photo6.jpeg',
  'assets/photo7.jpeg',
  // يجب إضافة جميع الصور ومقاطع الفيديو الأخرى هنا
  'icons/icon-192.png',
  'icons/icon-512.png',
  // الأيقونات الخارجية المستخدمة في المنتدى
  'https://api.iconify.design/mdi/account-question-outline.svg',
  'https://api.iconify.design/mdi/account-tie-outline.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
