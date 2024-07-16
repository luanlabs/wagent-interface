'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import myFont from 'src/utils/localFont';

import Metadata from '@/constants/metadata';

import 'src/styles/globals.css';
import { store } from 'src/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/favicon.ico" />
        <Metadata />
      </head>

      <body className={`overflow-hidden mobile:bg-white desktop:bg-alabaster`}>
        <Provider store={store}>
          <main className="relative mobile:overflow-hidden">
            {children}
            <Toaster position="bottom-center" />
          </main>
        </Provider>
      </body>
    </html>
  );
}
