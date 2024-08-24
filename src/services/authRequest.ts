import request from '@/utils/request';
import { AuthCredentials } from '@/constants/types';

const authRequest = async <T>(endpoint: string, credentials: AuthCredentials): Promise<T> => {
  const { data } = await request<T>(`${process.env.NEXT_PUBLIC_API}/users/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export default authRequest;
