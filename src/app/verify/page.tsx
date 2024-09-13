import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import Form from './form';

import dashboardGlance from 'public/images/dashboardGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - request verification email',
};

const Forget = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <Form />
    </AuthLayout>
  );
};

export default Forget;
