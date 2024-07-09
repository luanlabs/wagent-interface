import React from 'react';
import Image from 'next/image';

import check from '../../../public/images/check.svg';

type CCheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.JSX.Element;
  value: string;
  disabled?: boolean;
};

const CCheckbox = ({ checked, onChange, label, value, disabled = false }: CCheckboxProps) => {
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
        className={`w-6 h-6 flex items-center justify-center border rounded-md transition-all duration-300 ease-in-out transform ${
          disabled ? 'cursor-not-allowed pointer-events-none opacity-60' : ' cursor-pointer'
        }
        ${
          checked ? 'bg-darkGreen accent-darkGreen border-darkGreen' : ' bg-white border-[#8D8E92]'
        }`}
      >
        {checked && <Image src={check} alt="checked" className="select-none" />}
      </div>
      {label && (
        <span className={`text-sm ${!checked || disabled ? 'text-[#888888]' : 'text-black'}}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default CCheckbox;
