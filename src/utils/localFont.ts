import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: '../../public/font/Aeonik-Regular.ttf',
    },
    {
      style: 'normal',
      weight: '500',
      path: '../../public/font/Aeonik-Medium.ttf',
    },
    {
      style: 'normal',
      weight: '700',
      path: '../../public/font/Aeonik-Bold.ttf',
    },
  ],
});

export default myFont;
