'use client';

import useFcmToken from '@/hooks/useFcmToken';
import sendClientFcmToken from '@/services/sendClientFcmToken';
import { useEffect } from 'react';
import Aside from 'src/containers/Aside';
import Header from 'src/containers/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { token } = useFcmToken();

  useEffect(() => {
    if (token) {
      sendClientFcmToken({
        token: token,
      });
    }
  }, [token]);

  return (
    <div className="xl:px-8 xxl:px-8 px-4 mobile:p-0 pt-[9px] desktop:pb-7 bigScreen:pb-0 w-full h-screen m-auto">
      <Header />
      <section className="desktop:inline-flex basis-full gap-3 w-full desktop:h-[90%] mobile:h-full mobile:!overflow-auto">
        <Aside />
        <article className="basis-full h-full mobile:h-[calc(100vh-128px)] mobile:my-16">
          <div className="h-full">{children}</div>
        </article>
      </section>
    </div>
  );
}
