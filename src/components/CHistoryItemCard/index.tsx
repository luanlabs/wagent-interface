'use client';

import Image from 'next/image';

import CMethods from '../CMethods';
import CStatusCard from '../CStatusCard';
import CTokenLabel from '../CTokenLabel';
import { formatDate } from '@/utils/formatDate';
import { IHistoryItemCard } from '@/constants/types';

const CHistoryItemCard = ({
  title,
  image,
  date,
  status,
  token,
  amount,
  method,
}: IHistoryItemCard) => {
  const handleItemClick = () => {
    console.log(',,,');
  };
  return (
    <div
      className="w-full flex justify-between items-center py-4 px-4 bg-white rounded-[10px] border border-1
      hover:bg-lightGray active:bg-lightGray/20 transition cursor-pointer border-[#0000001A]"
      onClick={handleItemClick}
    >
      <div className="inline-flex whitespace-nowrap gap-3 items-center desktop:w-[37.5%]">
        {image && (
          <Image src={image} alt={title} className="rounded-[50px]" width={30} height={30} />
        )}
        <span className="mobile:w-full text-darkBlue text-base">{title}</span>
      </div>
      <div className="inline-flex w-full mobile:hidden whitespace-nowrap">
        <span className="w-1/4">
          <CMethods method={method} />
        </span>
        <span className="w-1/4">{CStatusCard(status)}</span>
        <span className="w-1/4">{formatDate(date)}</span>
        <span className="w-1/4">
          <CTokenLabel symbol={token.symbol} logo={token.logo} />
        </span>
      </div>

      <span className="mobile:w-full mobile:px-3 text-right w-1/6">{amount}</span>
    </div>
  );
};

export default CHistoryItemCard;
