import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard borderStatus="bordered" title="Dashboard">
      children
    </CPageCard>
  );
}
