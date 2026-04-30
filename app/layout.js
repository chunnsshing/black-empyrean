import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import FooterWrapper from '@/components/FooterWrapper';
import MotionLayer from '@/components/MotionLayer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'The Empyrean — AI-first Solutions for Southeast Asia',
  description:
    'Senior practitioners and emerging talent, deploying AI agents and enterprise systems that are fast, affordable, and built to last — across Southeast Asia.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://theempyrean.org'),
  openGraph: {
    title: 'The Empyrean — AI-first Solutions for Southeast Asia',
    description:
      'Senior practitioners and emerging talent, deploying AI agents and enterprise systems that are fast, affordable, and built to last — across Southeast Asia.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Empyrean',
    description: 'AI-first Solutions for Southeast Asia',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <MotionLayer />
        <Nav />
        <main className="fade-up">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
