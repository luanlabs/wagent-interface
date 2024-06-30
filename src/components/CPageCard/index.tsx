'use client';

import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import CCard from '../CCard';
import CErrorCard from '../CErrorCard';
import { ErrorType } from '@/models';

interface CPageCard {
  title?: string;
  divider?: boolean;
  className?: string;
  dividerClassName?: string;
  childrenClassName?: string;
  borderStatus: 'bordered' | 'borderless';
  dividerResponsiveClassName?: string;
  showError?: (setError: (error: ErrorType | null) => void) => void;
  children: JSX.Element | React.ReactNode;
}

const CPageCard = ({
  divider = true,
  title,
  children,
  className = '',
  childrenClassName = '',
  borderStatus,
  dividerClassName,
  ...props
}: CPageCard) => {
  return (
    <CCard
      className={cn(
        className,
        `flex flex-col !bg-white w-full h-full mobile:overflow-hidden py-4 px-2 ${
          borderStatus === 'borderless'
            ? 'mobile:!border-transparent mobile:!border-none mobile:!rounded-none'
            : ''
        }`,
      )}
      bgColor="#fff"
      borderColor="rgba(5, 1, 66, 0.10)"
      {...props}
    >
      <div>
        {title && <div className="w-full font-medium text-2xl mobile:mt-1 px-4">{title}</div>}
        {divider && (
          <hr className={cn(dividerClassName, ` border-[#0501421A] my-4 desktop:mx-4`)} />
        )}
      </div>

      <div className={`${cn(childrenClassName, `h-full overflow-y-auto px-4`)}`}>{children}</div>
    </CCard>
  );
};

export default CPageCard;
