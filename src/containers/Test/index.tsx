'use client';

import React, { useEffect } from 'react';
import { requestForToken } from '@/firebase';

const Test = () => {
  useEffect(() => {
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
