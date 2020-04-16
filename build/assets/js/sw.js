const cacheName = "Purkiáda";
const staticAssets = [
    "./",
    "../../index.html",
    "../../zadani.html",
    "../../zadani/2020.html",
    "./app.js",
    "../css/main.min.css",
    "../favicon_io/site.webmanifest"
];

self.addEventListener('install', async function(event) {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

// self.addEventListener("activate", e => {
//     self.clients.claim();
// })