import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'سياسة الخصوصية',
  description:
    'سياسة الخصوصية الخاصة بموقع شركة خدمات الياسمين وكيفية التعامل مع بيانات التواصل والاستخدام.',
  path: '/privacy',
  keywords: ['سياسة الخصوصية', 'شركة خدمات الياسمين'],
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
