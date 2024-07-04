import Image from 'next/image';

import tokensStyles from '@/components/CTokenLabel/tokensStyles';

export interface CTokenLabelProps {
  symbol: string;
  logo: string;
  rounded?: boolean;
}

const CTokenLabel = ({ symbol, logo, rounded }: CTokenLabelProps) => {
  const style = tokensStyles[symbol.toLowerCase()];

  return (
    <div>
      <div
        className={`w-[90px] font-medium flex px-3 mobile:w-[80px] mobile:space-x-1 space-x-1 items-center justify-center py-[2px] ${
          rounded ? 'rounded-[50px] text-[14px] ' : 'rounded-[6px] text-base'
        } `}
        style={{
          backgroundColor: style.bgColor,
          border: `2px solid ${style.borderColor}`,
          color: style.textColor,
        }}
        key={symbol}
      >
        <Image src={logo} width={20} height={20} alt={symbol} />
        <span>{symbol.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default CTokenLabel;
