const CACHE='karada-log-v1.11.1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./manifest.json','./icon-180.png','./apple-touch-icon.png','./assets/yui/yui-good.png', './assets/yui/yui-aha.png', './assets/yui/yui-thinking.png', './assets/yui/yui-agree.png', './assets/yui/yui-cheer.png', './assets/yui/yui-hmm.png', './assets/yui/yui-oops.png', './assets/yui/yui-surprised.png', './assets/yui/yui-relieved.png', './assets/yui/yui-happy.png', './assets/yui/yui-idea.png', './assets/yui/yui-complete.png', './assets/yui/yui-working.png', './assets/yui/yui-check.png', './assets/yui/yui-together.png', './assets/yui/yui-thanks.png', './assets/audio/yui/hajimeruyo.mp3', './assets/audio/yui/ato_10byo.mp3', './assets/audio/yui/tsugiiko.mp3', './assets/audio/yui/kyukei.mp3', './assets/audio/yui/training_kanryo.mp3', './assets/audio/yui/otsukare.mp3', './assets/exercise-guides/deadbug.png', './assets/exercise-guides/plank.png', './assets/exercise-guides/sideplank-knee.png', './assets/exercise-guides/hiplift.png', './assets/exercise-guides/kneetochest.png', './assets/exercise-guides/birddog.png', './assets/exercise-guides/twistcrunch.png', './assets/exercise-guides/legraise.png'])))});
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