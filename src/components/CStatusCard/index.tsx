import React from 'react';
import BN from 'src/utils/BN';
import classNames from 'classnames';

import getPercentageColor from './getPercentageColor';

import Arrow from '@/assets/Arrow';

interface CStatusCardProps {
  text?: string | number;
  percentage?: number;
  className?: string;
  transparent?: boolean;
}

const CStatusCard = ({ text, percentage, className, transparent }: CStatusCardProps) => {
  let displayValue = '';
  let arrowColor = '';
  let arrowClass = '';

  if (percentage) {
    const bnPercentage = new BN(percentage);
    const isPositive = bnPercentage.isGreaterThan(0);
    displayValue = isPositive ? bnPercentage.toFixed() : bnPercentage.abs().toFixed();
    arrowColor = isPositive ? '#027A48' : 'red';
    arrowClass = isPositive ? '' : 'rotate-180';
  }

  return (
    <div
      className={classNames(
        'w-fit rounded-md text-center',
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
          <div
            className={classNames(
              ' flex items-center justify-center space-x-1 px-3',
              getPercentageColor(new BN(percentage)),
            )}
          >
            <label className={arrowClass}>
              <Arrow fill={arrowColor} />
            </label>
            <span style={{ color: arrowColor }}>%{displayValue}</span>
          </div>
        )
      )}
    </div>
  );
};

export default CStatusCard;
