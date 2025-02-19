import React from 'react';
import Select, { MultiValue, ActionMeta, SingleValue } from 'react-select';

import SelectOption from './Option';
import CTokenLabel from '../CTokenLabel';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import customStyles from './CSelectSearchableCustomStyles';

import { BasicOptionType } from '@/models';

type CSelectSearchableProps = {
  placeholder?: string;
  options: BasicOptionType<string>[];
  selectedOptions: MultiValue<BasicOptionType<string>>;
  setSelectedOptions: (options: MultiValue<BasicOptionType<string>>) => void;
  onChange?: (value: MultiValue<BasicOptionType<string>>) => void;
};

const CSelectSearchable = ({
  onChange,
  placeholder = 'Search...',
  options,
  selectedOptions,
  setSelectedOptions,
}: CSelectSearchableProps) => {
  const handleChange = (
    newValue: MultiValue<BasicOptionType<string>> | SingleValue<BasicOptionType<string>>,
    _actionMeta: ActionMeta<BasicOptionType<string>>,
  ) => {
    const selectedValue = newValue as MultiValue<BasicOptionType<string>>;
    setSelectedOptions(selectedValue);

    if (onChange) onChange(selectedValue);
  };

  const handleRemove = (optionToRemove: BasicOptionType<string>) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option.value !== optionToRemove.value,
    );
    setSelectedOptions(updatedOptions);

    if (onChange) onChange(updatedOptions);
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
            symbol={option.label}
            onRemove={() => handleRemove(option)}
            rounded
          />
        ))}
      </div>
    </div>
  );
};

export default CSelectSearchable;
