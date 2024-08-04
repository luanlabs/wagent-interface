'use client';

import React from 'react';
import Image from 'next/image';

import shop from 'public/images/shop.svg';
import settingsGlance from 'public/images/settingsGlance.svg';

import SignUpForm from './form';

const SignupContainer = () => {
  return (
    <div className="flex items-center mobile:justify-center justify-between h-screen mobile:bg-white bg-ashGray">
      <div className="w-[35%] mobile:w-full h-full p-6">
        <SignUpForm />
      </div>
      <div className="w-[65%] h-full mobile:hidden">
        <div className="flex justify-end items-end h-full">
          <div className="relative flex w-full h-[85%]">
            <Image
              src={settingsGlance}
              alt="settingsGlance"
              fill
              priority
              className="!select-none"
              draggable="false"
            />
            <div
              className="absolute flex gap-2 items-center select-none text-xs text-darkGreen short:text-xs
              bigScreen:text-sm bigScreen:bottom-[5%] bigScreen:left-[60px] short:left-9 bottom-[26px] left-[48px]"
            >
              <Image
                src={shop}
                alt="shop icon"
                className="!select-none w-[16px] h-[16px] bigScreen:h-[18px] bigScreen:w-[18px] short:h-3 short:w-3"
                draggable="false"
              />
              XYX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
