'use client';

import React, { useEffect } from 'react';
import { requestForToken } from '@/firebase';

const Test = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    } else {
      console.log('Service Workers are not supported in this browser.');
    }

    requestForToken();
  }, []);
  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Test;
