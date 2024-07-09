'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import CInput from '@/components/CInput';
import CCheckbox from '@/components/CCheckbox';
import CTokenLabel from '@/components/CTokenLabel';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';

import { ArrowDown, Filter } from '@/assets';
import close from '../../../public/images/close.svg';
import searchLogo from '../../../public/images/search.svg';

const FilterHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState({
    stream: false,
    single: false,
    vesting: false,
    active: false,
    completed: false,
    cancelled: false,
  });
  const [inputValue, setInputValue] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBoxes((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsListVisible(true);
  };

  const handleClickInput = (e: any) => {
    setIsListVisible(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);
  const secondModalRef = useRef<HTMLDivElement>(null);

  useOutsideClickHandler(isOpen, onClose, modalRef);

  return (
    <div>
      <div
        className="relative inline-flex items-center justify-center hover:bg-lightGray active:bg-lightGray/20 transition
        gap-2 w-[100px] font-normal text-sm h-10 border border-customGray rounded-[10px] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Filter />
        <div className="flex items-center select-none gap-2">
          Filter
          <ArrowDown />
        </div>
      </div>
      {isOpen ? (
        <div
          ref={modalRef}
          className="absolute p-[14px] top-14 right-6 w-[275px] rounded-md bg-white space-y-2 shadow-box"
        >
          <div className="relative">
            <CInput
              autoFocus
              placeholder="Filter by Token"
              icon={searchLogo}
              value={inputValue}
              onChange={handleInputChange}
              onClick={handleClickInput}
              enterKeyHint="search"
              iconClassName="!bottom-2.5"
              inputClassName="h-10 w-full !text-[#667085] shadow-input focus:outline-none bg-white !border !border-gray rounded-lg"
            />
          </div>
          {isListVisible && (
            <div className="relative">
              <div
                ref={secondModalRef}
                className={`absolute min-h-10 max-h-[115px] overflow-auto z-30 top-0 right-0 left-0 p-[10px] shadow-input shadow-[#00000033] rounded-lg mt-1 bg-white`}
              >
                <Image
                  src={close}
                  alt="close"
                  onClick={() => {
                    setIsListVisible(false);
                  }}
                  className="absolute top-2 right-3 select-none cursor-pointer w-5 h-5"
                />
                <ul className="space-y-2">
                  <CCheckbox
                    value=""
                    checked
                    onChange={handleCheckBoxChange}
                    label={<CTokenLabel symbol="usdc" logo="" />}
                  />
                </ul>
              </div>
            </div>
          )}
          <div className="space-y-2">
            <p className="text-base">Filter by Method</p>
            <CCheckbox
              value="stream"
              label="Stream"
              checked={checkBoxes.stream}
              onChange={handleCheckBoxChange}
            />
            <CCheckbox
              value="single"
              label="Single"
              checked={checkBoxes.single}
              onChange={handleCheckBoxChange}
            />
            <CCheckbox
              value="vesting"
              label="Vesting"
              checked={checkBoxes.vesting}
              onChange={handleCheckBoxChange}
            />
          </div>
          <div className="space-y-2">
            <p className="text-base">Filter by Status</p>
            <CCheckbox
              value="active"
              label="Active"
              checked={checkBoxes.active}
              onChange={handleCheckBoxChange}
            />
            <CCheckbox
              value="completed"
              label="Completed"
              checked={checkBoxes.completed}
              onChange={handleCheckBoxChange}
            />
            <CCheckbox
              value="cancelled"
              label="Cancelled"
              checked={checkBoxes.cancelled}
              onChange={handleCheckBoxChange}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterHistory;
