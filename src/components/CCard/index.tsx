import React from 'react';
import cn from 'classnames';
import CLabel from '../CLabel';

interface CardProps {
  color?: string;
  bgColor?: string;
  borderColor?: string;
  children: JSX.Element | React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  label?: string;
}

const CCard = ({
  children,
  bgColor,
  borderColor,
  onClick,
  className,
  label,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(className, `rounded-[10px] border bg-${bgColor}`)}
      style={{ backgroundColor: bgColor, border: 'solid 1px ' + borderColor }}
      onClick={onClick}
      {...props}
    >
      {label && <CLabel label={label} />}

      {children}
    </div>
  );
};

export default CCard;
