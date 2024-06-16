import React from 'react';

import { Typography } from '@/assets';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';

import googleIcon from '../../../public/images/google.png';
import barcodeIcon from '../../../public/images/barcode.png';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-ashGray">
      <div className="w-[24%] min-w-[340px] p-6 bg-white rounded-3xl shadow-md">
        <div className="flex flex-col items-center w-full mt-[18px]">
          <Typography />
          <div className="mt-5 text-center space-y-4 mb-4">
            <p className="text-2xl font-medium">Sign Up</p>
            <p className="text-sm text-cadetBlue">Create your first account in Wagent!</p>
          </div>

          <div className="space-y-3 w-full">
            <CInput border placeholder="store name" label="Enter your store name" />
            <CInput border placeholder="Email" label="Enter your email" />
            <CInput border placeholder="Password" label="Password" />
            <CInput border placeholder="Password" label="confirm Password" />
          </div>
          <div className="w-full text-center space-y-2">
            <CButton variant="confirm" text="Sign Up" className="mt-4" />
            <p className="my-2"> Or</p>
            <CButton
              variant="outline"
              text="Sign Up with Google"
              className="mt-4"
              icon={googleIcon}
              alt="google"
              iconClassName="mr-1"
            />
            <CButton
              variant="outline"
              text="Sign Up with QR code"
              className="mt-4"
              icon={barcodeIcon}
              alt="barcode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
