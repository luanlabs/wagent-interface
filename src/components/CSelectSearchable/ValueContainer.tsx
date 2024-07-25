import React from 'react';
import { components, GroupBase, ValueContainerProps } from 'react-select';

import { OptionType } from '@/models';
import { Search } from '@/assets';

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<OptionType, boolean, GroupBase<OptionType>>) => {
  const { hasValue, selectProps } = props;

  const selectValue = (
    <div className="flex items-center space-x-2 px-2">
      <Search />
      <p>{selectProps.placeholder}</p>
    </div>
  );

  return (
    <components.ValueContainer className="text-[#6b7280]" {...props}>
      {!hasValue && !selectProps.inputValue ? selectValue : selectValue}
      {Array.isArray(children) && children.length > 1
        ? React.cloneElement(children[1] as React.ReactElement)
        : children}
    </components.ValueContainer>
  );
};

export default ValueContainer;
