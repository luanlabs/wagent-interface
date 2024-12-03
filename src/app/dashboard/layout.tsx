'use client';

import { useEffect } from 'react';

import CError from '@/components/CError';
import Aside from 'src/containers/Aside';
import Header from 'src/containers/Header';
import CLoading from '@/components/CLoading';
import useFcmToken from '@/hooks/useFcmToken';
import {
  useGetTransactionsQuery,
  useGetUserQuery,
  useSendFcmTokenMutation,
} from '@/services/userApi';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sendFcmToken, { isLoading, isError, error }] = useSendFcmTokenMutation();
  const { token } = useFcmToken();

  const { isLoading: userLoading, error: userError } = useGetUserQuery(undefined, {
    pollingInterval: 3000,
  });
  const { isLoading: txLoading, error: txError } = useGetTransactionsQuery();

  useEffect(() => {
    try {
      const response = sendFcmToken(token).unwrap();
      console.log('FCM Token sent:', response);
    } catch (err) {
      console.error('Error sending FCM token:', err);
    }
  }, [sendFcmToken, token]);

  if (userError || txError) {
    return <CError error={userError ? userError : txError} />;
  }

  if (userLoading || txLoading) {
    return <CLoading />;
  }

  return (
    <div className="xl:px-8 xxl:px-8 px-4 short:px-3 mobile:p-0 pt-[9px] desktop:pb-5 bigScreen:pb-0 w-full h-screen m-auto">
      <Header />

      <section className="desktop:inline-flex basis-full gap-3 w-full desktop:h-[90%] short:h-[89%] mobile:h-full mobile:!overflow-auto">
        <Aside />

        <article className="basis-full h-full mobile:h-[calc(100vh-128px)] mobile:my-16">
          <div className="h-full">{children}</div>
        </article>
      </section>
    </div>
  );
}
