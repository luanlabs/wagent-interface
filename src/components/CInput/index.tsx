import React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Copy, Eye, EyeSlash } from '@/assets';
import clearInputLogo from 'public/images/close.svg';

interface CInputProps {
  value?: any;
  icon?: string;
  label?: string;
  error?: boolean;
  paste?: boolean;
  border?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
  clearInput?: boolean;
  placeholder?: string;
  iconClassName?: string;
  inputClassName?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  clearInputClick?: MouseEventHandler<HTMLImageElement>;
  handlePaste?: MouseEventHandler<HTMLDivElement>;
  enterKeyHint?: 'search' | 'done' | 'enter' | 'go' | 'next' | 'previous' | 'send';
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
  copy?: boolean;
  hideCharacter?: boolean;
  copyOnClick?: () => void;
}

const CInput = ({
  icon,
  error,
  label,
  paste,
  value,
  border,
  onClick,
  disabled,
  onChange,
  errorMsg,
  autoFocus,
  className,
  clearInput,
  placeholder,
  handlePaste,
  enterKeyHint,
  iconClassName,
  inputClassName,
  clearInputClick,
  onKeyPress,
  maxLength,
  copy,
  hideCharacter,
  copyOnClick,
  ...props
}: CInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    if (hideCharacter) setShowPassword(!showPassword);
  };

  return (
    <div className={className}>
      <p className="text-sm select-none font-normal mb-[6px] text-offBlack">{label}</p>
      <div className="relative w-full">
        {icon && (
          <div className={cn(iconClassName, `absolute bottom-4 left-3`)}>
            <Image src={icon} width={22} height={22} alt="inputIcon" />
          </div>
        )}

        {paste && (
          <div
            className="bg-white text-darkGreen text-sm px-[14px] py-[6px] rounded-lg absolute bottom-3 right-3.5 cursor-pointer transition hover:bg-[#E6E6EC]"
            onClick={handlePaste}
          >
            <span>Paste</span>
          </div>
        )}

        {copy && (
          <div
            className="bg-white flex justify-center items-center select-none space-x-2 px-3 border border-gray rounded-r-lg hover:bg-[#eee]/90 active:bg-[#eee]/70  text-smokyBlue h-10 text-[16px] absolute bottom-0 right-0 cursor-pointer transition"
            onClick={copyOnClick}
          >
            <Copy />
            <span>Copy</span>
          </div>
        )}

        {hideCharacter && (
          <div
            className="absolute bottom-[11.3px] left-3 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </div>
        )}

        {!error && clearInput && (
          <div className="absolute bottom-3.5 right-3.5">
            <Image
              src={clearInputLogo}
              width={0}
              height={0}
              alt="clear"
              className="cursor-pointer"
              onClick={clearInputClick}
            />
          </div>
        )}

        <input
          {...props}
          type={hideCharacter ? (showPassword ? 'text' : 'password') : 'text'}
          value={value}
          onClick={onClick}
          disabled={disabled}
          onChange={onChange}
          autoFocus={autoFocus}
          placeholder={placeholder}
          enterKeyHint={enterKeyHint}
          autoComplete="off"
          onKeyPress={onKeyPress}
          maxLength={maxLength}
          className={cn(
            inputClassName,
            {
              'pl-10': icon,
              'px-4': !icon,
              'border border-gray': border,
              'border-transparent': !border,
              'border !border-error': error,
              'cursor-not-allowed !select-none text-mutedBlue': disabled,
              'pl-8': hideCharacter,
            },
            'self-stretch rounded-lg placeholder-mutedBlue text-darkGray text-base w-full h-10 py-[10px] px-[14px] justify-start items-center inline-flex outline-none border hover:bg-offWhite transition-colors duration-300',
          )}
        />

        <div className="h-[20px] absolute mt-[6px] ml-1">
          {error && errorMsg && <span className="text-error text-sm">{errorMsg}</span>}
        </div>
      </div>
    </div>
  );
};

export default CInput;
