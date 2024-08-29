import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import ForgetForm from '@/containers/ForgetForm';

import dashboardGlance from 'public/images/dashboardGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - Forget password',
};

const Forget = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <ForgetForm />
    </AuthLayout>
  );
};

export default Forget;
