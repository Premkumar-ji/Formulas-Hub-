/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope;

// Cleanup outdated caches from prior builds
cleanupOutdatedCaches();

// Precaches all Vite build assets
precacheAndRoute(self.__WB_MANIFEST || []);

// Immediately activate and take control of all open pages
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Native Web Push Notification handler
// This wakes up the service worker on Android & iOS mobile devices even when the app is closed!
self.addEventListener('push', (event) => {
  let data: any = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data = { title: 'Formula Reminder', body: event.data.text() };
    }
  }

  const title = data.title || '⚡ Formula Reminder';
  const body = data.body || 'Time for your daily mathematical formula revision!';
  const icon = data.icon || '/pwa-192x192.png';
  const badge = data.badge || '/pwa-192x192.png';
  const tag = data.tag || `formula-reminder-${Date.now()}`;
  const customData = data.data || { url: '/' };

  const options: any = {
    body,
    icon,
    badge,
    tag,
    data: customData,
    renotify: true,
  };

  // Only attach advanced properties if supported (prevents silent WebKit/iOS showNotification rejection)
  if ('vibrate' in navigator) {
    options.vibrate = [200, 100, 200, 100, 200];
  }
  options.actions = [
    { action: 'open', title: 'Open Formula' },
    { action: 'dismiss', title: 'Got It' },
  ];

  event.waitUntil(
    self.registration.showNotification(title, options).catch((err) => {
      console.warn('showNotification with actions failed, retrying with basic options:', err);
      return self.registration.showNotification(title, {
        body,
        icon,
        badge,
        tag,
        data: customData,
      });
    })
  );
});

// Notification click event handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // If a window is already open, focus it
      for (const client of windowClients) {
        if ('focus' in client) {
          if (client.url && client.url.includes(self.location.origin)) {
            client.postMessage({
              type: 'NOTIFICATION_CLICKED',
              data: event.notification.data,
            });
            return client.focus();
          }
        }
      }
      // If no window is open, open a new window
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// Periodic Background Sync (supported on Android Chrome when engagement threshold is met)
self.addEventListener('periodicsync', (event: any) => {
  if (event.tag === 'formula-daily-sync') {
    event.waitUntil(
      fetch('/api/reminders/due')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.hasReminder) {
            return self.registration.showNotification(data.title, {
              body: data.body,
              icon: '/pwa-192x192.png',
              badge: '/pwa-192x192.png',
              tag: `formula-sync-${Date.now()}`,
              data: data.data || { url: '/' },
            });
          }
        })
        .catch(() => {})
    );
  }
});

// Message listener from React client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SW_PING') {
    event.ports?.[0]?.postMessage({ type: 'SW_PONG', state: 'active' });
    return;
  }
  if (event.data && event.data.type === 'SHOW_NATIVE_NOTIFICATION') {
    const { title, body, tag, data } = event.data;
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag: tag || `local-${Date.now()}`,
        data: data || { url: '/' },
        renotify: true,
      } as any)
    );
  }
});
