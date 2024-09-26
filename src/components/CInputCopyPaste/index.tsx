import { ChangeEvent, useState } from 'react';
import cn from 'classnames';

import CInput from '../CInput';
import copyText from '@/utils/copyText';
import { Copy } from '@/assets';

interface CInputCopyPasteProps {
  name?: string;
  type?: 'text' | 'apiKey';
  placeholder: string;
  hideCharacter?: boolean;
  eyeIconPosition?: 'left' | 'right';
  disabled?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  mode: 'copy' | 'paste';
}

const CInputCopyPaste = ({
  type,
  name,
  placeholder,
  hideCharacter,
  onChange,
  eyeIconPosition,
  disabled,
  value,
  className,
  mode,
}: CInputCopyPasteProps) => {
  const [CInputValue, setCInputValue] = useState(value || '');

  const handleCInputCopyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleCInputAction = async () => {
    if (mode === 'copy') {
      copyText(CInputValue);
    } else if (mode === 'paste') {
      try {
        const clipboardText = await navigator.clipboard.readText();
        setCInputValue(clipboardText);

        if (onChange) {
          const event = {
            target: { value: clipboardText },
            currentTarget: { value: clipboardText },
            bubbles: true,
          } as ChangeEvent<HTMLInputElement>;

          onChange(event);
        }
      } catch (error) {
        console.error('Failed to read clipboard contents: ', error);
      }
    }
  };

  return (
    <div className="relative">
      <CInput
        type={type}
        name={name}
        inputClassName={cn(className, '!border-gray')}
        placeholder={placeholder}
        hideCharacter={hideCharacter}
        eyeIconPosition={eyeIconPosition}
        onChange={handleCInputCopyChange}
        disabled={disabled}
        value={CInputValue}
      />
      <div
        className="bg-white flex justify-center items-center select-none space-x-2 px-3 border border-gray rounded-r-lg hover:bg-[#eee]/90 active:bg-[#eee]/70 
        text-smokyBlue h-10 text-[16px] absolute bottom-0 right-0 cursor-pointer transition"
        onClick={handleCInputAction}
      >
        {mode === 'copy' ? <Copy /> : ''}
        <span>{mode === 'copy' ? 'Copy' : 'Paste'}</span>
      </div>
    </div>
  );
};

export default CInputCopyPaste;
