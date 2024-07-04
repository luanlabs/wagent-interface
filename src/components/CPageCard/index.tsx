import React from 'react';
import cn from 'classnames';

import CCard from '../CCard';

interface CPageCard {
  title?: string | React.ReactNode;
  divider?: boolean;
  className?: string;
  dividerClassName?: string;
  childrenClassName?: string;
  borderStatus?: 'bordered' | 'borderless';
  children: JSX.Element | React.ReactNode;
}

const CPageCard = ({
  divider = true,
  title,
  children,
  className = '',
  childrenClassName = '',
  borderStatus = 'borderless',
  dividerClassName,
  ...props
}: CPageCard) => {
  return (
    <CCard
      className={cn(
        className,
        `flex flex-col !bg-white w-full h-full mobile:overflow-hidden mobile:pb-0 py-4 px-2 ${
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
