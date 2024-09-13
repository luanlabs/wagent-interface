import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';

import dashboardGlance from 'public/images/dashboardGlance.svg';

import Form from './form';

export const metadata: Metadata = {
  title: 'Wagent - Forget password',
};

const Forget = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <Form />
    </AuthLayout>
  );
};

export default Forget;
