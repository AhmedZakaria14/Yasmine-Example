import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'تواصل معنا واطلب عرض سعر',
  description:
    'تواصل مع شركة خدمات الياسمين في الرياض لطلب عرض سعر لخدمات إدارة المرافق والتنظيف والتشغيل والصيانة والضيافة والخدمات الفنية.',
  path: '/contact',
  keywords: ['رقم شركة خدمات الياسمين', 'طلب عرض سعر تنظيف وصيانة', 'شركة خدمات بالرياض'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
