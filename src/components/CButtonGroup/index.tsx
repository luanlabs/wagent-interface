import React, { useEffect, useState } from 'react';
import cn from 'classnames';

export type CButtonGroupType = {
  value: string;
  label: string;
};

interface CButtonGroupProps {
  value: CButtonGroupType[];
  defaultValue?: string[];
  selectedMethod?: string[];
  onChange?: (value: string[]) => void;
}

const CButtonGroup = ({
  value,
  defaultValue = [],
  selectedMethod = [],
  onChange,
}: CButtonGroupProps) => {
  const [selectedTabs, setSelectedTabs] = useState(new Set([...defaultValue]));

  useEffect(() => {
    const newSelectedTabs = new Set<string>([...defaultValue, ...selectedMethod]);
    if (
      newSelectedTabs.size !== selectedTabs.size ||
      Array.from(newSelectedTabs).some((tab) => !selectedTabs.has(tab))
    ) {
      setSelectedTabs(newSelectedTabs);
    }
  }, [defaultValue, selectedMethod]);

  const handleClick = (method: string) => {
    setSelectedTabs((prevSelected) => {
      const newSelected = new Set(prevSelected);

      if (newSelected.has(method)) {
        if (!defaultValue.includes(method)) {
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
      {value.map((item) => (
        <button
          key={item.value}
          onClick={() => handleClick(item.value)}
          className={cn(
            'py-2 cursor-pointer rounded-[7px] transition-all duration-300 select-none text-base border border-transparent',
            {
              'bg-white border border-1 !border-customGray transition-all duration-300':
                selectedTabs.has(item.value),
              'text-lightGrayishBlue': !selectedTabs.has(item.value),
            },
            {
              'w-full': value.length >= 2,
              'w-[116px]': value.length < 2,
            },
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default CButtonGroup;
