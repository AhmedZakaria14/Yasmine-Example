import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'الشهادات والاعتمادات',
  description:
    'اطلع على شهادات واعتمادات شركة خدمات الياسمين والتزامها بالمتطلبات النظامية ومعايير الجودة في تقديم خدمات إدارة المرافق.',
  path: '/certifications',
  keywords: ['شهادات شركة خدمات الياسمين', 'اعتمادات شركة إدارة مرافق', 'سجل تجاري'],
});

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
