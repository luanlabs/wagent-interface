import { useState } from 'react';
import cn from 'classnames';

import CInput from '../CInput';
import copyText from '@/utils/copyText';

import { Copy } from '@/assets';

interface CInputCopy {
  name: string;
  value: string;
  className?: string;
  placeholder: string;
  hideCharacter?: boolean;
  eyeIconPosition?: 'left' | 'right';
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CInputCopy = ({
  name,
  value,
  onBlur,
  onChange,
  className,
  placeholder,
  hideCharacter,
  eyeIconPosition,
}: CInputCopy) => {
  const [inputValue, setInputValue] = useState('');

  const handleCInputCopyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (onChange) onChange(e);
  };

  const handleCInputCopyClick = () => {
    copyText(inputValue);
  };

  return (
    <div className="relative flex items-center">
      <CInput
        name={name}
        value={value}
        placeholder={placeholder}
        hideCharacter={hideCharacter}
        eyeIconPosition={eyeIconPosition}
        onChange={handleCInputCopyChange}
        onBlur={onBlur}
        inputClassName={cn(className, '!border-gray border-r-0 rounded-e-none')}
      />
      <div
        className="bg-white flex justify-center items-center select-none space-x-2 px-3 border border-gray rounded-r-lg hover:bg-[#eee]/90 active:bg-[#eee]/70 
      text-smokyBlue h-10 text-[16px] cursor-pointer transition"
        onClick={handleCInputCopyClick}
      >
        <Copy />
        <span>Copy</span>
      </div>
    </div>
  );
};
export default CInputCopy;
