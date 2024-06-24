import { useState } from 'react';
import cn from 'classnames';

export type CRadioButtonGroupType = {
  value: string;
  label: string;
};

interface CRadioButtonGroupProps {
  tabs: CRadioButtonGroupType[];
  defaultSelectedTab: string;
  onChange?: (value: string) => void;
}

const CRadioButtonGroup = ({ tabs, defaultSelectedTab, onChange }: CRadioButtonGroupProps) => {
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
      <div className={`relative w-full bg-lightGray p-1 flex space-x-1 rounded-[10px]`}>
        {tabs.map((tab) => (
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
                'py-2 cursor-pointer rounded-[7px] transition-all duration-300 select-none text-base border border-transparent',
                {
                  'bg-white border border-1 !border-customGray transition-all duration-300':
                    selectedTab === tab.value,
                  'text-lightGrayishBlue': selectedTab !== tab.value,
                },
                {
                  'w-full': tabs.length >= 2,
                  'w-[116px]': tabs.length < 2,
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
