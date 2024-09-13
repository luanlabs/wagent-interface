'use client';

import React from 'react';
import Image from 'next/image';
import Typography from '@/assets/Typography';

type AuthLayoutProps = {
  children: React.ReactNode;
  imageSrc: string;
};

const AuthLayout = ({ children, imageSrc }: AuthLayoutProps) => {
  return (
    <div className="flex items-center mobile:justify-center justify-between h-screen mobile:bg-white bg-ashGray">
      <div className="w-[35%] mobile:w-full h-full desktop:p-6">
        <div className="flex flex-col bg-white h-full rounded-3xl px-8 py-7 shadow-md mobile:shadow-none mobile:px-4 mobile:py-6 mobile:rounded-none">
          <div className="flex justify-start items-start">
            <Typography />
          </div>
          <div className="flex h-full w-full justify-center mobile:items-start mobile:!mt-12 short:items-center short:mt-0 desktop:mt-[25%] bigScreen:mt-[36%]">
            <div className="flex flex-col h-full w-full">{children}</div>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-full mobile:hidden">
        <div className="flex justify-end items-end h-full">
          <div className="relative flex w-full h-[85%]">
            <Image
              priority
              fill
              src={imageSrc}
              draggable="false"
              alt="dashboardImage"
              className="!select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
