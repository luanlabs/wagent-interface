'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import close from 'public/images/close.svg';

type CModalProps = {
  width?: string;
  title?: string | React.ReactNode;
  isModalOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
};

const CModal = ({ title, children, isModalOpen, width = '482px', onClose }: CModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(isModalOpen, onClose, modalRef);

  useEffect(() => {
    if (backdropRef.current) {
      backdropRef.current.style.opacity = isModalOpen ? '1' : '0';
      backdropRef.current.style.pointerEvents = isModalOpen ? 'auto' : 'none';
    }
  }, [isModalOpen]);

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 z-40 flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        isModalOpen ? 'bg-opacity-30' : 'bg-opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={modalRef}
        className={`fixed transform transition-all duration-500 ease-in-out ${
          isModalOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[10px] shadow-2xl bg-white h-auto`}
        style={{ width }}
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
