import Image from 'next/image';
import cn from 'classnames';

import tokensStyles from '@/components/CTokenLabel/tokensStyles';

import { Close } from '@/assets';

export interface CTokenLabelProps {
  symbol: string;
  rounded?: boolean;
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const CTokenLabel = ({ symbol, rounded, onRemove, className }: CTokenLabelProps) => {
  const style = tokensStyles[symbol.toLowerCase()];

  return (
    <div
      className={cn(
        'w-[90px] font-medium flex mobile:w-[80px] mobile:space-x-1 space-x-1 items-center py-[2px] justify-between ',
        className,
        { 'rounded-[50px] text-[14px] px-3': rounded },
        { 'rounded-[6px] text-base px-1 ': !rounded },
        { 'mobile:w-[90px] ': !rounded && onRemove },
      )}
      style={{
        backgroundColor: style.bgColor,
        border: `2px solid ${style.borderColor}`,
        color: style.textColor,
      }}
      key={symbol}
    >
      <div className="flex">
        <Image
          src={require(`/public/images/tokens/${symbol.toLowerCase()}.svg`)}
          width={20}
          height={20}
          alt={symbol}
          style={{ width: 'auto', height: 'auto' }}
        />
        <span className="ml-1">{symbol.toUpperCase()}</span>
      </div>

      {onRemove && (
        <span onClick={onRemove} className="cursor-pointer ml-4">
          <Close fill={style.textColor} />
        </span>
      )}
    </div>
  );
};

export default CTokenLabel;
