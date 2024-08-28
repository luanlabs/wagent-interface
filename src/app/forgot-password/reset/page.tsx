import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';

import dashboardGlance from 'public/images/dashboardGlance.svg';
import ResetPasswordForm from '@/containers/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Wagent - Forgot password',
};

const Forgot = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default Forgot;
