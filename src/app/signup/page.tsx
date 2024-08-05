import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import SignUpForm from '@/containers/SignupForm';

import dashboardGlance from 'public/images/dashboardGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - Sign up',
};

const SignUp = () => {
  return (
    <AuthLayout imageSrc={dashboardGlance}>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
