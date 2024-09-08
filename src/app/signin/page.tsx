import { Metadata } from 'next';

import AuthLayout from '@/containers/AuthLayout';
import Form from './form';

import settingsGlance from 'public/images/settingsGlance.svg';

export const metadata: Metadata = {
  title: 'Wagent - Sign in',
};

const SignIn = () => {
  return (
    <AuthLayout imageSrc={settingsGlance}>
      <Form />
    </AuthLayout>
  );
};

export default SignIn;
