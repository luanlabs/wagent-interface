import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard borderStatus="borderless" title="Dashboard">
      children
    </CPageCard>
  );
}
