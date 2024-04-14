import React from 'react';
import cn from 'classnames';

interface CardProps {
  color?: string;
  bgColor?: string;
  borderColor?: string;
  children: JSX.Element | React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CCard = ({ children, bgColor, borderColor, onClick, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(className, `rounded-[14px] border bg-${bgColor}`)}
      style={{ backgroundColor: bgColor, border: 'solid 1px ' + borderColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default CCard;
