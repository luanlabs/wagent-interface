'use client';

import React from 'react';
import Image from 'next/image';

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
