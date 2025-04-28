import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/Header';
import UserInit from '@/components/UserInit';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '마이폴라',
  description: '마이폴라와 함께 탄소 절감을 즐겁게 시작해보세요!',
  icons: {
    icon: '/assets/icons/pola-head.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-full'
    >
      <body className={`${pretendard.variable} antialiased flex flex-col relative min-h-screen font-pretendard`}>
        <QueryProvider>
          <UserInit />
          <Header />
          <main className='flex-1 px-[20px] desktop:px-0 flex flex-col h-full pt-[81px] desktop:pt-[168px] desktop:mt-0'>
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
