'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion as rawMotion, AnimatePresence } from 'framer-motion';
const motion = rawMotion as any;
import { useLanguage } from '@/components/LanguageProvider';
import { CTASection } from '@/components/CTASection';
import { Wrench, Droplets, Coffee, Bug, Leaf, CheckCircle2, Building2, Camera, Box, Wind, Truck, Hammer, Umbrella, Zap } from 'lucide-react';

const servicesData = {
  facility: {
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    related: ['maintenance', 'cleaning'],
  },
  maintenance: {
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop',
    related: ['cleaning', 'mep'],
  },
  cleaning: {
    icon: Droplets,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416847/11_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A7%D8%AA_mgp4du.jpg',
    gallery: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416847/11_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A7%D8%AA_mgp4du.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416846/12_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D9%85%D8%B3%D8%A7%D8%A8%D8%AD_uz5xqf.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/13_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D9%85%D9%88%D9%83%D9%8A%D8%AA_b9su9r.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/14_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D8%B6%D8%BA%D8%B7_rwprbh.jpg'],
    related: ['tanks', 'pest'],
  },
  hospitality: {
    icon: Coffee,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416848/15_%D8%B6%D9%8A%D8%A7%D9%81%D8%A9_%D9%86%D8%A7%D8%AF%D9%84_ytxbnx.jpg',
    gallery: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416848/15_%D8%B6%D9%8A%D8%A7%D9%81%D8%A9_%D9%86%D8%A7%D8%AF%D9%84_ytxbnx.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416848/16_%D8%B6%D9%8A%D8%A7%D9%81%D8%A9_%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA_holchq.jpg'],
    related: ['cleaning', 'maintenance'],
  },
  pest: {
    icon: Bug,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/17_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA1_ohplqy.jpg',
    gallery: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/17_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA1_ohplqy.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/18_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA2_r8ktiw.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416850/19_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA3_kre22q.jpg'],
    related: ['cleaning', 'landscaping'],
  },
  landscaping: {
    icon: Leaf,
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416850/20_%D8%AD%D8%AF%D8%A7%D8%A6%D9%821_wnhm0f.jpg',
    gallery: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416850/20_%D8%AD%D8%AF%D8%A7%D8%A6%D9%821_wnhm0f.jpg','https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416851/21_%D8%AD%D8%AF%D8%A7%D8%A6%D9%822_ouypph.jpg'],
    related: ['maintenance', 'pest'],
  },
  cameras: {
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    related: ['mep', 'facility'],
  },
  tanks: {
    icon: Box,
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop',
    related: ['cleaning', 'insulation'],
  },
  ac: {
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop',
    related: ['maintenance', 'mep'],
  },
  furniture: {
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    related: ['cleaning', 'maintenance'],
  },
  construction: {
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    related: ['mep', 'insulation'],
  },
  insulation: {
    icon: Umbrella,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop',
    related: ['construction', 'tanks'],
  },
  mep: {
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    related: ['ac', 'construction'],
  },
};

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, dir } = useLanguage();

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
            <div
              
              
              className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-8 backdrop-blur-md"
            >
              <Icon className="w-5 h-5" />
              <span>{t(`service.${id}.title` as any)}</span>
            </div>
            
            <h1
              
              
              
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-normal break-words"
            >
              {title}
            </h1>
            
            <p
              
              
              
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed whitespace-normal break-words"
            >
              {desc}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
              
              
              
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
            </div>

            {/* Features & Case Study */}
            <div
              
              
              
              className="space-y-12"
            >
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('services.features')}
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      
                      
                      
                      
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#00509E] shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-lg">{feature}</span>
                    </li>
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
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {(service as any).gallery && (service as any).gallery.length > 0 && (
        <div className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('services.gallery' as any) || 'معرض الصور'}
              </h2>
              <div className="w-24 h-1 bg-[#5CE1E6] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(service as any).gallery.map((img: string, idx: number) => (
                <div
                  key={idx}
                  
                  
                  
                  
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#00509E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
                  <div
                    
                    
                    
                    
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
                  </div>
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
