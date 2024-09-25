'use client';

import { useRouter } from 'next/navigation';

import { Failed } from '@/assets';
import { Pages } from '@/constants/pages';
import CButton from '@/components/CButton';

export default function Error() {
  const router = useRouter();

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
