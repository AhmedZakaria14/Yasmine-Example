import type { Metadata } from 'next';
import { createPageMetadata, serviceSeo } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceSeo).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = serviceSeo[id];

  if (!service) {
    return {
      title: 'الخدمة غير موجودة',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${id}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
