import request from '@/utils/request';

const forgetPasswordRequest = async (email: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/reset`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data, response };
};

export default forgetPasswordRequest;
