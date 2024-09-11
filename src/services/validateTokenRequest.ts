import request from '@/utils/request';

const validateTokenRequest = async (token: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/verify`, {
    method: 'POST',
    body: token,
  });

  return { data, response };
};

export default validateTokenRequest;
