import { SvgProps } from 'src/constants/types';

const Icon = ({ fill = '#98A2B3' }: SvgProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.25 3.125V7.5H11.875V10.625H8.125V13.75H3.75V3.125C3.75 2.95924 3.81585 2.80027 3.93306 2.68306C4.05027 2.56585 4.20924 2.5 4.375 2.5H15.625C15.7908 2.5 15.9497 2.56585 16.0669 2.68306C16.1842 2.80027 16.25 2.95924 16.25 3.125Z"
      fill="white"
    />
    <path
      d="M15.625 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V3.125C16.875 2.79348 16.7433 2.47554 16.5089 2.24112C16.2745 2.0067 15.9565 1.875 15.625 1.875ZM11.875 11.25H15.625V13.125H8.75V11.25H11.875ZM12.5 10V8.125H15.625V10H12.5ZM15.625 3.125V6.875H11.875C11.7092 6.875 11.5503 6.94085 11.4331 7.05806C11.3158 7.17527 11.25 7.33424 11.25 7.5V10H8.125C7.95924 10 7.80027 10.0658 7.68306 10.1831C7.56585 10.3003 7.5 10.4592 7.5 10.625V13.125H4.375V3.125H15.625ZM15.625 16.875H4.375V14.375H15.625V16.875Z"
      fill={fill}
    />
  </svg>
);

export default Icon;
