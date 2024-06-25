import Close from '@/assets/Close';
import ErrorIcon from '@/assets/ErrorIcon';
import React from 'react';

interface ErrorProps {
  title: string;
  message: string;
  onClose: () => void;
}

const CErrorCard = ({ title, message, onClose }: ErrorProps) => {
  return (
    <div className="bg-[#FFF8E4] z-100 h-[78px] rounded-xl flex items-center justify-between w-full relative tracking-wide">
      <div className="px-8">
        <ErrorIcon />
      </div>
      <div className="w-full">
        <h2 className="text-lg text-[#101828]">{title}</h2>
        <p className="text-[#475467] text-[14px]">{message}</p>
      </div>
      <button onClick={onClose} className="mb-10 mr-2">
        <Close fill="#475467" />
      </button>
    </div>
  );
};

export default CErrorCard;
