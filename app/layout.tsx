import type { Metadata } from 'next';
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
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alyasmin-services.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'شركة خدمات الياسمين | AL-YASMIN SERVICES CO.',
    template: '%s | شركة خدمات الياسمين',
  },
  description: 'شركة خدمات الياسمين: حلول متكاملة في إدارة المرافق، خدمات التنظيف، والضيافة للشركات. Al-Yasmin: Facility management, cleaning & hospitality services.',
  keywords: [
    'إدارة مرافق',
    'خدمات تنظيف',
    'خدمات ضيافة',
    'شركة تنظيف بالسعودية',
    'نظافة عامة',
    'صيانة المباني',
    'تشغيل وصيانة',
    'Facility Management',
    'Cleaning Services',
    'Hospitality Services',
    'Saudi Arabia Cleaning Company',
    'Building Maintenance',
    'Al-Yasmin Services'
  ],
  authors: [{ name: 'شركة خدمات الياسمين' }, { name: 'Al-Yasmin Services Co.' }],
  creator: 'شركة خدمات الياسمين',
  publisher: 'AL-YASMIN SERVICES CO.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'شركة خدمات الياسمين | AL-YASMIN SERVICES CO.',
    description: 'حلول متكاملة ومتميزة في إدارة المرافق، خدمات التنظيف الاحترافية، والضيافة في المملكة العربية السعودية. Integrated facility management and cleaning solutions.',
    siteName: 'شركة خدمات الياسمين',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png',
        width: 800,
        height: 800,
        alt: 'Al-Yasmin Services Co. Logo',
      },
    ],
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة خدمات الياسمين | AL-YASMIN SERVICES CO.',
    description: 'حلول متكاملة في إدارة المرافق، النظافة، والضيافة للشركات. Integrated facility management and cleaning solutions.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png',
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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "شركة خدمات الياسمين | Al-Yasmin Services Co.",
    "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png",
    "@id": "https://alyasmin-services.com",
    "url": "https://alyasmin-services.com",
    "telephone": "+966533273366",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/alyasmin922/"
    ]
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${alexandria.variable} bg-slate-50 text-slate-900 antialiased overflow-x-hidden`} suppressHydrationWarning>
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
