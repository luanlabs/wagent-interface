import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

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

export default messaging;
