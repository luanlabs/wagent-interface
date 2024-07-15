import { SvgProps } from 'src/constants/types';

const Icon = ({ fill = '#667085' }: SvgProps) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.81641 5.81836L12.1804 12.1823"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.81963 12.1823L12.1836 5.81836"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
