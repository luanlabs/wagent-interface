import Image, { StaticImageData } from 'next/image';

import clsx from 'clsx';

import CMethod, { MethodType } from '../CMethod';

export type ItemVariantType = 'product' | 'transaction';

export interface CItemCardProps {
  title: string;
  image: string | StaticImageData;
  className?: string;
  onClick?: () => void;
  method: MethodType;
  id?: string;
  token: React.ReactNode;
  amount: string;
  variant: ItemVariantType;
  status?: string;
  date?: string;
}

const CItemCard = ({
  title,
  image,
  className,
  onClick,
  method,
  id,
  token,
  amount,
  variant,
  status,
  date,
}: CItemCardProps) => {
  return (
    <div
      className={clsx(
        'w-full flex items-center p-1 py-4 px-4 bg-white hover:bg-lightGray active:bg-lightGray/20 transition cursor-pointer rounded-[10px] text-left border border-1 border-[#0000001A] ',
        className,
      )}
      onClick={onClick}
    >
      {image && (
        <div className="h-[30px] w-[30px] overflow-hidden rounded-[50px] ">
          <Image src={image} alt={title} className="w-full h-auto object-fill" />
        </div>
      )}

      <div className="flex justify-start w-full text-left">
        <div className="ml-3 w-[36%] mobile:w-full">
          <h3 className="text-darkBlue text-base ">{title}</h3>
        </div>
        <span className="w-[35%] mobile:hidden">
          <CMethod method={method} />
        </span>
        {variant === 'product' ? (
          <div className="w-full flex">
            <p className="w-[30%] mobile:hidden overflow-x-auto">
              <span className="text-cadetBlue">#</span> {id}
            </p>
            <span className="w-[41%] mobile:hidden">{token}</span>
            <span className="w-[30%] mobile:w-full mobile:px-3 text-right">{amount}</span>
          </div>
        ) : (
          variant === 'transaction' && (
            <div>
              <span>{status}</span>
              <span>{date}</span>
              <span>{amount}</span>
              <span>{token}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CItemCard;
