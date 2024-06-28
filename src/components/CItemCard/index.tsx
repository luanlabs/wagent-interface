import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

import CMethods, { MethodType } from '../CMethods';

export interface CItemCardProps {
  title: string;
  image: string | StaticImageData;
  className?: string;
  onClick?: () => void;
  method: MethodType | MethodType[];
  children: React.ReactNode;
}

const CItemCard = ({ title, image, className, onClick, method, children }: CItemCardProps) => {
  return (
    <div
      className={cn(
        'w-full flex items-center p-1 py-4 px-4 bg-white hover:bg-lightGray active:bg-lightGray/20 transition cursor-pointer rounded-[10px] text-left border border-1 border-[#0000001A] ',
        className,
      )}
      onClick={onClick}
    >
      {image && (
        <div className="h-[30px] w-[30px] overflow-hidden rounded-[50px]">
          <Image src={image} alt={title} className="w-full h-auto object-fill" />
        </div>
      )}

      <div className="flex justify-start w-full text-left">
        <div className="ml-3 w-[36%] mobile:w-full">
          <h3 className="text-darkBlue text-base ">{title}</h3>
        </div>
        <span className="w-[35%] mobile:hidden">
          <CMethods method={method} />
        </span>

        {children}
      </div>
    </div>
  );
};

export default CItemCard;
