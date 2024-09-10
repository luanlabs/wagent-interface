import request from '@/utils/request';

const ResetPasswordRequest = async (token: string, newPassword: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/reset`, {
    method: 'PUT',
    body: JSON.stringify({ token: token, password: newPassword }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data, response };
};

export default ResetPasswordRequest;
