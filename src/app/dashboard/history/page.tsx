import { Metadata } from 'next';

import HistoryContainer from '@/containers/HistoryContainer';
import UserDataProvider from '@/containers/UserDataProvider';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

export default function History() {
  return <UserDataProvider child={HistoryContainer} />;
}
