import fetch from '@/utils/request';
import { FormValues, IUserAuthResponseMessage } from '@/constants/types';

const FetchAuth = async (user: FormValues) => {
  const { data } = await fetch<IUserAuthResponseMessage>(
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

export default FetchAuth;
