import type { Metadata } from 'next';
import { Inter, Alexandria } from 'next/font/google';
import './globals.css';
import '@/lib/monkey-patch-stringify';
import { ClientErrorBoundary } from '@/components/ClientErrorBoundary';
import { LanguageProvider } from '@/components/LanguageProvider';
import { AnimatedLinesBackground } from '@/components/AnimatedLinesBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria',
});

export const metadata: Metadata = {
  title: 'شركة الياسمين للخدمات',
  description: 'خدمات إدارة مرافق وتنظيف وضيافة متميزة.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${alexandria.variable} bg-slate-50 text-slate-900 antialiased`} suppressHydrationWarning>
        <ClientErrorBoundary>
          <LanguageProvider>
            <AnimatedLinesBackground />
            <Navbar />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </LanguageProvider>
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
