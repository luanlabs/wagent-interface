'use client';

import React from 'react';
import { requestNotificationPermission } from '@/services/firebase';
import CButton from '@/components/CButton';

const Test = () => {
  const handleClick = () => {
    requestNotificationPermission();
  };

  return (
    <div>
      <CButton
        onClick={handleClick}
        variant="simple"
        className="bg-darkGreen !w-1/4 m-2 text-white"
      >
        Subscribe notifications
      </CButton>
    </div>
  );
};

export default Test;
