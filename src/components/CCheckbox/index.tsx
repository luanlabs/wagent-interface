import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import check from '../../../public/images/check.svg';
import { getCheckBoxStyle } from './getCheckBoxStyle';
import { Check } from '@/assets';

export type CCheckboxType = 'primary' | 'secondary';

type CCheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.JSX.Element;
  value: string;
  disabled?: boolean;
  type?: CCheckboxType;
};

const CCheckbox = ({
  checked,
  onChange,
  label,
  value,
  disabled = false,
  type = 'primary',
}: CCheckboxProps) => {
  return (
    <label className={`flex items-center space-x-[6px]`}>
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
          `flex items-center justify-center rounded-md transition-all duration-300 ease-in-out transform
          `,
        )}
      >
        {checked && <Check fill={type === 'secondary' && !disabled ? '#073834' : '#EAECF0'} />}
      </div>
      {label && (
        <div className={`text-sm ${checked ? 'text-black' : '!text-[#888888]'}}`}>{label}</div>
      )}
    </label>
  );
};

export default CCheckbox;
