'use client';

import React from 'react';
import Image from 'next/image';

import { Typography } from '@/assets';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';

import CCheckbox from '@/components/CCheckbox';
import dashboardGlance from 'public/images/dashboardGlance.svg';

const SignupContainer = () => {
  const handleRememberChange = () => {};

  return (
    <div className="flex items-center mobile:justify-center justify-between h-screen mobile:bg-white bg-ashGray">
      <div className="w-[35%] mobile:w-full h-full p-6">
        <div className="flex flex-col bg-white h-full rounded-3xl px-8 py-7 shadow-md mobile:shadow-none mobile:px-4 mobile:py-5 mobile:rounded-none">
          <div className="flex justify-start items-start">
            <Typography />
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col w-full">
              <div className="my-4 space-y-4">
                <p className="text-2xl font-medium text-darkGreen">Sign Up</p>
              </div>

              <div className="space-y-3 w-full">
                <CInput border placeholder="store name" />
                <CInput border placeholder="Email" />
                <CInput border placeholder="Password" />
                <CInput border placeholder="confirm Password" />
              </div>
              <div className="w-full mt-2 space-y-3">
                <CCheckbox
                  label="Remember me"
                  checked={true}
                  onChange={handleRememberChange}
                  value="remember"
                  className="mt-2"
                />

                <CButton variant="confirm" text="Sign Up" className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-full mobile:hidden">
        <div></div>
        <div className="flex justify-end items-end h-full">
          <div className="relative flex w-full h-[85%]">
            <Image
              src={dashboardGlance}
              alt="dashboardGlance"
              fill
              className="!select-none"
              draggable="false"
            />
            <div className="absolute text-xs text-darkGreen bigScreen:text-sm bigScreen:bottom-[5%] bottom-[26px] left-[8%]">
              XYX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
