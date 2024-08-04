import { Metadata } from 'next';

import SignInContainer from '@/containers/SigninContainer';

export const metadata: Metadata = {
  title: 'Wagent - Sign up',
};

const SignIn = () => {
  return <SignInContainer />;
};

export default SignIn;
