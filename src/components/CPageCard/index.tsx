'use client';

import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import CCard from '../CCard';
import CErrorCard from '../CErrorCard';

import { ErrorType } from '@/models';

interface CPageCardProps {
  title?: string | React.ReactNode;
  divider?: boolean;
  className?: string;
  dividerClassName?: string;
  childrenClassName?: string;
  borderStatus: 'bordered' | 'borderless';
  dividerResponsiveClassName?: string;
  children: JSX.Element | React.ReactNode;
  error?: ErrorType;
}

const CPageCard = ({
  title,
  divider = true,
  children,
  className = '',
  childrenClassName = '',
  borderStatus = 'borderless',
  dividerClassName,
  error,
  ...props
}: CPageCardProps) => {
  const [errorVisible, setErrorVisible] = useState(!!error);

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
    }
  }, [error]);

  const handleErrorClose = () => {
    setErrorVisible(false);
  };

  return (
    <CCard
      className={cn(
        className,
        `flex flex-col !bg-white w-full h-full mobile:overflow-hidden mobile:pb-0 pt-4 pb-2 px-2 ${
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
          <hr className={cn(dividerClassName, ` border-[#0501421A] my-3 mobile:mx-2 mx-4`)} />
        )}

        {error && errorVisible && (
          <div className="px-4">
            <CErrorCard error={error} onClose={handleErrorClose} />
          </div>
        )}
      </div>

      <div
        className={`${cn(childrenClassName, `h-full overflow-y-auto mobile:px-2 px-4`, {
          'pointer-events-none opacity-50 select-none': errorVisible,
        })}`}
      >
        {children}
      </div>
    </CCard>
  );
};

export default CPageCard;
