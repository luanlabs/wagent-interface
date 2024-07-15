import { SvgProps } from 'src/constants/types';

const Icon = ({ fill = '#fff' }: SvgProps) => (
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.5 4L4.37838 7L10 1"
      stroke={fill}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
