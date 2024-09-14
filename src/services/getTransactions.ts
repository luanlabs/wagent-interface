import Cookies from 'js-cookie';

import request from '@/utils/request';

const getTransactions = async () => {
  const token = Cookies.get('token');

  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { data, response };
};

export default getTransactions;
