'use client';

import { useState } from 'react';
import Image from 'next/image';

import CMethods from '@/components/CMethods';
import CStatusCard from '@/components/CStatusCard';
import CTokenLabel from '@/components/CTokenLabel';
import { formatDate } from '@/utils/formatDate';
import { IHistoryResponse } from '@/constants/types';
import HistoryDetailsModal from './Modal';

const HistoryItemCard = ({
  id,
  date,
  title,
  token,
  image,
  method,
  status,
  amount,
  sender,
  progress,
  cancellableAfter,
}: IHistoryResponse) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="w-full flex justify-between items-center py-4 px-4 bg-white rounded-[10px] border border-1
      hover:bg-lightGray active:bg-lightGray/20 transition cursor-pointer border-[#0000001A]"
        onClick={handleItemClick}
      >
        <div className="inline-flex whitespace-nowrap gap-3 items-center desktop:w-[40%]">
          {image && (
            <Image src={image} alt={title} className="rounded-[50px]" width={30} height={30} />
          )}
          <span className="mobile:w-full text-darkBlue text-base">{title}</span>
        </div>
        <div className="inline-flex items-center w-full mobile:hidden whitespace-nowrap">
          <span className="w-1/4">
            <CMethods method={method} />
          </span>
          <span className="w-1/4">{CStatusCard(status)}</span>
          <span className="w-1/4">{formatDate(date)}</span>
          <span className="w-1/4 ml-2">
            <CTokenLabel symbol={token.symbol} logo={token.logo} />
          </span>
        </div>

        <span className="mobile:w-full text-right w-1/6">{amount}</span>
      </div>

      <HistoryDetailsModal
        id={id}
        date={date}
        title={title}
        token={token}
        image={image}
        amount={amount}
        method={method}
        status={status}
        isOpen={isOpen}
        sender={sender}
        progress={progress}
        onClose={handleCloseModal}
        cancellableAfter={cancellableAfter}
      />
    </>
  );
};

export default HistoryItemCard;
