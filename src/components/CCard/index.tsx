import React from 'react';
import cn from 'classnames';
import CLabel from '../CLabel';

interface CardProps {
  color?: string;
  label?: string;
  bgColor?: string;
  className?: string;
  borderColor?: string;
  children: JSX.Element | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CCard = ({
  onClick,
  children,
  label = '',
  className = '',
  bgColor = 'white',
  borderColor = 'rgba(5, 1, 66, 0.10)',
}: CardProps) => {
  return (
    <div
      className={cn(className, `rounded-[10px] border bg-${bgColor}`)}
      style={{ backgroundColor: bgColor, border: 'solid 1px ' + borderColor }}
      onClick={onClick}
    >
      {label && <CLabel label={label} />}

      {children}
    </div>
  );
};

export default CCard;
