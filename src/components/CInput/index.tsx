import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import CLabel from '../CLabel';
// import useCustomID from 'src/hooks/useCustomId';

import alertLogo from 'public/images/error.png';
import clearInputLogo from 'public/images/x.svg';

interface CInputProps {
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
  tooltipTitle?: string;
  iconClassName?: string;
  clipboardText?: string;
  tooltipDetails?: string;
  inputClassName?: string;
  value?: string | number | any;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInputClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePaste?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
  enterKeyHint?: 'search' | 'done' | 'enter' | 'go' | 'next' | 'previous' | 'send';
}

const CInput = ({
  icon,
  label,
  error,
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
  tooltipTitle,
  enterKeyHint,
  iconClassName,
  inputClassName,
  tooltipDetails,
  clearInputClick,
  ...props
}: CInputProps) => {
  const id = useCustomID('Cinput');

  return (
    <div className={className}>
      <CLabel
        label={label}
        tooltipDetails={tooltipDetails}
        tooltipTitle={tooltipTitle}
        htmlFor={id}
      />

      <div className="relative w-full">
        {icon && (
          <div className={cn(iconClassName, `absolute bottom-4 left-3.5`)}>
            <Image src={icon} width={22} height={22} alt="inputIcon" />
          </div>
        )}

        {error && alertLogo && (
          <div className="absolute bottom-3.5 right-3.5">
            <Image src={alertLogo} width={30} height={30} alt="alert" />
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
          id={id}
          {...props}
          value={value}
          onClick={onClick}
          disabled={disabled}
          onChange={onChange}
          autoFocus={autoFocus}
          placeholder={placeholder}
          enterKeyHint={enterKeyHint}
          autoComplete="off"
          className={cn(
            inputClassName,
            `${icon ? 'px-12' : 'px-4'}
            self-stretch rounded-xl placeholder-mutedBlue text-darkGreen text-base w-full h-14 p-4 bg-neutral-100 justify-start items-center inline-flex outline-none border
            ${border ? 'focus:border-darkBlue' : 'border-transparent'}  
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
