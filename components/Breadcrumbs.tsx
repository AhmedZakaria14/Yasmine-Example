'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export function Breadcrumbs({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const { t, dir } = useLanguage();

  if (pathname === '/') return null;

  const pathnames = pathname.split('/').filter((x) => x);

  const getTranslationKey = (path: string) => {
    switch (path) {
      case 'about': return 'nav.about';
      case 'services': return 'nav.services';
      case 'certifications': return 'nav.certifications';
      case 'clients': return 'nav.clients';
      case 'contact': return 'nav.contact';
      case 'privacy': return 'footer.privacy';
      case 'terms': return 'footer.terms';
      case 'cookies': return 'footer.cookies';
      default: return null;
    }
  };

  return (
    <nav className={`flex items-center text-sm text-slate-300 mb-6 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-white transition-colors">
            <Home className="w-4 h-4 mr-1.5 rtl:ml-1.5 rtl:mr-0" />
            {t('nav.home')}
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const tKey = getTranslationKey(value);
          const name = tKey ? (tKey as any).includes('.') ? t(tKey as any) : value : value;

          return (
            <li key={href}>
              <div className="flex items-center">
                {dir === 'rtl' ? <ChevronLeft className="w-4 h-4 mx-1" /> : <ChevronRight className="w-4 h-4 mx-1" />}
                {isLast ? (
                  <span className="text-white font-medium ml-1 md:ml-2 rtl:ml-0 rtl:mr-1 md:rtl:mr-2">
                    {name}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-white transition-colors ml-1 md:ml-2 rtl:ml-0 rtl:mr-1 md:rtl:mr-2">
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
