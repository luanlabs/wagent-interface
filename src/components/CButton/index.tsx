import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';

export type VariantType = 'simple' | 'outline' | 'confirm';

interface CButtonProps {
  text?: string;
  icon?: StaticImageData;
  alt?: string;
  onClick?: () => void;
  variant: VariantType;
  className?: string;
  children?: React.ReactNode;
  iconClassName?: string;
}

const CButton = ({
  text,
  icon,
  alt,
  onClick,
  variant,
  className,
  children,
  iconClassName,
}: CButtonProps) => {
  return (
    <button
      className={cn(
        `w-full  ${
          icon ? 'inline-flex justify-center gap-2 items-center' : ''
        } h-10 px-2 py-2 text-center cursor-pointer rounded-lg transition duration-300`,
        className,

        {
          'border border-1 text-darkBlue border-gray text-base font-medium hover:bg-lightestGray active:shadow':
            variant === 'outline',
        },
        {
          'bg-darkGreen text-white hover:bg-darkGreen/90 active:bg-darkGreen':
            variant === 'confirm',
        },
      )}
      onClick={onClick}
    >
      {icon && (
        <Image src={icon} alt={alt ? alt : ''} width={24} height={24} className={iconClassName} />
      )}
      {text ? text : children}
    </button>
  );
};

export default CButton;
