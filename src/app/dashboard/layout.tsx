'use client';

import Aside from 'src/containers/Aside';
import Header from 'src/containers/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 mobile:p-0 pt-[9px] pb-7 w-full h-screen m-auto">
      <Header />
      <section className="desktop:inline-flex basis-full gap-4 w-full desktop:h-[90%] mobile:h-full mobile:!overflow-auto">
        <Aside />
        <article className="basis-full h-full mobile:h-[calc(100vh-128px)] mobile:my-16">
          <div className="h-full">{children}</div>
        </article>
      </section>
    </div>
  );
}
