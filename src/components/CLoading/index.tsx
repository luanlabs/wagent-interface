import React from 'react';
import Image from 'next/image';

import wagentLogo from 'public/images/wagentLogo.svg';

const CLoading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center text-center items-center">
      <Image src={wagentLogo} alt="Wagent" />
      <p className="text-xl font-medium mb-6">Please wait</p>
      <div className="relative w-1/4 min-w-[200px] mb-3 h-[6px] bg-[#F2F2F2] rounded">
        <div className="absolute top-0 h-1 bg-[#008B5B] animate-progress rounded"></div>
      </div>
      <p className="text-sm text-[#3D3D3D]">This may take a few seconds</p>
    </div>
  );
};

export default CLoading;
