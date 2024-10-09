import { Metadata } from 'next';

import UserDataProvider from '@/containers/UserDataProvider';
import DashboardContainer from '@/containers/DashboardContainer';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return <UserDataProvider child={DashboardContainer} />;
}
