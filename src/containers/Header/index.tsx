import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import CCard from '@/components/CCard';
import { Bell, Typography } from '@/assets';
import ExternalLinks from '@/constants/externalLinks';

type HeaderProps = { className: string };

const Header = ({ className }: HeaderProps) => {
  return (
    <CCard
      className={cn(
        className,
        `!w-full mobile:fixed mobile:top-0 mobile:right-0 mobile:left-0 mobile:h-16
        desktop:mb-[10px] mobile:rounded-none mobile:!border-t-0 z-[999] block`,
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
          className="cursor-pointer size-10 flex justify-center items-center hover:bg-lightGray active:bg-lightGray/20 transition"
        >
          <Bell />
        </CCard>
      </header>
    </CCard>
  );
};

export default Header;
