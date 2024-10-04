import React, { useState } from 'react';
import CInput from '../CInput';

interface CNumberInputProps {
  name?: string;
  placeholder: string;
  defaultValue?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CNumberInput = ({ placeholder, onChange, defaultValue, name }: CNumberInputProps) => {
  const [value, setValue] = useState(defaultValue || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    if (onChange) onChange(e);
  };

  return (
    <div className="relative overflow-hidden">
      <CInput
        type="number"
        name={name}
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
