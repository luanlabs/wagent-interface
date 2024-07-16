import { useState, useEffect } from 'react';
import Image from 'next/image';
import Select, {
  components,
  MultiValueProps,
  MultiValue,
  OptionProps,
  SingleValue,
} from 'react-select';

import { MultiSelectType, OptionType } from '@/models';

import DropdownIndicator from './DropdownIndicator';
import customStyles from './selectCustomStyles';
import CTokenLabel from '../CTokenLabel';

type CSelectProps = {
  placeholder?: string;
  className?: string;
  options: OptionType[];
  onChange?: (value: MultiSelectType) => void;
  value?: MultiSelectType;
};

const CSelect = ({ placeholder, className, onChange, options, value = null }: CSelectProps) => {
  const [selectValue, setSelectValue] = useState<MultiSelectType>(null);
  const [isMounted, setIsMounted] = useState(false);
  const id = Date.now().toString();

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  useEffect(() => setIsMounted(true), []);

  const handleChange = (newValue: MultiValue<OptionType> | SingleValue<OptionType>) => {
    const multiValue = newValue as MultiValue<OptionType>;
    if (multiValue.length <= 3) {
      setSelectValue(multiValue);

      if (onChange) {
        onChange(multiValue);
      }
    }
  };

  const Option = (props: OptionProps<OptionType>) => (
    <components.Option {...props}>
      <Image
        src={require(`/public/images/tokens/${props.data.value.toLowerCase()}.svg`)}
        width={20}
        height={20}
        alt={props.data.label}
        className="mr-2"
      />
      {props.data.label}
    </components.Option>
  );

  const MultiValue = (props: MultiValueProps<OptionType>) => {
    const { data, innerProps, removeProps } = props;
    return (
      <div {...innerProps}>
        {data.value ? (
          <CTokenLabel symbol={data.value} onRemove={removeProps.onClick} className="mr-1 h-7" />
        ) : null}
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {isMounted ? (
        <Select
          id={id}
          options={options}
          autoFocus={false}
          value={selectValue}
          isSearchable={false}
          onChange={handleChange}
          placeholder={selectValue?.length ? '' : placeholder}
          components={{
            Option: Option,
            DropdownIndicator,
            MultiValue,
          }}
          isMulti
          styles={customStyles()}
        />
      ) : null}
    </div>
  );
};

export default CSelect;
