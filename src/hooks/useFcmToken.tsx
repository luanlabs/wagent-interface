import { useEffect, useRef, useState } from 'react';
import { onMessage, Unsubscribe } from 'firebase/messaging';
import { fetchToken, messaging } from '@/services/firebase';
import { useRouter } from 'next/navigation';

async function getNotificationPermissionAndToken() {
  if (!('Notification' in window)) {
    console.info('This browser does not support desktop notification');
    return null;
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

  return null;
}

const useFcmToken = () => {
  const router = useRouter();
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState<NotificationPermission | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const loadToken = async () => {
    const token = await getNotificationPermissionAndToken();

    if (Notification.permission === 'denied') {
      setNotificationPermissionStatus('denied');

      return;
    }

    if (!token) {
      console.error('An error occurred while retrieving token. Retrying...');
      await loadToken();
      return;
    }

    setNotificationPermissionStatus(Notification.permission);
    setToken(token);
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

        const link = payload.fcmOptions?.link || payload.data?.link;

        if (link) {
          router.push(link);
        }
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
  }, [token, router]);

  return { token, notificationPermissionStatus };
};

export default useFcmToken;
