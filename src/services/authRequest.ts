import request from '@/utils/request';
import { API_URL } from '@/config/env';

const authRequest = async (bluxToken: string) => {
  const { data, response } = await request(`${API_URL}/users/auth`, {
    method: 'POST',
    body: { bluxToken },
  });

  return { data, response };
};

export default authRequest;
