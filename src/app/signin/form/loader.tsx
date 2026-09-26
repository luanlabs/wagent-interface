'use client';

import dynamic from 'next/dynamic';

const SignInForm = dynamic(() => import('./index'), { ssr: false });

const SignInFormLoader = () => {
  return <SignInForm />;
};

export default SignInFormLoader;
