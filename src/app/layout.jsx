import '@/styles/globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import JsonLd from '@/components/JsonLd';

const SITE_URL = 'https://carbonless.network';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Carbonless Network | Carbon & Sustainability Intelligence Platform',
    template: '%s | Carbonless Network',
  },
  description:
    'Measure, track, and reduce your carbon emissions with enterprise-grade sustainability infrastructure aligned with ISO 14064-1 and the GHG Protocol. Carbon accounting and ESG assessment platforms.',
  keywords: [
    'carbon accounting',
    'sustainability platform',
    'ESG assessment',
    'ISO 14064-1',
    'GHG Protocol',
    'carbon footprint',
    'greenhouse gas emissions',
    'carbon management',
    'sustainability reporting',
    'Scope 1 Scope 2 Scope 3',
  ],
  authors: [{ name: 'Carbonless Network', url: SITE_URL }],
  creator: 'Carbonless Network',
  publisher: 'Carbonless Network',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: SITE_URL,
    siteName: 'Carbonless Network',
    title: 'Carbonless Network | Carbon & Sustainability Intelligence Platform',
    description:
      'Measure, track, and reduce your carbon emissions with enterprise-grade sustainability infrastructure aligned with ISO 14064-1 and the GHG Protocol.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Carbonless Network — Carbon & Sustainability Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carbonless Network | Carbon & Sustainability Intelligence Platform',
    description:
      'Measure, track, and reduce your carbon emissions with ISO 14064-1 and GHG Protocol aligned platforms.',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* Google Search Console verification — replace content value after getting it from GSC */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      </head>
      <body>
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
