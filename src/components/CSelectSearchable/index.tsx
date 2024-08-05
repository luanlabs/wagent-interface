import React, { useState } from 'react';
import Select, { MultiValue, ActionMeta, SingleValue } from 'react-select';

import SelectOption from './Option';
import CTokenLabel from '../CTokenLabel';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import customStyles from './CSelectSearchableCustomStyles';

import { BasicOptionType, OptionType } from '@/models';

type CSelectSearchableProps = {
  placeholder?: string;
  options: BasicOptionType<string>[];
  onChange?: (value: MultiValue<BasicOptionType<string>>) => void;
};

const CSelectSearchable = ({
  onChange,
  placeholder = 'Search ...',
  options,
}: CSelectSearchableProps) => {
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<BasicOptionType<string> | OptionType>
  >([]);

  const handleChange = (
    newValue: MultiValue<BasicOptionType<string>> | SingleValue<BasicOptionType<string>>,
    _actionMeta: ActionMeta<BasicOptionType<string>>,
  ) => {
    setSelectedOptions(newValue as MultiValue<BasicOptionType<string>>);

    if (onChange) onChange(selectedOptions);
  };

  const handleRemove = (optionToRemove: BasicOptionType<string>) => {
    setSelectedOptions(selectedOptions.filter((option) => option.value !== optionToRemove.value));
  };

  return (
    <div className="max-w-sm mx-auto">
      <Select
        options={options}
        isMulti
        isSearchable
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        components={{
          Option: SelectOption,
          DropdownIndicator,
          ValueContainer,
          ClearIndicator: undefined,
        }}
        styles={customStyles()}
      />

      <div className="mt-4 flex space-x-1">
        {selectedOptions.map((option) => (
          <CTokenLabel
            key={option.value}
            symbol={option.value}
            onRemove={() => handleRemove(option)}
            rounded
          />
        ))}
      </div>
    </div>
  );
};

export default CSelectSearchable;
