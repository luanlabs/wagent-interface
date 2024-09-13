import { redirect } from 'next/navigation';
import { Pages } from '@/constants/pages';

export default function Page() {
  redirect(Pages.DASHBOARD);
}
