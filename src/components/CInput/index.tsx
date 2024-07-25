import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import Image from 'next/image';

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
  ...props
}: CInputProps) => {
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
            `${icon ? 'pl-10' : 'px-4'}
            self-stretch rounded-lg placeholder-mutedBlue text-darkGreen text-base w-full h-10 py-[10px] px-[14px]
            justify-start items-center inline-flex outline-none border hover:bg-offWhite transition-colors duration-300
            ${border ? 'border border-gray' : 'border-transparent'}  
            ${error && 'border !border-error'}
            ${disabled && 'cursor-not-allowed !select-none text-mutedBlue'}
          `,
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
