import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Ultra,
  Josefin_Sans,
  Playwrite_US_Trad,
  Alegreya,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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

const josefinSans = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin',
  subsets: ['latin'],
});

const playwrite = Playwrite_US_Trad({
  weight: '400',
  variable: '--font-playwrite',
});

// Add Alegreya font initialization
const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-alegreya',
  subsets: ['latin'],
  style: ['normal', 'italic'], // Optional: include italic styles
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
        className={`${geistSans.variable} ${geistMono.variable} ${ultra.variable} ${josefinSans.variable} ${playwrite.variable} ${alegreya.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
