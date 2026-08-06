import type { Metadata, Viewport } from 'next';
import { Inter, Alexandria } from 'next/font/google';
import './globals.css';
import '@/lib/monkey-patch-stringify';
import { ClientErrorBoundary } from '@/components/ClientErrorBoundary';
import { LanguageProvider } from '@/components/LanguageProvider';
import { AnimatedLinesBackground } from '@/components/AnimatedLinesBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria',
  display: 'swap',
});

const siteUrl = 'https://alyasmin-services.com';
const logoUrl =
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'شركة خدمات الياسمين | إدارة المرافق والتنظيف بالرياض',
    template: '%s | شركة خدمات الياسمين',
  },
  description:
    'شركة خدمات الياسمين بالرياض تقدم إدارة المرافق والتشغيل والصيانة والتنظيف والضيافة ومكافحة الحشرات وصيانة المكيفات بخدمات احترافية متكاملة.',
  keywords: [
    'شركة خدمات الياسمين',
    'إدارة المرافق بالرياض',
    'شركة تنظيف بالرياض',
    'تشغيل وصيانة المباني',
    'خدمات الضيافة',
    'مكافحة الحشرات بالرياض',
    'صيانة المكيفات بالرياض',
    'تنظيف خزانات المياه',
    'Facility Management Riyadh',
    'Cleaning Services Riyadh',
    'Building Maintenance Saudi Arabia',
  ],
  authors: [
    { name: 'شركة خدمات الياسمين', url: siteUrl },
    { name: 'Al-Yasmin Services Co.', url: siteUrl },
  ],
  creator: 'شركة خدمات الياسمين',
  publisher: 'AL-YASMIN SERVICES CO.',
  category: 'Facility Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: '/',
    title: 'شركة خدمات الياسمين | إدارة المرافق والتنظيف بالرياض',
    description:
      'حلول متكاملة لإدارة المرافق والتشغيل والصيانة والتنظيف والضيافة في الرياض والمملكة العربية السعودية.',
    siteName: 'شركة خدمات الياسمين',
    images: [
      {
        url: logoUrl,
        width: 800,
        height: 800,
        alt: 'شعار شركة خدمات الياسمين',
      },
    ],
    locale: 'ar_SA',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة خدمات الياسمين | إدارة المرافق والتنظيف بالرياض',
    description:
      'حلول متكاملة لإدارة المرافق والتشغيل والصيانة والتنظيف والضيافة في الرياض.',
    images: [logoUrl],
  },
  icons: {
    icon: logoUrl,
    apple: logoUrl,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteUrl}/#organization`,
    name: 'شركة خدمات الياسمين',
    alternateName: 'Al-Yasmin Services Co.',
    image: logoUrl,
    logo: logoUrl,
    url: siteUrl,
    telephone: '+966533273366',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: ['https://www.instagram.com/alyasmin922/'],
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className="overflow-x-hidden w-full max-w-[100vw]"
    >
      <body
        className={`${inter.variable} ${alexandria.variable} bg-slate-50 text-slate-900 antialiased overflow-x-hidden w-full max-w-[100vw]`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ClientErrorBoundary>
          <LanguageProvider>
            <AnimatedLinesBackground />
            <Navbar />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
            <FloatingActions />
          </LanguageProvider>
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
