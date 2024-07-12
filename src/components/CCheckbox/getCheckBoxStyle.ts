import { CCheckboxType } from '.';

type CheckBoxStyleProps = {
  type: CCheckboxType;
  checked: boolean;
  disabled: boolean;
};

export const getCheckBoxStyle = ({ type, checked, disabled }: CheckBoxStyleProps) => {
  switch (type) {
    case 'primary': {
      return `w-6 h-6 ${disabled ? 'pointer-events-none opacity-60' : ' cursor-pointer'}
      ${checked ? 'bg-darkGreen border-darkGreen' : ' bg-white border-[#8D8E92]'}}`;
    }
    case 'secondary': {
      return `w-6 h-6 ${
        disabled ? 'pointer-events-none bg-[#F2F4F7] border-[#EAECF0]' : ' cursor-pointer'
      }
      ${checked ? 'bg-[#EEFFF9] border-darkGreen' : ' bg-white border-gary'}}`;
    }
  }
};
