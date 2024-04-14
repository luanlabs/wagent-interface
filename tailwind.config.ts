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
