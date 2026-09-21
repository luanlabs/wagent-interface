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

  useEffect(() => {
    if (!('Notification' in window)) return;

    const loadToken = async () => {
      const fcmToken = await getNotificationPermissionAndToken();

      if (fcmToken === '') {
        console.error('An error occurred while retrieving the FCM token.');
        return;
      }

      if (Notification.permission === 'denied') {
        return;
      }

      setToken(fcmToken);
      setNotificationPermissionStatus(Notification.permission);
    };

    loadToken();
  }, []);

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
