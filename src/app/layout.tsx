import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/Header';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} antialiased flex flex-col relative font-pretendard`}>
        <QueryProvider>
          <Header />
          <main className='px-[20px]'>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
