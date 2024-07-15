import React from 'react';
import Image from 'next/image';

import { ErrorType } from '@/models';

import close from 'public/images/close.svg';
import { ErrorIcon } from '@/assets';

interface ErrorProps {
  error: ErrorType;
  onClose: () => void;
}

const CErrorCard = ({ error, onClose }: ErrorProps) => {
  return (
    <div className="bg-[#FFF8E4] z-100 h-[78px] mb-4 rounded-xl flex items-center justify-between w-full relative tracking-wide">
      <div className="px-6">
        <ErrorIcon />
      </div>
      <div className="w-full">
        <h2 className="text-lg text-[#101828]">{error.title}</h2>
        <p className="text-[#475467] text-[14px]">{error.message}</p>
      </div>
      <Image
        src={close}
        alt="close"
        width={25}
        className="cursor-pointer mb-10 mr-2"
        onClick={onClose}
      />
    </div>
  );
};

export default CErrorCard;
