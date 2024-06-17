import React from 'react';
import Image from 'next/image';
import BN from 'src/utils/BN';
import classNames from 'classnames';
import Arrow from '@/assets/Arrow';
import BigNumber from 'bignumber.js';

interface CStatusCardProps {
  text?: string | number;
  percentage?: number;
  className?: string;
  transparent?: boolean;
}

const CStatusCard = ({ text, percentage, className, transparent }: CStatusCardProps) => {
  const getPercentageColor = (percentage: BigNumber | undefined) => {
    if (!percentage) return 'text-black';
    return new BN(percentage).isGreaterThan(0) ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div
      className={classNames(
        ` w-fit rounded-md text-center`,
        className,
        {
          'bg-transparent': transparent,
        },
        { 'bg-[#F2F4F7]': !transparent },
      )}
    >
      {text ? (
        <div className="text-[#101828]">{text}</div>
      ) : (
        percentage && (
          <div className={classNames('font-medium', getPercentageColor(new BigNumber(percentage)))}>
            {new BN(percentage).isGreaterThan(0) ? (
              <span className="flex items-center justify-between w-[50px]">
                %{new BN(percentage).toFixed()}
                <label>
                  <Arrow fill="green" />
                </label>
              </span>
            ) : (
              <span className="flex items-center justify-between w-[50px]">
                %{new BN(percentage).abs().toFixed()}
                <label className="rotate-180">
                  <Arrow fill="red" />
                </label>
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default CStatusCard;
