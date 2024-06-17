import { SvgProps } from 'src/constants/types';

const Icon = ({ fill }: SvgProps) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.03484 4.785L5.99984 1.75L2.96484 4.785"
      stroke={fill}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10.25V1.83496"
      stroke={fill}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Icon;
