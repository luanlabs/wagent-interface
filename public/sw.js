self.addEventListener('push', (event) => {
  const notificationOptions = {
    body: 'gogogoog',
    tag: 'unique-tag', // Use a unique tag to prevent duplicate notifications
    icon: '',
    data: {},
  };

  self.registration.showNotification(title, notificationOptions);

  self.addEventListener('notificationclick', (event) => {
    const notificationData = event.notification.data;

    if (notificationData.url) {
      // clients.openWindow(notificationData.url);
    }

    event.notification.close();
  });
});
``;
