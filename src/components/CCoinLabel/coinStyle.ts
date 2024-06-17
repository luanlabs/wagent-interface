const coinStyle = (name: string) => {
  switch (name.toLowerCase()) {
    case 'eth':
      return {
        bgColor: '#F0F0FF',
        borderColor: '#D0D0FE',
        textColor: '#6938EF',
      };
    case 'xlm':
      return {
        bgColor: '#F9FAFB',
        borderColor: '#E4E7EC',
        textColor: '#000000',
      };
    case 'dai':
      return {
        bgColor: '#FFFAEB',
        borderColor: '#FEDF89',
        textColor: '#FEC84B',
      };
    case 'usdc':
      return {
        bgColor: '#E0F2FE',
        borderColor: '#B9E6FE',
        textColor: '#026AA2',
      };
    case 'usdt':
      return {
        bgColor: '#ECFDF3',
        borderColor: '#A6F4C5',
        textColor: '#039855',
      };
    default:
      return {
        bgColor: '#FFFFFF',
        borderColor: '#000000',
        textColor: '#000000',
      };
  }
};

export default coinStyle;
