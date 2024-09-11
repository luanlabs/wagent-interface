import request from '@/utils/request';

const verifyEmailRequest = async (email: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/verify`, {
    method: 'POST',
    body: email,
  });

  return { data, response };
};

export default verifyEmailRequest;
