import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from './lib/utls';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mimosa | Home',
  description: 'Beauty and spa website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-white text-black antialiased')}>
        <Header />
        {children}
        <footer />
      </body>
    </html>
  );
}
