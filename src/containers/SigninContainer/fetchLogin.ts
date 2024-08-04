import fetch from '@/utils/request';
import { FormValues, IUserLoginResponseMessage } from '@/constants/types';

const FetchLogin = async (user: FormValues) => {
  const { data } = await fetch<IUserLoginResponseMessage>(
    `${process.env.NEXT_PUBLIC_API}/users/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data;
};

export default FetchLogin;
