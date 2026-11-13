// Eski CTK Saha kurulumları için: önbelleği sil, kendini kaldır, açık pencereleri yeni adrese gönder.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://ctkarchives.com/app/');
})()));
