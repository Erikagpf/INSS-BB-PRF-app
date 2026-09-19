/* Cache simples para o app funcionar offline depois da primeira visita. */
var CACHE = 'aprova-v3';
var ARQUIVOS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icons/icon.svg',
  './dados/conteudo-comum.js', './dados/conteudo-inss.js', './dados/conteudo-bb.js', './dados/conteudo-prf.js',
  './dados/banco-comum.js', './dados/banco-inss.js', './dados/banco-bb.js', './dados/banco-prf.js',
  './dados/simulados.js', './dados/redacoes.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  // Responde na hora com o cache e, em paralelo, busca a versão nova para a próxima abertura.
  e.respondWith(
    caches.match(e.request).then(function (cacheado) {
      var daRede = fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200) {
          var copia = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
        }
        return resp;
      }).catch(function () { return cacheado || caches.match('./index.html'); });
      return cacheado || daRede;
    })
  );
});
