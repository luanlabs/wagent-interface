import type { Metadata } from 'next';

import DashboardContainer from '@/containers/DashboardContainer';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  const {} = useRequest();
  return <DashboardContainer transactionsRes={transactionsRes} />;
}
