import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'خدمات إدارة المرافق والتنظيف والصيانة بالرياض',
  description:
    'استعرض خدمات شركة الياسمين في إدارة المرافق والتشغيل والصيانة والتنظيف والضيافة ومكافحة الحشرات وصيانة المكيفات والخدمات الفنية بالرياض.',
  path: '/services',
  keywords: [
    'خدمات إدارة المرافق بالرياض',
    'شركة تنظيف وصيانة بالرياض',
    'تشغيل وصيانة المنشآت',
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
