import { CBarChartType } from '@/models';

const generateChartData = (timeStamp: string): CBarChartType[] => {
  const dataFor1D: CBarChartType[] = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 3000 },
    { name: 'Mar', amount: 5000 },
    { name: 'Apr', amount: 4780 },
    { name: 'May', amount: 5890 },
    { name: 'Jun', amount: 4390 },
    { name: 'Jul', amount: 4490 },
    { name: 'Aug', amount: 3790 },
    { name: 'Sep', amount: 3490 },
    { name: 'Oct', amount: 5490 },
    { name: 'Nov', amount: 6090 },
    { name: 'Dec', amount: 7000 },
  ];

  const dataFor5D: CBarChartType[] = [
    { name: 'Jan', amount: 3000 },
    { name: 'Feb', amount: 2400 },
    { name: 'Mar', amount: 3490 },
    { name: 'Apr', amount: 3000 },
    { name: 'May', amount: 5890 },
    { name: 'Jun', amount: 3400 },
    { name: 'Jul', amount: 3600 },
    { name: 'Aug', amount: 3490 },
    { name: 'Sep', amount: 6090 },
    { name: 'Oct', amount: 4200 },
    { name: 'Nov', amount: 4400 },
    { name: 'Dec', amount: 7000 },
  ];

  const dataFor1M: CBarChartType[] = [
    { name: 'Jan', amount: 3000 },
    { name: 'Feb', amount: 3600 },
    { name: 'Mar', amount: 3900 },
    { name: 'Apr', amount: 4500 },
    { name: 'May', amount: 4800 },
    { name: 'Jun', amount: 5100 },
    { name: 'Jul', amount: 5400 },
    { name: 'Aug', amount: 5700 },
    { name: 'Sep', amount: 6000 },
    { name: 'Oct', amount: 6300 },
    { name: 'Nov', amount: 6600 },
    { name: 'Dec', amount: 6900 },
  ];

  const dataFor1Y: CBarChartType[] = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 4800 },
    { name: 'Mar', amount: 5200 },
    { name: 'Apr', amount: 6000 },
    { name: 'May', amount: 6400 },
    { name: 'Jun', amount: 6800 },
    { name: 'Jul', amount: 7200 },
    { name: 'Aug', amount: 7600 },
    { name: 'Sep', amount: 8000 },
    { name: 'Oct', amount: 8400 },
    { name: 'Nov', amount: 8800 },
    { name: 'Dec', amount: 9200 },
  ];

  const dataForAll: CBarChartType[] = [
    { name: 'Jan', amount: 5000 },
    { name: 'Feb', amount: 6000 },
    { name: 'Mar', amount: 6500 },
    { name: 'Apr', amount: 7500 },
    { name: 'May', amount: 8000 },
    { name: 'Jun', amount: 8500 },
    { name: 'Jul', amount: 9000 },
    { name: 'Aug', amount: 9500 },
    { name: 'Sep', amount: 10000 },
    { name: 'Oct', amount: 10500 },
    { name: 'Nov', amount: 11000 },
    { name: 'Dec', amount: 11500 },
  ];

  switch (timeStamp) {
    case '1d':
      return dataFor1D;
    case '5d':
      return dataFor5D;
    case '1m':
      return dataFor1M;
    case '1y':
      return dataFor1Y;
    case 'all':
      return dataForAll;
    default:
      return dataFor1D;
  }
};

export default generateChartData;
