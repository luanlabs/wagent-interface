import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import Test from '@/containers/Test';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard borderStatus="bordered" title="Dashboard">
      <Test />
    </CPageCard>
  );
}
