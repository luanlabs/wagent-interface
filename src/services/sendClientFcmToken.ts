import Cookies from 'js-cookie';

import request from '@/utils/request';
import { API_URL } from '@/config/env';

type requestProps = {
  token: string;
};

const sendClientFcmToken = async ({ token }: requestProps) => {
  const JWT_token = Cookies.get('token');

  await request(`${API_URL}/users/notification`, {
    headers: {
      Authorization: `Bearer ${JWT_token}`,
    },
    method: 'POST',
    body: { token: token },
  });
};

export default sendClientFcmToken;
