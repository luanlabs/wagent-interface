'use client';

import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';

import Metadata from '@/constants/metadata';

import 'src/styles/globals.css';
import { store } from 'src/store';

import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en" className={inter.className}>
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/images/favicon.ico" />
          <meta name="manifest" content="/manifest.json" />
          <Metadata />
        </head>

        <body className="overflow-hidden mobile:bg-white desktop:bg-alabaster">
          <Suspense fallback={<Loading />}>
            <main className="relative mobile:overflow-hidden h-full w-full">
              {children}
              <Toaster position="bottom-center" />
            </main>
          </Suspense>
        </body>
      </html>
    </Provider>
  );
}
