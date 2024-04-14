import { CButtonVariantType, CButtonColorType } from './index';

const buttonCustomStyles = (
  variant: CButtonVariantType,
  color?: CButtonColorType
) => {
  let colorStyles = '';
  if (color === 'orange') {
    colorStyles = 'bg-darkCoral h-10 text-white';
  } else if (color === 'purple') {
    colorStyles = 'bg-richLavender text-white h-10';
  } else if (color === 'gray') {
    colorStyles =
      'bg-lavenderBlush border border-midnightBlue text-midnightBlue';
  } else if (color === 'white') {
    colorStyles = 'bg-white border border-midnightBlue text-midnightBlue';
  } else if (color === 'blue') {
    colorStyles = 'bg-blueIndigo text-white transition hover:bg-buttonHover';
  } else if (color === 'outline') {
    colorStyles =
      'bg-white text-royalBlue border border-royalBlue !rounded-[10px] transition hover:bg-lavenderBlush';
  } else {
    colorStyles = 'bg-white text-royalBlue !rounded-[11px] h-9!px-3';
  }

  const VariantStyles =
    variant === 'simple'
      ? 'rounded-[30px] text-center text-base px-6 h-11 flex flex-row justify-center items-center whitespace-nowrap select-none'
      : 'bg-midnightBlue rounded-xl w-[329px] h-14 text-white text-base text-center flex justify-center items-center select-none';

  return `${colorStyles} ${VariantStyles}`;
};

export default buttonCustomStyles;
