import React from 'react';
import cn from 'classnames';

type LabelValue = {
  label: string;
  value?: any;
  className?: string;
  children?: React.JSX.Element;
};

const LabelValue = ({ label, value, children, className }: LabelValue) => (
  <div
    className={cn(`inline-flex w-full justify-between items-center whitespace-nowrap`, className)}
  >
    <span className="text-base text-cadetBlue">{label} </span>
    {value ? value : children}
  </div>
);

export default LabelValue;
