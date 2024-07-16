'use client';

import { useState } from 'react';
import Image from 'next/image';

import CMethods from '@/components/CMethods';
import CStatusCard from '@/components/CStatusCard';
import CTokenLabel from '@/components/CTokenLabel';

import { formatDate } from '@/utils/formatDate';
import humanizeAmount from '@/utils/humanizeAmount';
import { IHistoryResponse } from '@/constants/types';

import HistoryDetailsModal from './Modal';

type HistoryItemProps = { data: IHistoryResponse };

const HistoryItem = ({ data }: HistoryItemProps) => {
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
          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              className="rounded-[50px]"
              width={30}
              height={30}
            />
          )}
          <span className="mobile:w-full text-darkBlue text-base">{data.title}</span>
        </div>
        <div className="inline-flex items-center w-full mobile:hidden whitespace-nowrap">
          <span className="w-1/4">
            <CMethods method={data.method} />
          </span>
          <span className="w-1/4">{CStatusCard(data.status)}</span>
          <span className="w-1/4">{formatDate(data.date)}</span>
          <span className="w-1/4 ml-2">
            <CTokenLabel symbol={data.token.value} rounded />
          </span>
        </div>

        <span className="mobile:w-full text-right w-1/6">${humanizeAmount(data.amount)}</span>
      </div>

      <HistoryDetailsModal data={data} isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};

export default HistoryItem;
