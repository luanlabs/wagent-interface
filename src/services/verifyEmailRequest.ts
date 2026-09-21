import request from '@/utils/request';
import { API_URL } from '@/config/env';

const verifyEmailRequest = async (email: string) => {
  const { data, response } = await request(`${API_URL}/users/auth/verify`, {
    method: 'POST',
    body: email,
  });

  return { data, response };
};

export default verifyEmailRequest;
