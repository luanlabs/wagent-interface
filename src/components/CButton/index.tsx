import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import WithdrawLogo from 'src/assets/WithdrawLogo';
import buttonCustomStyles from './buttonCustomStyles';
import FluxityLogoButton from 'src/assets/FluxityLogoButton';

export type CButtonSvgLogoType = 'fluxityLogo' | 'withdraw';
export type CButtonVariantType = 'simple' | 'form';
export type CButtonColorType =
  | 'orange'
  | 'purple'
  | 'white'
  | 'gray'
  | 'blue'
  | 'outline'
  | 'blueWhite';

interface ButtonProps {
  color?: CButtonColorType;
  content: string | React.ReactNode;
  variant: CButtonVariantType;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  fill?: string;
  logo?: string;
  svgLogo?: CButtonSvgLogoType;
  onClick?: () => void;
}

const CButton = ({
  variant,
  color,
  onClick,
  className,
  type,
  disabled,
  content,
  fill,
  logo,
  svgLogo,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonCustomStyles(variant, color), className)}
      disabled={disabled}
      {...props}
      onClick={onClick}
    >
      {svgLogo && (
        <div className="mr-[10px]">
          {svgLogo === 'fluxityLogo' ? (
            <FluxityLogoButton fill={fill} />
          ) : (
            <WithdrawLogo fill={fill} />
          )}
        </div>
      )}
      {logo && (
        <Image src={logo} width={25} height={25} alt="logo" className="mr-2" draggable={false} />
      )}
      {content}
    </button>
  );
};

export default CButton;
