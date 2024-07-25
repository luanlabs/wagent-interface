import React, { useState } from 'react';
import Select, { MultiValue, ActionMeta, SingleValue } from 'react-select';

import DropdownIndicator from '../CSelect/DropdownIndicator';
import customStyles from '../CSelect/selectCustomStyles';
import ValueContainer from './ValueContainer';
import CTokenLabel from '../CTokenLabel';
import SelectOption from './Option';

export interface OptionType {
  value: string;
  label: string;
}

type CSelectSearchableProps = {
  placeholder?: string;
  options: OptionType[];
  onChange?: (value: MultiValue<OptionType>) => void;
};

const CSelectSearchable = ({
  onChange,
  placeholder = 'Search ...',
  options,
}: CSelectSearchableProps) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);

  const handleChange = (
    newValue: MultiValue<OptionType> | SingleValue<OptionType>,
    _actionMeta: ActionMeta<OptionType>,
  ) => {
    setSelectedOptions(newValue as MultiValue<OptionType>);

    if (onChange) onChange(selectedOptions);
  };

  const handleRemove = (optionToRemove: OptionType) => {
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
