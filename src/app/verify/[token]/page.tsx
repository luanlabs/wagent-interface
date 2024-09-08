import request from '@/utils/request';
import { Pages } from '@/constants/pages';
import { useRouter } from 'next/navigation';

export default async function Verify({ params }: { params: { token: string } }) {
  const router = useRouter();
  const { data, response } = await request(`${process.env.NEXT_PUBLIC_API}/users/auth/verify`, {
    method: 'PUT',
    body: JSON.stringify({ token: params.token }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status == 200) {
    router.push(Pages.SIGNIN);
  } else {
    console.log(data.message);
  }
}
