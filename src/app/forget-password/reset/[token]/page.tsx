import { Metadata } from 'next';

import request from '@/utils/request';
import AuthLayout from '@/containers/AuthLayout';

import dashboardGlance from 'public/images/dashboardGlance.svg';

import Form from './form';

export const metadata: Metadata = {
  title: 'Wagent - Reset password',
};

export default async function Reset({ params }: { params: { token: string } }) {
  await request(`${process.env.NEXT_PUBLIC_API}/users/auth/reset/${params.token}`);

  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <Form token={params.token} />
    </AuthLayout>
  );
}
