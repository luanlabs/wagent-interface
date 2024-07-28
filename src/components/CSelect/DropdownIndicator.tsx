import Image from 'next/image';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';

import { OptionType } from '@/models';
import arrowLogo from 'public/images/arrow.svg';

const DropdownIndicator = (
  props: DropdownIndicatorProps<OptionType, boolean, GroupBase<OptionType>>,
) => (
  <components.DropdownIndicator {...props}>
    <Image
      src={arrowLogo}
      alt="arrow"
      className={`${
        props.selectProps.menuIsOpen
          ? 'rotate-180 transition-all duration-200'
          : 'rotate-0 transition-all duration-200'
      }`}
    />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
