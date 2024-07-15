import Image from 'next/image';

import tokensStyles from '@/components/CTokenLabel/tokensStyles';

export interface CTokenLabelProps {
  symbol: string;
  logo: string;
}

const CTokenLabel = ({ symbol, logo }: CTokenLabelProps) => {
  const style = tokensStyles[symbol.toLowerCase()];

  return (
    <div>
      <div
        className={`w-[90px] text-[14px] font-medium flex px-3 mobile:w-[80px] mobile:space-x-1 space-x-2 items-center py-[2px] rounded-[50px]`}
        style={{
          backgroundColor: style.bgColor,
          border: `1px solid ${style.borderColor}`,
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
