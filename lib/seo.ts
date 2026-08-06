import type { Metadata } from 'next';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png';

export type ServiceSeoEntry = {
  title: string;
  description: string;
  keywords: string[];
};

export const serviceSeo: Record<string, ServiceSeoEntry> = {
  maintenance: {
    title: 'التشغيل والصيانة وإدارة المرافق',
    description:
      'خدمات تشغيل وصيانة وقائية وتصحيحية للمباني والمنشآت في الرياض، مع إدارة متكاملة للمرافق ورفع كفاءة التشغيل.',
    keywords: ['تشغيل وصيانة', 'صيانة المباني بالرياض', 'إدارة المرافق'],
  },
  cleaning: {
    title: 'خدمات التنظيف الاحترافية بالرياض',
    description:
      'خدمات تنظيف احترافية للمكاتب والمنشآت والمجمعات في الرياض باستخدام فرق مدربة وتجهيزات مناسبة لمختلف المواقع.',
    keywords: ['شركة تنظيف بالرياض', 'تنظيف مكاتب', 'خدمات نظافة عامة'],
  },
  hospitality: {
    title: 'خدمات الضيافة للشركات والمنشآت',
    description:
      'توفير عمالة ضيافة مدربة وخدمات تقديم وتجهيز للجهات والشركات والفعاليات وفق معايير مهنية عالية.',
    keywords: ['خدمات ضيافة', 'عمال ضيافة بالرياض', 'ضيافة الشركات'],
  },
  pest: {
    title: 'مكافحة الحشرات والقوارض بالرياض',
    description:
      'خدمات مكافحة الحشرات والقوارض للمنازل والمنشآت في الرياض ببرامج معالجة ومتابعة دورية ومواد مناسبة.',
    keywords: ['مكافحة حشرات بالرياض', 'مكافحة القوارض', 'رش مبيدات'],
  },
  landscaping: {
    title: 'تنسيق وصيانة الحدائق والمساحات الخضراء',
    description:
      'تصميم وتنسيق وصيانة الحدائق وشبكات الري والمساحات الخضراء للمنشآت والمجمعات في الرياض.',
    keywords: ['تنسيق حدائق بالرياض', 'صيانة حدائق', 'شبكات الري'],
  },
  facilities_management: {
    title: 'إدارة المرافق المتكاملة بالرياض',
    description:
      'حلول شاملة لإدارة المرافق تشمل التشغيل والصيانة والطاقة والسلامة والنظافة ورفع كفاءة الأصول والمنشآت.',
    keywords: ['إدارة مرافق بالرياض', 'إدارة المنشآت', 'Facility Management Riyadh'],
  },
  security_cameras: {
    title: 'تركيب وصيانة كاميرات المراقبة',
    description:
      'تركيب وصيانة أنظمة كاميرات المراقبة وحلول التسجيل والمتابعة عن بعد للمنازل والمنشآت التجارية.',
    keywords: ['كاميرات مراقبة بالرياض', 'تركيب كاميرات', 'صيانة كاميرات مراقبة'],
  },
  water_tanks: {
    title: 'تنظيف وتعقيم خزانات المياه بالرياض',
    description:
      'تنظيف وتعقيم خزانات المياه وإزالة الرواسب بمواد مناسبة وخطوات مهنية للحفاظ على جودة المياه.',
    keywords: ['تنظيف خزانات بالرياض', 'تعقيم خزانات المياه', 'شركة تنظيف خزانات'],
  },
  ac_maintenance: {
    title: 'صيانة وتنظيف المكيفات بالرياض',
    description:
      'صيانة وتنظيف المكيفات وفحص الأعطال وتحسين كفاءة التبريد وجودة الهواء للمنازل والمنشآت.',
    keywords: ['صيانة مكيفات بالرياض', 'تنظيف مكيفات', 'شركة تكييف بالرياض'],
  },
  furniture_moving: {
    title: 'نقل الأثاث والعفش بالرياض',
    description:
      'خدمات نقل الأثاث والعفش والتغليف والتركيب للمنازل والمكاتب داخل الرياض بعناية وتنظيم.',
    keywords: ['نقل أثاث بالرياض', 'نقل عفش', 'تغليف أثاث'],
  },
  building_restoration: {
    title: 'ترميم وتشطيب المباني بالرياض',
    description:
      'أعمال ترميم وتشطيب وصيانة المباني ومعالجة التلف والتشققات وتجديد المساحات السكنية والتجارية.',
    keywords: ['ترميم مباني بالرياض', 'تشطيب مباني', 'صيانة وترميم'],
  },
  leak_detection: {
    title: 'كشف تسربات المياه بالرياض',
    description:
      'خدمات فحص وكشف تسربات المياه وتحديد مصادر التسرب ومعالجة المشكلات المرتبطة بها في المباني والمنشآت.',
    keywords: ['كشف تسربات المياه بالرياض', 'فحص تسربات', 'معالجة تسرب المياه'],
  },
  plumbing_electrical: {
    title: 'خدمات السباكة والكهرباء بالرياض',
    description:
      'خدمات صيانة وإصلاح أعمال السباكة والكهرباء للمنازل والمنشآت مع استجابة مهنية للأعطال المختلفة.',
    keywords: ['سباك بالرياض', 'كهربائي بالرياض', 'صيانة سباكة وكهرباء'],
  },
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_IMAGE,
}: PageMetadataInput): Metadata {
  const canonical = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title,
      description,
      siteName: 'شركة خدمات الياسمين',
      locale: 'ar_SA',
      alternateLocale: ['en_US'],
      type: 'website',
      images: [
        {
          url: image,
          width: 800,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
