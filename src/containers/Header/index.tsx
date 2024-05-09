import React from 'react';
import Link from 'next/link';

import CCard from '@/components/CCard';
import { Bell, Typography } from '@/assets';
import ExternalLinks from '@/constants/externalLinks';

const Header = () => {
  return (
    <header className="flex justify-between w-full items-center py-[16px] px-6">
      <Link href={ExternalLinks.LANDING} target="blank" className="cursor-pointer">
        <Typography />
      </Link>
      <CCard
        borderColor="#F2F4F7"
        className="cursor-pointer size-10 flex justify-center items-center"
      >
        <Bell />
      </CCard>
    </header>
  );
};

export default Header;
