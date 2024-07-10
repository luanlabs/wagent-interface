import React, { useEffect, useState } from 'react';
import cn from 'classnames';

export type CButtonGroupType = {
  value: string;
  label: string;
};

interface CButtonGroupProps {
  tabs: CButtonGroupType[];
  defaultSelectedTabs?: string[];
  selectedMethod?: string[];
  onChange?: (value: string[]) => void;
}

const CButtonGroup = ({
  tabs,
  defaultSelectedTabs = [],
  selectedMethod = [],
  onChange,
}: CButtonGroupProps) => {
  const [selectedTabs, setSelectedTabs] = useState(new Set([...defaultSelectedTabs]));

  useEffect(() => {
    const newSelectedTabs = new Set<string>([...defaultSelectedTabs, ...selectedMethod]);
    if (
      newSelectedTabs.size !== selectedTabs.size ||
      Array.from(newSelectedTabs).some((tab) => !selectedTabs.has(tab))
    ) {
      setSelectedTabs(newSelectedTabs);
    }
  }, [defaultSelectedTabs, selectedMethod]);

  const handleClick = (method: string) => {
    setSelectedTabs((prevSelected) => {
      const newSelected = new Set(prevSelected);

      if (newSelected.has(method)) {
        if (!defaultSelectedTabs.includes(method)) {
          newSelected.delete(method);
        }
      } else {
        newSelected.add(method);
      }

      if (onChange) {
        onChange(Array.from(newSelected));
      }

      return newSelected;
    });
  };

  return (
    <div className="relative w-full bg-lightGray p-1 flex space-x-1 rounded-[10px]">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleClick(tab.value)}
          className={cn(
            'py-2 cursor-pointer rounded-[7px] transition-all duration-300 select-none text-base border border-transparent',
            {
              'bg-white border border-1 !border-customGray transition-all duration-300':
                selectedTabs.has(tab.value),
              'text-lightGrayishBlue': !selectedTabs.has(tab.value),
            },
            {
              'w-full': tabs.length >= 2,
              'w-[116px]': tabs.length < 2,
            },
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CButtonGroup;
