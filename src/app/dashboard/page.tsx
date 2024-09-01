import type { Metadata } from 'next';

import DashboardContainer from '@/containers/DashboardContainer';
import getTransactions from '@/services/getTransactions';
import Cookies from 'js-cookie';
import request from '@/utils/request';
export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  const token = Cookies.get('token');

  const transactionsRes = request(`${process.env.NEXT_PUBLIC_API}/users/transactions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(token, transactionsRes);
  return <DashboardContainer transactionsRes={transactionsRes} />;
}
