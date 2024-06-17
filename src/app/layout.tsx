'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

import myFont from 'src/utils/localFont';
import Aside from 'src/containers/Aside';
import CCard from 'src/components/CCard';
import Header from 'src/containers/Header';

import 'src/styles/globals.css';
import { store } from 'src/store';
import { Pages } from '@/constants/pages';

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
            <CCard
              className={`!w-full mobile:fixed mobile:top-0 mobile:right-0 mobile:left-0 
                  desktop:mb-[10px] mobile:rounded-none mobile:border-t-0 z-[999] block
                  ${currentPath === Pages.SIGNUP ? 'hidden' : 'block'}
                  `}
              borderColor="rgba(5, 1, 66, 0.10)"
              bgColor="white"
            >
              <Header />
            </CCard>
            <section className="desktop:inline-flex basis-full gap-4 w-full desktop:h-[90%] mobile:h-[100dvh] mobile:!overflow-auto">
              <CCard
                className={`desktop:relative mobile:fixed mobile:bottom-0 
                    mobile:h-16 mobile:right-0 mobile:left-0 overflow-hidden 
                    mobile:rounded-none mobile:border-b-0 z-[999]  ${
                      isMinimized
                        ? 'basis-[80px] transition-all duration-500'
                        : 'basis-[24%] lg:basis-[20%] transition-all duration-500'
                    }
                    ${currentPath === Pages.SIGNUP ? 'hidden' : 'block'}
                    px-[15px] py-[19px] mobile:p-0`}
                borderColor="rgba(5, 1, 66, 0.10)"
                bgColor="white"
              >
                <Aside isMinimized={isMinimized} onMinimized={() => setIsMinimized(!isMinimized)} />
              </CCard>
              <article className="basis-full mobile:mt-[60px]">
                {children}
                <div className="mobile:h-16 mobile:w-full !bg-white"></div>
              </article>
            </section>
            <Toaster position="bottom-center" />
          </main>
        </Provider>
      </body>
    </html>
  );
}
