import { Metadata } from 'next';

import HistoryContainer from '@/containers/HistoryContainer';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

export default function History() {
  return <HistoryContainer />;
}

History;
