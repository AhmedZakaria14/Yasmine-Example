import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'عملاؤنا وشركاء النجاح',
  description:
    'تعرف على الجهات والعملاء الذين وثقوا بخدمات شركة الياسمين في إدارة المرافق والتشغيل والصيانة والتنظيف والضيافة.',
  path: '/clients',
  keywords: ['عملاء شركة خدمات الياسمين', 'شركات إدارة مرافق', 'شركاء النجاح'],
});

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
