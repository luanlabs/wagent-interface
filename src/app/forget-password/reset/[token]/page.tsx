import { Metadata } from 'next';

import request from '@/utils/request';
import { API_URL } from '@/config/env';
import AuthLayout from '@/containers/AuthLayout';

import dashboardGlance from 'public/images/dashboardGlance.svg';

import Form from './form';

export const metadata: Metadata = {
  title: 'Wagent - Reset password',
};

export default async function Reset({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  await request(`${API_URL}/users/auth/reset/${token}`);

  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <Form token={token} />
    </AuthLayout>
  );
}
