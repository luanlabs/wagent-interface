import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import SignInForm from '@/containers/SigninForm';

import settingsGlance from 'public/images/settingsGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - Sign in',
};

const SignIn = () => {
  return (
    <AuthLayout imageSrc={settingsGlance}>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
