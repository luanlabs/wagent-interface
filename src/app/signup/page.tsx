import { Metadata } from 'next';

import SignupContainer from '@/containers/SignupContainer';

export const metadata: Metadata = {
  title: 'Wagent - Sign up',
};

const SignUp = () => {
  return <SignupContainer />;
};

export default SignUp;
