import request from '@/utils/request';

const ResetPasswordRequest = async (newPassword: string) => {
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/password`, {
    method: 'POST',
    body: JSON.stringify(newPassword),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data, response };
};

export default ResetPasswordRequest;
