self.addEventListener('push', (event) => {
  const title = 'Notification';
  const body = 'You have a new notification';

  const options = {
    body,
    icon: '../public/icons/icon-64.png',
    data: {},
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.notification.data && event.notification.data.url) {
    clients.openWindow(event.notification.data.url);
  }
});
