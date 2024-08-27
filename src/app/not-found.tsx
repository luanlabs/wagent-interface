import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import notFound from 'public/images/404.png';

export const metadata: Metadata = {
  title: 'Wagent - Page not found',
};

const NotFound = () => {
  return (
    <div className="h-screen w-screen grid place-content-center select-none mobile:px-4">
      <Image src={notFound} alt="404" priority />
      <div className="-mt-2 text-center space-y-4">
        <p className="text-2xl font-medium mobile:text-xl">Page not found</p>
        <p className="text-lg mobile:text-sm text-[#000000B2]">
          Sorry, but we cannot locate your requested page
        </p>
      </div>
    </div>
  );
};

export default NotFound;
