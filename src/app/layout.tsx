'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

import Pages from '@/constants/pages';
import myFont from 'src/utils/localFont';
import Aside from 'src/containers/Aside';
import Header from 'src/containers/Header';

import 'src/styles/globals.css';
import { store } from 'src/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const currentPath = usePathname();

  return (
    <html lang="en" className={myFont.className}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="keywords"
          content="Wagent, Stellar, Payment gateway, cryptocurrency, blockchain, finance, digital payments, smart contracts"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, initial-scale=1, minimum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Wagent: Your Advanced Payment Gateway Solution for Stellar and Futurenet. Simplify your online transactions with our powerful features tailored for both merchants and buyers."
        />
        <meta name="copyright" content="Wagent" />
        <meta name="topic" content="Payment gateway" />
        <meta
          name="summary"
          content="Wagent: Your Advanced Payment Gateway Solution for Stellar and Futurenet. Simplify your online transactions with our powerful features tailored for both merchants and buyers."
        />
        <meta name="Classification" content="Business" />
        <meta name="author" content="Wagent Team, Wagent.app" />
        <meta name="designer" content="Wagent Design Team" />
        <meta name="reply-to" content="support@Wagent.app" />
        <meta name="owner" content="Wagent" />
        <meta name="url" content="http://Wagent.app" />
        <meta name="identifier-URL" content="http://Wagent.app" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Finance, Cryptocurrency, Blockchain, Payment gateway" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
      </head>

      <body className={`overflow-hidden mobile:bg-white desktop:bg-alabaster`}>
        <Provider store={store}>
          <main
            className={`${currentPath === Pages.SIGNUP ? '!p-0 m-0' : ''}
              relative mobile:overflow-hidden px-8 mobile:p-0 pt-[9px] pb-7 w-full h-screen m-auto`}
          >
            <Header className={`${currentPath === Pages.SIGNUP ? 'hidden' : 'block'}`} />
            <section className="desktop:inline-flex basis-full gap-4 w-full desktop:h-[90%] mobile:h-full mobile:!overflow-auto">
              <Aside
                isMinimized={isMinimized}
                onMinimized={() => setIsMinimized(!isMinimized)}
                className={currentPath === Pages.SIGNUP ? 'hidden' : 'block !z-30'}
              />
              <article className="basis-full h-full mobile:h-[calc(100vh-128px)] mobile:my-16">
                <div className="h-full">{children}</div>
              </article>
            </section>
            <Toaster position="bottom-center" />
          </main>
        </Provider>
      </body>
    </html>
  );
}
