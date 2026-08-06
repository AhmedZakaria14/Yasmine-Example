import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'من نحن',
  description:
    'تعرف على شركة خدمات الياسمين وخبرتها في إدارة المرافق والتشغيل والصيانة والتنظيف والضيافة وخدمة المنشآت في الرياض.',
  path: '/about',
  keywords: ['شركة خدمات الياسمين', 'شركة إدارة مرافق بالرياض', 'من نحن'],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
