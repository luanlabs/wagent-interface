import Cookies from 'js-cookie';

import request from '@/utils/request';

type requestProps = {
  token: string;
  // data: {
  //   title: string;
  //   body: string;
  // };
};

const sendClientFcmToken = async ({ token }: requestProps) => {
  const JWT_token = Cookies.get('token');

  await request(`${process.env.NEXT_PUBLIC_API}/users/notification`, {
    headers: {
      Authorization: `Bearer ${JWT_token}`,
    },
    method: 'POST',
    body: token,
  });
};

export default sendClientFcmToken;
