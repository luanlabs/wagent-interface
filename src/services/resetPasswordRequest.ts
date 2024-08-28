import request from '@/utils/request';

const ResetPasswordRequest = async <T>(newPassword: string): Promise<T> => {
  const { data } = await request<T>(`${process.env.NEXT_PUBLIC_API}/users/auth/password`, {
    method: 'POST',
    body: JSON.stringify(newPassword),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export default ResetPasswordRequest;
