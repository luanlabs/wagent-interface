import request from '@/utils/request';
import { API_URL } from '@/config/env';

const resetPasswordRequest = async (token: string, newPassword: string) => {
  const { data, response } = await request(`${API_URL}/users/auth/reset`, {
    method: 'PUT',
    body: { token: token, password: newPassword },
  });

  return { data, response };
};

export default resetPasswordRequest;
