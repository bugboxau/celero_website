import './globals.css';

export const metadata = {
  title: 'Celero Software — Coming Soon',
  description:
    'Celero Software is building an AI agent that accelerates software implementation projects.',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon-180.png',
  },
  openGraph: {
    title: 'Celero Software',
    description:
      'Celero Software is building an AI agent that accelerates software implementation projects.',
    url: 'https://celerosoftware.ai',
    type: 'website',
  },
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
