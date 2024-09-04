import type { Metadata } from 'next';

import DashboardContainer from '@/containers/DashboardContainer';
import getTransactions from '@/services/getTransactions';
import Cookies from 'js-cookie';
import request from '@/utils/request';
export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return <DashboardContainer />;
}
