import React from 'react';
import cn from 'classnames';

import CCard from '../CCard';

interface CPageCard {
  divider?: boolean;
  title?: string;
  children: JSX.Element | React.ReactNode;
  className?: string;
  scroll?: boolean;
  childrenClassName?: string;
  borderStatus: 'bordered' | 'borderless';
  dividerResponsiveClassName?: string;
}

const CPageCard = ({
  divider = true,
  title,
  children,
  className = '',
  scroll = false,
  childrenClassName = '',
  borderStatus,
  dividerResponsiveClassName,
  ...props
}: CPageCard) => {
  let dividerStyle = '';
  let padding = '';

  if (divider) {
    dividerStyle = 'w-full border-b border-[#0501421A] my-[15px]';
    padding = 'pl-2';
  } else {
    dividerStyle = 'border-none mb-0';
    padding = 'p-0';
  }

  return (
    <CCard
      className={cn(
        `flex flex-col w-full h-[100%] mobile:overflow-y-auto mobile:overflow-x-hidden py-4 px-6 ${
          borderStatus === 'borderless'
            ? 'mobile:!border-transparent mobile:!border-none mobile:!rounded-none'
            : ''
        }`,
        className,
      )}
      bgColor="#fff"
      borderColor="rgba(5, 1, 66, 0.10)"
      {...props}
    >
      {title && <div className="w-full font-medium text-2xl">{title}</div>}
      {divider && <div className={cn(dividerStyle, dividerResponsiveClassName)} />}
      <div
        className={`${cn(
          padding,
          childrenClassName,
          `${scroll && 'desktop:overflow-y-scroll h-[100%]'} `,
        )}`}
      >
        {children}
      </div>
    </CCard>
  );
};

export default CPageCard;
