function sendMessageToAllClients(command, message) {
  clients.matchAll({ type: 'window' }).then(function (windowClients) {
    windowClients.forEach(function (windowClient) {
      windowClient.postMessage({ command: command, message: message || '' });
    });
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(skipWaiting());
});

self.addEventListener('activate', function (event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('message', function (event) {
  switch (event.data.command) {
    case 'subscribe':
      let subscriptionOptions = event.data.subscriptionOptions;
      if (subscriptionOptions.hasOwnProperty('applicationServerKey')) {
        subscriptionOptions.applicationServerKey = new Uint8Array(
          subscriptionOptions.applicationServerKey,
        );
      }

      registration.pushManager
        .subscribe(subscriptionOptions)
        .then(function (subscription) {
          sendMessageToAllClients('subscribe-success');
        })
        .catch(function (error) {
          sendMessageToAllClients('subscribe-failure', '' + error);
        });

      break;

    case 'unsubscribe':
      registration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (subscription) return subscription.unsubscribe();
        })
        .then(function () {
          sendMessageToAllClients('unsubscribe-success');
        })
        .catch(function (error) {
          sendMessageToAllClients('unsubscribe-failure', '' + error);
        });
  }
});

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    const title = data.notification?.title;
    const body = data.notification?.body;
    const iconUrl = './images/wagentLogo.svg';

    event.waitUntil(
      registration.showNotification(title, {
        body,
        icon: iconUrl,
      }),
    );
  }
});
