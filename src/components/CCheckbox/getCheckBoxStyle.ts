import { CCheckboxType } from '.';

export const getCheckBoxStyle = (type: CCheckboxType, checked: boolean, disabled: boolean) => {
  switch (type) {
    case 'primary': {
      return `w-6 h-6 ${disabled ? 'pointer-events-none opacity-70' : 'cursor-pointer'}
      ${checked ? 'bg-[#073834] border !border-[#073834]' : 'bg-white border border-gray'}`;
    }

    case 'secondary': {
      return `w-5 h-5 ${
        disabled ? 'pointer-events-none !bg-[#F2F4F7] border !border-[#EAECF0]' : 'cursor-pointer'
      }
      ${checked ? 'bg-[#EEFFF9] border !border-[#073834]' : ' bg-white border !border-gray'}`;
    }
  }
};
