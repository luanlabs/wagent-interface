import React, { useState } from 'react';
import CInput from '../CInput';

interface CNumberInputProps {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}

const CNumberInput = ({ placeholder, onChange, defaultValue }: CNumberInputProps) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className="relative overflow-hidden">
      <CInput
        inputClassName="!border-gray"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div
        className="bg-white flex justify-center items-center select-none space-x-2 px-3 rounded-r-lg  
       text-cadetBlue h-10 text-[14px] font-medium absolute bottom-0 right-0 transition border border-gray border-l-0"
      >
        <span>Days</span>
      </div>
    </div>
  );
};

export default CNumberInput;
