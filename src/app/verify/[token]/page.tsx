import { redirect } from 'next/navigation';

import request from '@/utils/request';
import { API_URL } from '@/config/env';
import { Pages } from '@/constants/pages';

export default async function Verify({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  await request(`${API_URL}/users/auth/verify`, {
    method: 'PUT',
    body: { token },
  });
  redirect(Pages.SIGNIN);
}
