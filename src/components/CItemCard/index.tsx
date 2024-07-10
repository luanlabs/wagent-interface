import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

export interface CItemCardProps {
  title: string;
  image: string | StaticImageData;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CItemCard = ({ title, image, className, onClick, children }: CItemCardProps) => {
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
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            className="w-full h-auto object-fill"
          />
        </div>
      )}

      <div className="flex items-center w-full text-left">
        <div className="ml-3 w-[20%] mobile:w-full">
          <h3 className="text-darkBlue text-base">{title}</h3>
        </div>

        {children}
      </div>
    </div>
  );
};

export default CItemCard;
