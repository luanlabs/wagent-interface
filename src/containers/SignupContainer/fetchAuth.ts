import fetch from '@/utils/request';
import { IUserAuthResponseMessage } from '@/constants/types';
import { FormValues } from '@/containers/SignupContainer/form';

const FetchAuth = async (user: FormValues) => {
  const { data } = await fetch<IUserAuthResponseMessage>(
    `${process.env.NEXT_PUBLIC_API}/users/auth`,
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
