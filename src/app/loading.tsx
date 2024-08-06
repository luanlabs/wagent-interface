'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import wagentLogo from 'public/images/wagentLogo.svg';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center text-center items-center">
      <Image src={wagentLogo} alt="Wagent" />
      <p className="text-xl font-medium mb-6">Please wait</p>
      <div className="relative w-1/4 min-w-[200px] mb-3 h-[6px] bg-[#F2F2F2] rounded">
        <div
          className="absolute top-0 h-1 bg-[#008B5B] rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-[#3D3D3D]">This may take a few seconds</p>
    </div>
  );
};

export default Loading;
