import request from '@/utils/request';

const resetPasswordRequest = async (token: string, newPassword: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/reset`, {
    method: 'PUT',
    body: { token: token, password: newPassword },
  });

  return { data, response };
};

export default resetPasswordRequest;
