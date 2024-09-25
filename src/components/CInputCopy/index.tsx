import { useState } from 'react';

import CInput from '../CInput';
import copyText from '@/utils/copyText';

import { Copy } from '@/assets';

interface CInputCopy {
  type?: 'email' | 'apiKey';
  placeholder: string;
  hideCharacter?: boolean;
  eyeIconPosition?: 'left' | 'right';
  disabled?: boolean;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CInputCopy = ({
  type,
  placeholder,
  hideCharacter,
  onChange,
  eyeIconPosition,
  disabled,
  value,
}: CInputCopy) => {
  const [CInputValue, setCInputValue] = useState('');

  const handleCInputCopyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCInputValue(e.target.value);

    if (onChange) onChange(e);
  };

  const handleCInputCopyClick = () => {
    if (type === 'apiKey') {
      copyText(value);
    } else {
      copyText(CInputValue);
    }
  };

  return (
    <div className="relative">
      <CInput
        inputClassName="!border-gray"
        placeholder={placeholder}
        hideCharacter={hideCharacter}
        eyeIconPosition={eyeIconPosition}
        onChange={handleCInputCopyChange}
        disabled={disabled}
        value={value}
      />
      <div
        className="bg-white flex justify-center items-center select-none space-x-2 px-3 border border-gray rounded-r-lg hover:bg-[#eee]/90 active:bg-[#eee]/70 
        text-smokyBlue h-10 text-[16px] absolute bottom-0 right-0 cursor-pointer transition"
        onClick={handleCInputCopyClick}
      >
        <Copy />
        <span>Copy</span>
      </div>
    </div>
  );
};
export default CInputCopy;
