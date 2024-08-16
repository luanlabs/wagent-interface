'use client';

import React, { useEffect } from 'react';
import messaging from '@/firebase';

const home = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }

  useEffect(() => {
    messaging.firebaseDependencies.installations.getToken().then((t) => {
      console.log(t);
    });
  }, []);

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default home;
