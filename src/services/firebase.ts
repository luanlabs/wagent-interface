import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import request from '../utils/request';

const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
let messaging: any;

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      await requestFirebaseToken();
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

const requestFirebaseToken = async () => {
  if (!messaging) {
    messaging = getMessaging(app);
  }

  try {
    const token = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY });
    if (token) {
      request('https://api2.wagent.app/services/send-notification', {
        method: 'POST',
        body: JSON.stringify({
          token: token,
          title: 'Wagent',
          body: 'An Item has just been Sold!',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('Error retrieving Firebase token:', error);
  }
};
