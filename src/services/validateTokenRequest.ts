import request from '@/utils/request';
import { API_URL } from '@/config/env';

const validateTokenRequest = async (token: string) => {
  const { data, response } = await request(`${API_URL}/users/auth/verify`, {
    method: 'POST',
    body: token,
  });

  return { data, response };
};

export default validateTokenRequest;
