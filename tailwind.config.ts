import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#fafafa',
        darkGreen: '#073834',
        mintGreen: '#E4F9F1',
        lightGray: '#F9FAFB',
        customGray: '#F2F4F7',
        cadetBlue: '#98A2B3',
        gray: '#D0D5DD',
        ashGray: '#F1F1F1',
        emeraldGreen: '#2AC18D',
        darkBlue: '#101828',
        offWhite: '#FCFCFD',
        offBlack: '#344054',
        darkGray: '#101323',
        success: '#039855',
        lightGreen: '#A6F4C5',
      },
      screens: {
        mobile: { max: '1023px' },
        desktop: { min: '1024px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        xxl: { min: '1536px', max: '2500px' },
        tall: { raw: '(min-height: 933px)' },
        short: { raw: '(max-height: 710px)' },
      },
    },
  },
  plugins: [],
};
export default config;
