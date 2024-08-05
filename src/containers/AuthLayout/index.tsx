'use client';

import React from 'react';
import Image from 'next/image';

type AuthLayoutProps = {
  children: React.ReactNode;
  ImageSrc: string;
};

const AuthLayout = ({ children, ImageSrc }: AuthLayoutProps) => {
  return (
    <div className="flex items-center mobile:justify-center justify-between h-screen mobile:bg-white bg-ashGray">
      <div className="w-[35%] mobile:w-full h-full p-6">{children}</div>
      <div className="w-[65%] h-full mobile:hidden">
        <div className="flex justify-end items-end h-full">
          <div className="relative flex w-full h-[85%]">
            <Image
              src={ImageSrc}
              alt="dashboardImage"
              fill
              priority
              className="!select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
