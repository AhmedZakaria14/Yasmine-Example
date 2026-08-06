import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'سياسة ملفات تعريف الارتباط',
  description:
    'سياسة ملفات تعريف الارتباط المستخدمة في موقع شركة خدمات الياسمين وشرح أغراض استخدامها.',
  path: '/cookies',
  keywords: ['سياسة ملفات تعريف الارتباط', 'شركة خدمات الياسمين'],
});

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
