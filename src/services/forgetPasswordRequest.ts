import request from '@/utils/request';
import { API_URL } from '@/config/env';

const forgetPasswordRequest = async (email: string) => {
  const { data, response } = await request(`${API_URL}/users/auth/reset`, {
    method: 'POST',
    body: email,
  });

  return { data, response };
};

export default forgetPasswordRequest;
