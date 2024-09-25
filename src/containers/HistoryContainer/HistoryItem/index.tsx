'use client';

import { useState } from 'react';
import Image from 'next/image';

import CMethods from '@/components/CMethods';
import CStatusCard, { StatusType } from '@/components/CStatusCard';
import CTokenLabel from '@/components/CTokenLabel';

import { formatDate } from '@/utils/formatDate';
import humanizeAmount from '@/utils/humanizeAmount';
import { ITransaction, MethodType } from '@/constants/types';

import HistoryDetailsModal from './Modal';
import questionMark from 'public/images/questionMark.svg';

type HistoryItemProps = { data: ITransaction };

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
          {data.order.products && data.order.products[0] ? (
            <>
              <Image
                src={data.order.products[0].logo}
                alt={data.order.products[0].name}
                className="rounded-[50px]"
                width={30}
                height={30}
              />
              <span className="mobile:w-full text-darkBlue text-base">
                {data.order.products[0].name}
                {data.order.products.length > 1 && ` x${data.order.products[0].count}`}
              </span>
            </>
          ) : (
            <>
              <Image
                src={questionMark}
                alt="questionMark"
                className="rounded-[50px]"
                width={30}
                height={30}
              />
              <span className="mobile:w-full text-darkBlue text-base">Unknown product</span>
            </>
          )}
        </div>
        <div className="inline-flex items-center w-full mobile:hidden whitespace-nowrap">
          <span className="w-1/4">
            <CMethods method={data.method as MethodType} />
          </span>
          <span className="w-1/4">
            <CStatusCard status={data.order.status as StatusType} />
          </span>
          <span className="w-1/4">{formatDate(data.submittedAt)}</span>
          <span className="w-1/4 ml-2">
            <CTokenLabel symbol={data.token.symbol} rounded />
          </span>
        </div>

        <span className="mobile:w-full text-right w-1/6">${humanizeAmount(data.order.amount)}</span>
      </div>

      <HistoryDetailsModal data={data} isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};

export default HistoryItem;
