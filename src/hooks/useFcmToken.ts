import { useEffect, useState } from 'react';
import { onMessage, Unsubscribe } from 'firebase/messaging';
import { fetchToken, messaging } from '@/services/firebase';

async function getNotificationPermissionAndToken() {
  if (!('Notification' in window)) {
    console.info('This browser does not support desktop notification');

    return '';
  }

  if (Notification.permission === 'granted') {
    return await fetchToken();
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      return await fetchToken();
    }
  }

  return '';
}

const useFcmToken = () => {
  const [token, setToken] = useState<string>('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState<NotificationPermission>('default');

  const loadToken = async () => {
    const token = await getNotificationPermissionAndToken();

    if (token === '') {
      console.error('An error occurred while retrieving token. Retrying...');

      // await loadToken();
      return '';
    }

    if (Notification.permission === 'denied') {
      return '';
    }

    setToken(token);
    setNotificationPermissionStatus(Notification.permission);
  };

  useEffect(() => {
    if ('Notification' in window) {
      loadToken();
    }
  });

  useEffect(() => {
    const setupListener = async () => {
      if (!token) return;

      const m = await messaging();
      if (!m) return;

      const unsubscribe = onMessage(m, (payload) => {
        if (Notification.permission !== 'granted') return;
      });

      return unsubscribe;
    };

    let unsubscribe: Unsubscribe | null = null;

    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });

    return () => unsubscribe?.();
  }, [token]);

  return { token, notificationPermissionStatus };
};

export default useFcmToken;
