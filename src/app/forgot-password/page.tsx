import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import ForgotForm from '@/containers/ForgotForm';

import dashboardGlance from 'public/images/dashboardGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - Forgot password',
};

const Forgot = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <ForgotForm />
    </AuthLayout>
  );
};

export default Forgot;
