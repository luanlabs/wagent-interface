import { redirect } from 'next/navigation';

import request from '@/utils/request';
import { Pages } from '@/constants/pages';

export default async function Verify({ params }: { params: { token: string } }) {
  await request(`${process.env.NEXT_PUBLIC_API}/users/auth/verify`, {
    method: 'PUT',
    body: { token: params.token },
  });
  redirect(Pages.SIGNIN);
}
