import request from '@/utils/request';
import { API_URL } from '@/config/env';
import { AuthCredentials } from '@/constants/types';

const authRequest = async (endpoint: string, credentials: AuthCredentials) => {
  const { data, response } = await request(`${API_URL}/users/${endpoint}`, {
    method: 'POST',
    body: credentials,
  });

  return { data, response };
};

export default authRequest;
