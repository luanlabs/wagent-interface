import React from 'react';
import Image from 'next/image';
import { components, OptionProps, GroupBase } from 'react-select';
import { OptionType } from '@/models';

const SelectOption: React.ComponentType<OptionProps<OptionType, boolean, GroupBase<OptionType>>> = (
  props,
) => (
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

export default SelectOption;
