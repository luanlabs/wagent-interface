import request from '@/utils/request';

const forgotPasswordRequest = async <T>(email: string): Promise<T> => {
  const { data } = await request<T>(`${process.env.NEXT_PUBLIC_API}/users/auth/reset`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export default forgotPasswordRequest;
