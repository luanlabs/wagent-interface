'use client';

import React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Eye, EyeSlash } from '@/assets';
import clearInputLogo from 'public/images/close.svg';

interface CInputProps {
  meta?: any;
  input?: any;
  value?: any;
  icon?: string;
  label?: string;
  error?: boolean;
  paste?: boolean;
  border?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  autoFocus?: boolean;
  clearInput?: boolean;
  placeholder?: string;
  iconClassName?: string;
  inputClassName?: string;
  hideCharacter?: boolean;
  type?: React.HTMLInputTypeAttribute;
  onClick?: MouseEventHandler<HTMLInputElement>;
  handlePaste?: MouseEventHandler<HTMLDivElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  clearInputClick?: MouseEventHandler<HTMLImageElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  enterKeyHint?: 'search' | 'done' | 'enter' | 'go' | 'next' | 'previous' | 'send';
}

const CInput = ({
  meta,
  icon,
  type,
  input,
  label,
  paste,
  error,
  value,
  border,
  onClick,
  disabled,
  onChange,
  errorMsg,
  maxLength,
  autoFocus,
  className,
  onKeyPress,
  clearInput,
  placeholder,
  handlePaste,
  enterKeyHint,
  hideCharacter,
  iconClassName,
  inputClassName,
  clearInputClick,
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
          {...input}
          meta={meta}
          value={value}
          onClick={onClick}
          autoComplete="off"
          disabled={disabled}
          onChange={onChange}
          maxLength={maxLength}
          autoFocus={autoFocus}
          placeholder={placeholder}
          enterKeyHint={enterKeyHint}
          onKeyPress={onKeyPress}
          type={hideCharacter ? (showPassword ? 'text' : 'password') : type}
          className={cn(
            inputClassName,
            {
              'pl-10': icon,
              'px-4': !icon,
              'border border-gray': border,
              'border-transparent': !border,
              'border !border-error': error,
              'cursor-not-allowed !select-none text-smokyBlue': disabled,
              'pl-8': hideCharacter,
            },
            'self-stretch rounded-lg placeholder-smokyBlue text-darkGray text-base w-full h-10 py-[10px] px-[14px] justify-start items-center inline-flex outline-none border hover:bg-offWhite transition-colors duration-300',
          )}
        />
        {error && errorMsg && (
          <div className="h-[16px] ml-1">
            <span className="text-[#F97066] text-sm">{errorMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CInput;
