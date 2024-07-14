import { SvgProps } from 'src/constants/types';

const Icon = ({ fill }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37px"
    height="37px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke={fill}
      strokeWidth="9"
      r="38"
      strokeDasharray="179.0707812546182 61.690260418206066"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.8867924528301885s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default Icon;
