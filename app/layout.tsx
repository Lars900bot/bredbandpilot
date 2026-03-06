import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BredbåndPilot – Sammenlign bredbånd og internet i Danmark',
  description:
    'Sammenlign bredbånd og find den hurtigste og billigste internetforbindelse i Danmark. Fiber, kabel og mobilt bredbånd fra alle store udbydere.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
