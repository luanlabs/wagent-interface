self.addEventListener('push', (event) => {
  const title = 'Notification';
  const body = 'You have a new notification';

  const options = {
    body,
    icon: `${process.env.NEXT_PUBLIC_API}/public/images/wagentLogo.svg`,
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
