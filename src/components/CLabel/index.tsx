import React from 'react';
import cn from 'classnames';

interface CLabelProps {
  label?: string;
  htmlFor?: string;
  className?: string;
}

const CLabel = ({ label, htmlFor, className }: CLabelProps) => {
  return (
    <div className={cn('flex items-start text-darkGreen', className)}>
      <label htmlFor={htmlFor} className="text-2xl font-medium flex sm:font-[500]">
        {label}
      </label>
    </div>
  );
};

export default CLabel;
