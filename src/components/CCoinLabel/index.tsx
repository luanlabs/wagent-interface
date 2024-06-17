import Image from 'next/image';

import coinStyle from '@/components/CCoinLabel/coinStyle';

interface CCoinLabelProps {
  name: string;
  logo: string;
}

const CCoinLabel = ({ name, logo }: CCoinLabelProps) => {
  return (
    <div>
      <div
        className={`w-[90px] text-[14px] font-medium flex px-3 space-x-2 items-center py-[2px] rounded-[50px]`}
        style={{
          backgroundColor: coinStyle(name).bgColor,
          border: `2px solid ${coinStyle(name).borderColor}`,
          color: coinStyle(name).textColor,
        }}
        key={name}
      >
        <Image src={logo} width={20} height={20} alt={name} />
        <span>{name.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default CCoinLabel;
