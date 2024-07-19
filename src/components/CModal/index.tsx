'use client';

import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import close from 'public/images/close.svg';

type CModalProps = {
  width?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode | React.JSX.Element;
};

const CModal = ({ title, children, isOpen, width, onClose, className }: CModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(isOpen, onClose, modalRef);

  useEffect(() => {
    if (backdropRef.current) {
      backdropRef.current.style.opacity = isOpen ? '1' : '0';
      backdropRef.current.style.pointerEvents = isOpen ? 'auto' : 'none';
    }
  }, [isOpen]);

  return (
    <div
      ref={backdropRef}
      className={`fixed -inset-2 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        isOpen ? 'bg-opacity-30' : 'bg-opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={modalRef}
        className={cn(
          className,
          `fixed ${
            width ? `w-[${width + 'px'}]` : 'w-[482px] mobile:w-[calc(100%-32px)]'
          } transform transition-all duration-500 ease-in-out ${
            isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !z-[9999] rounded-[10px] shadow-2xl bg-white h-auto`,
        )}
      >
        <div className="flex flex-col w-full h-full px-6 py-4 gap-4">
          {title && (
            <header className="flex justify-between items-center text-2xl font-medium select-none">
              <p>{title}</p>
              <Image src={close} alt="close" onClick={onClose} className="cursor-pointer" />
            </header>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CModal;
