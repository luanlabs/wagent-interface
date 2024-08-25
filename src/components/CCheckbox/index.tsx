import React from 'react';
import cn from 'classnames';

import { Check } from '@/assets';
import { getCheckBoxStyle } from './getCheckBoxStyle';

export type CCheckboxType = 'primary' | 'secondary';

type CCheckboxProps = {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.JSX.Element;
  value: string;
  disabled?: boolean;
  type?: CCheckboxType;
  className?: string;
  input?: any;
  meta?: any;
};

const CCheckbox = ({
  checked,
  input,
  meta,
  onChange,
  label,
  value,
  disabled = false,
  type = 'primary',
  className,
}: CCheckboxProps) => {
  return (
    <label className={cn(className, `flex items-center space-x-[7px]`)}>
      <input
        type="checkbox"
        meta={meta}
        {...input}
        className="hidden"
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        className={cn(
          getCheckBoxStyle(type, checked, disabled),
          `flex items-center justify-center rounded-md transition duration-100 ease-in-out transform`,
        )}
      >
        {checked && <Check fill={type === 'secondary' && !disabled ? '#073834' : '#c9c9c9'} />}
      </div>
      {label && (
        <div
          className={`text-sm select-none transition-colors duration-100 ${
            !checked || disabled ? '!text-gray' : 'text-black'
          }`}
        >
          {label}
        </div>
      )}
    </label>
  );
};

export default CCheckbox;
