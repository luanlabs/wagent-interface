import React, { useState } from 'react';
import Link from 'next/link';

import CCard from '@/components/CCard';
import { Bell, Typography } from '@/assets';
import { ExternalLinks } from '@/constants/pages';

import Notification from '../Notification';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  return (
    <CCard
      className="relative flex justify-between w-full items-center py-4 px-6 mobile:px-4 mobile:fixed mobile:top-0 mobile:right-0 mobile:left-0 mobile:h-16
        desktop:mb-[10px] mobile:rounded-none mobile:!border-t-0 z-40"
      borderColor="rgba(5, 1, 66, 0.10)"
      bgColor="white"
    >
      <Link href={ExternalLinks.LANDING} target="blank" className="cursor-pointer">
        <Typography />
      </Link>
      <div
        className="cursor-pointer size-10 flex justify-center items-center
        border border-[#F2F4F7] rounded-[10px]"
        onClick={toggleNotification}
      >
        <Bell />
        <Notification isOpen={isNotificationOpen} onClose={closeNotification} />
      </div>
    </CCard>
  );
};

export default Header;
