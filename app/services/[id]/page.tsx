'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/components/LanguageProvider';
import { CTASection } from '@/components/CTASection';
import { Wrench, Droplets, Coffee, Bug, Leaf, Building, Camera, Fan, Truck, Hammer, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';

const servicesData = {
  maintenance: {
    icon: Wrench,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416845/09_%D8%B5%D9%8A%D8%A7%D9%86%D8%A9_%D9%85%D8%A8%D9%86%D9%89_owbznd.jpg',
    related: ['cleaning', 'landscaping'],
  },
  cleaning: {
    icon: Droplets,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416847/11_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A7%D8%AA_mgp4du.jpg',
    related: ['maintenance', 'pest'],
  },
  hospitality: {
    icon: Coffee,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416848/15_%D8%B6%D9%8A%D8%A7%D9%81%D8%A9_%D9%86%D8%A7%D8%AF%D9%84_ytxbnx.jpg',
    related: ['cleaning', 'maintenance'],
  },
  pest: {
    icon: Bug,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/17_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA1_ohplqy.jpg',
    related: ['cleaning', 'landscaping'],
  },
  landscaping: {
    icon: Leaf,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416850/20_%D8%AD%D8%AF%D8%A7%D8%A6%D9%821_wnhm0f.jpg',
    related: ['maintenance', 'pest'],
  },
  facilities_management: {
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    related: ['maintenance', 'cleaning'],
  },
  security_cameras: {
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2670&auto=format&fit=crop',
    related: ['maintenance'],
  },
  water_tanks: {
    icon: Droplets,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783487543/%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D8%AE%D8%B2%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87-%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_o3utul.jpg',
    related: ['cleaning', 'maintenance'],
  },
  ac_maintenance: {
    icon: Fan,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783487543/%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%83%D9%8A%D9%81-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A_j63lpi.webp',
    related: ['maintenance'],
  },
  furniture_moving: {
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2670&auto=format&fit=crop',
    related: ['maintenance'],
  },
  building_restoration: {
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
    related: ['maintenance'],
  },
  leak_detection: {
    icon: ShieldAlert,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783487544/%D8%B4%D8%B1%D9%83%D8%A9-%D9%83%D8%B4%D9%81-%D8%AA%D8%B3%D8%B1%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87_vxc6wm.jpg',
    related: ['maintenance'],
  },
  plumbing_electrical: {
    icon: Zap,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783487550/IMG_20231203_121310_nkmgvt.jpg',
    related: ['maintenance'],
  },
};

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, dir } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!Object.keys(servicesData).includes(id)) {
    notFound();
  }

  const service = servicesData[id as keyof typeof servicesData];
  const Icon = service.icon;

  // Helper to safely get translation or fallback
  const getTranslation = (key: string) => {
    const val = t(key as any);
    return val !== key ? val : '';
  };

  const title = getTranslation(`service.${id}.detail.title`);
  const desc = getTranslation(`service.${id}.detail.desc`);
  const caseStudyTitle = getTranslation(`service.${id}.detail.caseStudy.title`);
  const caseStudyDesc = getTranslation(`service.${id}.detail.caseStudy.desc`);

  const features = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map(num => getTranslation(`service.${id}.detail.features.${num}`))
    .filter(Boolean);

  if (isLoading) {
    return (
      <div className="pt-20" dir={dir}>
        {/* Skeleton Hero Section */}
        <div className="relative bg-[#003366] py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="w-48 h-10 bg-white/10 rounded-full mb-8 animate-pulse" />
              <div className="w-3/4 h-14 md:h-16 lg:h-20 bg-white/10 rounded-2xl mb-6 animate-pulse" />
              <div className="w-full h-8 bg-white/10 rounded-xl mb-3 animate-pulse" />
              <div className="w-5/6 h-8 bg-white/10 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Skeleton Content Section */}
        <div className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] bg-slate-200 rounded-[2rem] animate-pulse" />
              <div className="space-y-12">
                <div>
                  <div className="w-48 h-8 bg-slate-200 rounded-lg mb-6 animate-pulse" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-200 shrink-0 animate-pulse" />
                        <div className="w-full h-6 bg-slate-200 rounded-md animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-40 bg-slate-200 rounded-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20" dir={dir}>
      {/* Hero Section */}
      <div className="relative bg-[#003366] text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-8 backdrop-blur-md"
            >
              <Icon className="w-5 h-5" />
              <span>{t(`service.${id}.title` as any)}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-normal break-words"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed whitespace-normal break-words"
            >
              {desc}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <Image
                src={service.image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00509E]/20 to-transparent" />
            </motion.div>

            {/* Features & Case Study */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('services.features')}
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#00509E] shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              {caseStudyTitle && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5CE1E6]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <h2 className="text-xl font-bold text-[#00509E] mb-3 relative z-10">
                    {caseStudyTitle}
                  </h2>
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    {caseStudyDesc}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('services.related')}
            </h2>
            <div className="w-24 h-1 bg-[#5CE1E6] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.related.map((relatedId, index) => {
              const relatedService = servicesData[relatedId as keyof typeof servicesData];
              const RelatedIcon = relatedService.icon;
              return (
                <Link href={`/services/${relatedId}`} key={relatedId}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00509E]/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#00509E] group-hover:bg-[#00509E] group-hover:text-white transition-colors">
                      <RelatedIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00509E] transition-colors mb-2">
                        {t(`service.${relatedId}.title` as any)}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2">
                        {t(`service.${relatedId}.desc` as any)}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
