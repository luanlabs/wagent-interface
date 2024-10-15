'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import { Failed } from '@/assets';
import { Pages } from '@/constants/pages';
import CButton from '@/components/CButton';
import { ErrorMsg } from '@/constants/types';

type ErrorProps = {
  error?: any;
};

export default function Error({ error }: ErrorProps) {
  const router = useRouter();

  if (error?.data?.message === ErrorMsg.INVALID_TOKEN) {
    Cookies.remove('token');
  }

  const handleGoHome = () => {
    router.push(Pages.DASHBOARD);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen px-4">
      <div className="scale-[2] mb-4">
        <Failed />
      </div>
      <p className="text-2xl text-center text-darkBlue">something went wrong!</p>
      <CButton
        variant="simple"
        text="Go Home"
        className="!w-[280px] mt-2 mx-4 bg-lightestRed border border-lightRed text-error"
        onClick={handleGoHome}
      />
    </div>
  );
}
