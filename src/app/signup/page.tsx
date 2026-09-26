import { redirect } from 'next/navigation';

import { Pages } from '@/constants/pages';

const SignUp = () => {
  redirect(Pages.SIGNIN);
};

export default SignUp;
