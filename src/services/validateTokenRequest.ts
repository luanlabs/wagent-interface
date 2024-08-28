import request from '@/utils/request';

const validateTokenRequest = async <T>(token: string): Promise<T> => {
  const { data } = await request<T>(`${process.env.NEXT_PUBLIC_API}/users/auth/verify`, {
    method: 'POST',
    body: JSON.stringify(token),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export default validateTokenRequest;
