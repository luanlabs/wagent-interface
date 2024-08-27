import { useState } from 'react';
import cn from 'classnames';

import { BasicOptionType } from '@/models';

export type Option = BasicOptionType<string>;

type CRadioButtonGroupProps = {
  options: Option[];
  defaultOption: Option;
  onChange?: (option: Option) => void;
};

const CRadioButtonGroup = ({ options, defaultOption, onChange }: CRadioButtonGroupProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultOption);

  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = options.find((option) => option.value === event.target.id);

    if (selectedOption) {
      setSelectedTab(selectedOption);

      if (onChange) {
        onChange(selectedOption);
      }
    }
  };

  return (
    <div>
      <div className="bg-white relative w-full py-2 px-2 flex space-x-2 rounded-[55px] border border-[#E4E7EC]">
        {options.map((tab) => (
          <label key={tab.value} className="flex-1 text-center">
            <input
              type="radio"
              id={tab.value}
              name="tabs"
              className="hidden"
              aria-checked={selectedTab.value === tab.value}
              onChange={handleTabChange}
            />
            <div
              className={cn(
                'h-[28px] rounded-[63px] font-medium cursor-pointer transition-all duration-300 select-none text-base border border-transparent',
                { 'bg-[#F0EFFF] transition-all duration-300': selectedTab.value === tab.value },
              )}
            >
              {tab.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CRadioButtonGroup;
