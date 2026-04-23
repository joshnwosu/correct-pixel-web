import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Ultra,
  Space_Grotesk,
  Playwrite_US_Trad,
  Alegreya,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StructuredData from '@/components/structured-data';
import UpdateAvailable from '@/components/update-available';
import { getAppVersion } from '@/lib/app-version';
import { absoluteUrl, siteConfig } from '@/lib/seo';

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

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: 'Correct Pixel | Brand, Product UI, and Website Studio',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Design and web development',
  classification: 'Brand identity, UI/UX design, website development',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Correct Pixel | Brand, Product UI, and Website Studio',
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Correct Pixel studio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Correct Pixel | Brand, Product UI, and Website Studio',
    description: siteConfig.description,
    images: [absoluteUrl('/twitter-image')],
    creator: '@correctpixel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentVersion = getAppVersion();

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ultra.variable} ${spaceGrotesk.variable} ${playwrite.variable} ${alegreya.variable} antialiased`}
      >
        <StructuredData />
        <UpdateAvailable currentVersion={currentVersion} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
