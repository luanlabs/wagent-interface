import Image from 'next/image';
import cn from 'classnames';

import tokensStyles from '@/components/CTokenLabel/tokensStyles';

import close from 'public/images/close.svg';

export interface CTokenLabelProps {
  symbol: string;
  logo: string;
  rounded?: boolean;
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const CTokenLabel = ({ symbol, logo, rounded, onRemove, className }: CTokenLabelProps) => {
  const style = tokensStyles[symbol.toLowerCase()];

  return (
    <div
      className={cn(
        'w-[90px] font-medium flex mobile:w-[80px] mobile:space-x-1 space-x-1 items-center py-[2px] justify-between ',
        className,
        { 'rounded-[50px] text-[14px] px-3': rounded },
        { 'rounded-[6px] text-base px-1 ': !rounded },
      )}
      style={{
        backgroundColor: style.bgColor,
        border: `2px solid ${style.borderColor}`,
        color: style.textColor,
      }}
      key={symbol}
    >
      <div className="flex">
        <Image src={logo} width={20} height={20} alt={symbol} />
        <span className="ml-1">{symbol.toUpperCase()}</span>
      </div>

      {onRemove && (
        <Image src={close} alt="close" onClick={onRemove} className="cursor-pointer ml-4 " />
      )}
    </div>
  );
};

export default CTokenLabel;
