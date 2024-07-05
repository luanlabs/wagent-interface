'use client';

import Image from 'next/image';

import CMethods from '../CMethods';
import { formatDate } from '@/utils/formatDate';
import { IHistoryItemCard } from '@/constants/types';

const CHistoryItemCard = ({
  title,
  image,
  date,
  status,
  tokens,
  amount,
  method,
}: IHistoryItemCard) => {
  const mapTokens = tokens.map((item) => (
    <div key={item.symbol}>
      <p>{item.symbol.toUpperCase()}</p>
    </div>
  ));
  const handleItemClick = () => {
    console.log(',,,');
  };
  return (
    <div
      className="w-full flex justify-between items-center py-4 px-4 bg-white hover:bg-lightGray active:bg-lightGray/20 transition cursor-pointer rounded-[10px] border border-1 border-[#0000001A]"
      onClick={handleItemClick}
    >
      <div className="inline-flex whitespace-nowrap gap-3 items-center desktop:w-[26.5%]">
        {image && (
          <Image src={image} alt={title} className="rounded-[50px]" width={30} height={30} />
        )}
        <span className="mobile:w-full text-darkBlue text-base">{title}</span>
      </div>

      <span className="flex mobile:hidden w-1/6 min-w-[170px] ">
        <CMethods method={method} />
      </span>
      <span className="flex mobile:hidden w-1/6 space-x-2">{status}</span>
      <span className="flex mobile:hidden w-1/6">{formatDate(date)}</span>
      <span className="flex mobile:hidden w-1/6 space-x-2">{mapTokens}</span>
      <span className="mobile:w-full mobile:px-3 text-right w-1/6">{amount}</span>
    </div>
  );
};

export default CHistoryItemCard;
