const CACHE='karada-log-shell-v16';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./manifest.json','./icon-180.png','./apple-touch-icon.png'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET') return;
 if(u.pathname.endsWith('/index.html')||u.pathname.endsWith('/')) {
   e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match('./index.html')));
 } else {
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
 }
});