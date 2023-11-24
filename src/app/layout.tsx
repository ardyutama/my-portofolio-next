import localFont from 'next/font/local';
import Header from '@/ui/header';
import Footer from '@/ui/footer';
import PageTransition from './template';
import './globals.css';

const MonaSans = localFont({
  src: [
    {
      path: './features/ui/font/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './features/ui/font/MonaSans-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './features/ui/font/MonaSans-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './features/ui/font/MonaSansExpanded-Bold.woff2',
      weight: '600',
      style: 'expand-bold',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${MonaSans.className}`}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
