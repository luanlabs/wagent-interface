importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  projectId: 'wagent-29d24',
  measurementId: 'G-ND3R1GL7J7',
  messagingSenderId: '435272937099',
  storageBucket: 'wagent-29d24.appspot.com',
  authDomain: 'wagent-29d24.firebaseapp.com',
  apiKey: 'AIzaSyD-MaIEVxb1qdiscYw40c0hrGS6QWFUi7Q',
  appId: '1:435272937099:web:68855e2302bde0e5002e8e',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const link = payload.fcmOptions?.link || payload.data?.link;

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://static.wagent.app/icons/wagent.png',
    data: { url: link },
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      const url = event.notification.data.url;

      if (!url) return;

      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        console.log('OPENWINDOW ON CLIENT');
        return clients.openWindow(url);
      }
    }),
  );
});
