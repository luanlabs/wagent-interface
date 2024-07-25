import React from 'react';
import cn from 'classnames';

import { Check } from '@/assets';
import { getCheckBoxStyle } from './getCheckBoxStyle';

export type CCheckboxType = 'primary' | 'secondary';

type CCheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.JSX.Element;
  value: string;
  disabled?: boolean;
  type?: CCheckboxType;
  className?: string;
};

const CCheckbox = ({
  checked,
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
          `flex items-center justify-center rounded-md transition duration-300 ease-in-out transform`,
        )}
      >
        {checked && <Check fill={type === 'secondary' && !disabled ? '#073834' : '#EAECF0'} />}
      </div>
      {label && (
        <div
          className={`text-sm select-none transition-colors duration-300 ${
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
