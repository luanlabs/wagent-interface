import { useState } from 'react';
import cn from 'classnames';

export type CRadioButtonGroupType = {
  value: string;
  label: string;
};

interface CRadioButtonGroupProps {
  value: CRadioButtonGroupType[];
  defaultSelectedTab: string;
  onChange?: (value: string) => void;
}

const CRadioButtonGroup = ({ value, defaultSelectedTab, onChange }: CRadioButtonGroupProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultSelectedTab);

  const handleTabChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = value.target;
    setSelectedTab(id);

    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div>
      <div
        className={`relative w-full py-2 bg-lightGray px-2 flex space-x-2 rounded-[55px] border border-[#E4E7EC]`}
      >
        {value.map((tab) => (
          <label key={tab.value} className="flex-1 text-center">
            <input
              type="radio"
              id={tab.value}
              name="tabs"
              className="hidden"
              aria-checked
              onChange={handleTabChange}
            />

            <div
              className={cn(
                ' h-[28px] rounded-[63px] font-medium cursor-pointer transition-all duration-300 select-none text-base border border-transparent',
                {
                  'bg-[#F0EFFF] transition-all duration-300': selectedTab === tab.value,
                },
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
