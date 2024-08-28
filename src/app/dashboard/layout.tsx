'use client';

import useFcmToken from '@/hooks/useFcmToken';
import { AuthProvider } from '@/services/authProvider';
import sendClientFcmToken from '@/services/sendClientFcmToken';
import { useEffect } from 'react';
import Aside from 'src/containers/Aside';
import Header from 'src/containers/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { token } = useFcmToken();

  useEffect(() => {
    if (token) {
      const data = { title: 'test', body: 'A test for notification is showing' };
      sendClientFcmToken({
        fcmToken: token,
        data: data,
      });
    }
  }, [token]);

  return (
    <AuthProvider>
      <div className="px-8 short:px-4 mobile:p-0 pt-[9px] pb-7 w-full h-screen m-auto">
        <Header />
        <section className="desktop:inline-flex basis-full gap-4 w-full desktop:h-[90%] mobile:h-full mobile:!overflow-auto">
          <Aside />
          <article className="basis-full h-full mobile:h-[calc(100vh-128px)] mobile:my-16">
            <div className="h-full">{children}</div>
          </article>
        </section>
      </div>
    </AuthProvider>
  );
}
