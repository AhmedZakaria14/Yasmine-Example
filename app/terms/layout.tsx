import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'الشروط والأحكام',
  description:
    'الشروط والأحكام المنظمة لاستخدام موقع شركة خدمات الياسمين والمعلومات والخدمات المعروضة من خلاله.',
  path: '/terms',
  keywords: ['الشروط والأحكام', 'شركة خدمات الياسمين'],
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
