import Cookies from 'js-cookie';

import request from '@/utils/request';

type requestProps = {
  token: string;
};

const sendClientFcmToken = async ({ token }: requestProps) => {
  const JWT_token = Cookies.get('token');

  await request(`${process.env.NEXT_PUBLIC_API}/users/notification`, {
    headers: {
      Authorization: `Bearer ${JWT_token}`,
    },
    method: 'POST',
    body: { token: token },
  });
};

export default sendClientFcmToken;
