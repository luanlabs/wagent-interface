import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import CCard from '@/components/CCard';
import { Bell, Typography } from '@/assets';
import ExternalLinks from '@/constants/externalLinks';

import Notification from '../Notification';

type HeaderProps = { className: string };

const Header = ({ className }: HeaderProps) => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const toggleNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  const closeNotification = () => {
    setIsOpenNotification(false);
  };

  return (
    <CCard
      className={cn(
        className,
        `!w-full mobile:fixed mobile:top-0 mobile:right-0 mobile:left-0 mobile:h-16
        desktop:mb-[10px] mobile:rounded-none mobile:!border-t-0 z-[999] block relative`,
      )}
      borderColor="rgba(5, 1, 66, 0.10)"
      bgColor="white"
    >
      <header className="flex justify-between w-full items-center mobile:h-16 py-[16px] px-6 mobile:px-4">
        <Link href={ExternalLinks.LANDING} target="blank" className="cursor-pointer">
          <Typography />
        </Link>
        <CCard
          borderColor="#F2F4F7"
          className="cursor-pointer size-10 flex justify-center items-center"
          onClick={toggleNotification}
        >
          <Bell />
        </CCard>
      </header>

      <Notification isOpen={isOpenNotification} onClose={closeNotification} />
    </CCard>
  );
};

export default Header;
