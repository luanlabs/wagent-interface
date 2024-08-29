import request from '@/utils/request';
import { AuthCredentials } from '@/constants/types';

const authRequest = async (endpoint: string, credentials: AuthCredentials) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data, response };
};

export default authRequest;
