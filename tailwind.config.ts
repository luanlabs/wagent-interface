import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#D0D5DD',
        error: '#F04438',
        ashGray: '#F1F1F1',
        warning: '#FDB022',
        success: '#039855',
        darkBlue: '#101828',
        offWhite: '#FCFCFD',
        lightRed: '#FECDCA',
        offBlack: '#344054',
        darkGray: '#101323',
        cadetBlue: '#98A2B3',
        alabaster: '#fafafa',
        darkGreen: '#073834',
        mintGreen: '#E4F9F1',
        lightGray: '#F9FAFB',
        smokyBlue: '#667085',
        lightGreen: '#A6F4C5',
        customGray: '#F2F4F7',
        lightestRed: '#FEF3F2',
        lightOrange: '#FEDF89',
        emeraldGreen: '#2AC18D',
        lightestGreen: '#ECFDF3',
        lightestOrange: '#FFFAEB',
      },
      screens: {
        mobile: { max: '1023px' },
        desktop: { min: '1024px' },
        bigScreen: { min: '1550px' },
        desktopMax: { max: '1536px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        xxl: { min: '1540px' },
        tall: { raw: '(min-height: 933px)' },
        short: { raw: '(max-height: 716px)' },
        chartFix: { min: '1023px', max: '1260px' },
      },
      boxShadow: {
        box: '0px 4px 16px 0px rgba(118, 138, 189, 0.3)',
        input: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      keyframes: {
        proceed: {
          from: { width: '0%' },
          '30%': { width: '30%' },
          to: { width: '100%' },
        },
      },
      animation: {
        progress: 'proceed 3s linear forwards',
      },
    },
  },
  plugins: [],
};
export default config;
