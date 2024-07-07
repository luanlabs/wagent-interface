'use client';
import React, { useRef, useState } from 'react';

import { ArrowDown, Filter } from '@/assets';
import CCheckbox from '@/components/CCheckbox';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import CInput from '@/components/CInput';
import searchLogo from '../../../public/images/search.svg';
import CTokenLabel from '@/components/CTokenLabel';

const FilterHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(isOpen, onClose, modalRef);

  return (
    <div className="">
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
          className="absolute top-14 right-6 w-[275px] p-[14px] rounded-md bg-white space-y-2 shadow-box"
        >
          <div className="relative">
            <CInput
              autoFocus
              placeholder="Filter by"
              icon={searchLogo}
              value={inputValue}
              onChange={handleInputChange}
              enterKeyHint="search"
              iconClassName="!bottom-2.5"
              inputClassName="h-10 w-full !text-[#667085] shadow-input focus:outline-none bg-white !border !border-gray rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <p className="text-base">Filter by Method</p>
            <CCheckbox
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Stream"
              value="Stream"
            />
            <CCheckbox
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Single"
              value="Single"
            />
            <CCheckbox
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Vesting"
              value="Vesting"
            />
          </div>
          <div className="space-y-2">
            <p className="text-base">Filter by Status</p>
            <CCheckbox
              value="Active"
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Active"
            />
            <CCheckbox
              value="Completed"
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Completed"
            />
            <CCheckbox
              value="Cancelled"
              checked={isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label="Cancelled"
            />
          </div>
          <div className="space-y-2">
            <p className="text-base">Filter by Token</p>
            <CCheckbox
              value=""
              checked={isChecked}
              disabled
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label={<CTokenLabel symbol="xlm" logo="" />}
            />
            <CCheckbox
              value=""
              checked={!isChecked}
              disabled
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label={<CTokenLabel symbol="usdc" logo="" />}
            />
            <CCheckbox
              value=""
              checked={!isChecked}
              onChange={handleCheckBoxChange}
              onClick={handleCheckBoxClick}
              label={<CTokenLabel symbol="dai" logo="" />}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterHistory;
