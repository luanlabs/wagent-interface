import ErrorIcon from '@/assets/ErrorIcon';
import React from 'react';
import Image from 'next/image';

import close from 'public/images/close.svg';

interface ErrorProps {
  title: string;
  message: string;
  onClose: () => void;
}

const CErrorCard = ({ title, message, onClose }: ErrorProps) => {
  return (
    <div className="bg-[#FFF8E4] z-100 h-[78px] mb-4 rounded-xl flex items-center justify-between w-full relative tracking-wide">
      <div className="px-6">
        <ErrorIcon />
      </div>
      <div className="w-full">
        <h2 className="text-lg text-[#101828]">{title}</h2>
        <p className="text-[#475467] text-[14px]">{message}</p>
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
