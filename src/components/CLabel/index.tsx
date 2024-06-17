import React, { useState } from 'react';
import cn from 'classnames';

// import DetailLogo from 'src/assets/detail';
// import CTooltip from 'src/components/CTooltip';

interface CLabelProps {
  label?: string;
  htmlFor?: string;
  className?: string;
  disabled?: boolean;
  tooltipTitle?: string;
  tooltipDetails?: string;
}

const CLabel = ({
  label,
  htmlFor,
  className,
  disabled,
  tooltipTitle,
  tooltipDetails,
}: CLabelProps) => {
  return (
    <div className={cn('flex items-start text-darkGreen', className)}>
      <label htmlFor={htmlFor} className="text-2xl font-medium flex sm:font-[500]">
        {label}
        {/* {tooltipDetails && (
          <CTooltip text={tooltipDetails} title={tooltipTitle}>
            <div className="ml-2">
              <DetailLogo fill={disabled ? '#817fa0' : '#050142'} />
            </div>
          </CTooltip>
        )} */}
      </label>
    </div>
  );
};

export default CLabel;
