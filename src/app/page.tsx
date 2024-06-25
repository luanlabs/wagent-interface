import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import ErrorContainer from '@/containers/ErrorContainer';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard borderStatus="bordered" title="Dashboard">
      children
      <ErrorContainer />
    </CPageCard>
  );
}
