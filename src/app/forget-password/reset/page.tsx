import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';

import dashboardGlance from 'public/images/dashboardGlance.svg';
import ResetPasswordForm from '@/containers/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Wagent - Forget password',
};

const Forget = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default Forget;
