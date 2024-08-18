import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import fetch from '@/utils/request';

const firebaseConfig = {
  projectId: 'wagent-29d24',
  measurementId: 'G-ND3R1GL7J7',
  messagingSenderId: '435272937099',
  storageBucket: 'wagent-29d24.appspot.com',
  authDomain: 'wagent-29d24.firebaseapp.com',
  apiKey: 'AIzaSyD-MaIEVxb1qdiscYw40c0hrGS6QWFUi7Q',
  appId: '1:435272937099:web:68855e2302bde0e5002e8e',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const getFirebaseToken = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY });
    if (token) {
      fetch('https://api2.wagent.app/services/send-notification', {
        method: 'POST',
        body: JSON.stringify({
          token: token,
          title: 'x',
          body: 'y',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
      });
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('Error retrieving Firebase token:', error);
  }
};

const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      await getFirebaseToken();
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

export { getFirebaseToken, requestForToken };
