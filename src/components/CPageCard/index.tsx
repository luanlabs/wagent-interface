'use client';

import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import CCard from '../CCard';
import CErrorCard from '../CErrorCard';

interface CPageCardProps {
  title?: string | React.ReactNode;
  divider?: boolean;
  className?: string;
  dividerClassName?: string;
  childrenClassName?: string;
  borderStatus: 'bordered' | 'borderless';
  dividerResponsiveClassName?: string;
  children: JSX.Element | React.ReactNode;
  errorTitle?: string;
  errorMessage?: string;
}

const CPageCard = ({
  title,
  divider = true,
  children,
  className = '',
  childrenClassName = '',
  borderStatus,
  dividerClassName,
  errorTitle,
  errorMessage,
  ...props
}: CPageCardProps) => {
  const [errorVisible, setErrorVisible] = useState(true);

  useEffect(() => {
    if (errorTitle && errorMessage) {
      setErrorVisible(true);
    }
  }, [errorMessage, errorTitle]);

  const handleErrorClose = () => {
    setErrorVisible(false);
  };

  const baseClass = 'flex flex-col !bg-white w-full h-full mobile:overflow-hidden py-4 px-2';
  const borderClass =
    borderStatus === 'borderless'
      ? 'mobile:!border-transparent mobile:!border-none mobile:!rounded-none'
      : '';
  const titleClass = 'w-full font-medium text-2xl mobile:mt-1 px-4';
  const dividerClass = 'border-[#0501421A] my-4 desktop:mx-4';
  const childrenClass = 'h-full overflow-y-auto px-4';

  return (
    <CCard
      className={cn(className, baseClass, borderClass)}
      bgColor="#fff"
      borderColor="rgba(5, 1, 66, 0.10)"
      {...props}
    >
      <div>
        {title && <div className={titleClass}>{title}</div>}
        {divider && <hr className={cn(dividerClassName, dividerClass)} />}
        <div className="px-4">
          {errorTitle && errorMessage && errorVisible && (
            <CErrorCard
              title={errorVisible && errorTitle}
              message={errorVisible && errorMessage}
              onClose={handleErrorClose}
            />
          )}
        </div>
      </div>

      <div
        className={cn(childrenClassName, childrenClass, {
          'pointer-events-none opacity-50 select-none': errorVisible,
        })}
      >
        {children}
      </div>
    </CCard>
  );
};

export default CPageCard;
