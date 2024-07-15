import { Metadata } from 'next';

import HistoryContainer from '@/containers/HistoryContainer';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

const History = () => {
  return <HistoryContainer />;
};

export default History;
