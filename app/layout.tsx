import { Inter } from 'next/font/google';
import './styles/globals.css';
import Script from 'next/script';
import { Providers } from '@providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <Providers>
        <body>{children}</body>
      </Providers>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J1BDJQJW25"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J1BDJQJW25');
        `}
      </Script>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('https://regexyl.com'),
  title: {
    template: '%s | Regina Liu',
    default: 'Regina Liu',
  },
  description: "A front end engineer's nook on the internet.",
  keywords:
    'regina liu, javascript, typescript, react, front end engineer, web performance, dev tooling',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  openGraph: {
    title: 'Regina Liu',
    description: 'Front end engineer',
    url: 'https://regexyl.com',
    siteName: "Regina Liu's website",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://regexyl.com/api/og?title=${encodeURIComponent(
          "Regina Liu's site"
        )}`,
        width: 1200,
        height: 630,
        alt: "Regina Liu's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'Regina Liu',
    card: 'summary_large_image',
    creator: '@regexyl',
  },
  icons: {
    shortcut: 'https://regexyl.com/favicons/favicon.ico',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://regexyl.com/feed.xml',
    },
  },
};
