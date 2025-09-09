import type { Metadata } from 'next';
import { Geist, Geist_Mono, Ultra, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ultra = Ultra({
  weight: '400',
  variable: '--font-ultra',
  subsets: ['latin'],
});

// Add Josefin Sans initialization
const josefinSans = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Correct Pixel',
  description: 'Digital design and development studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ultra.variable} ${josefinSans.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
