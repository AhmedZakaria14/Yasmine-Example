'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion as rawMotion, useScroll, useTransform } from 'framer-motion';
const motion = rawMotion as any;
import { useLanguage } from './LanguageProvider';
import { Wrench, Droplets, Coffee, Bug, Leaf, ArrowRight, ArrowLeft, Building2, Camera, Box, Wind, Truck, Hammer, Umbrella, Zap } from 'lucide-react';

export function ServicesOverview() {
  const { t, dir, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start end", "end start"]
  });

  const yOrb1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const staggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  const services = [
    {
      id: 'facility',
      icon: Building2,
      title: t('service.facility.title'),
      desc: t('service.facility.desc'),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: t('service.maintenance.title'),
      desc: t('service.maintenance.desc'),
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'cleaning',
      icon: Droplets,
      title: t('service.cleaning.title'),
      desc: t('service.cleaning.desc'),
      image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416847/11_%D9%86%D8%B8%D8%A7%D9%81%D8%A9_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A7%D8%AA_mgp4du.jpg',
    },
    {
      id: 'hospitality',
      icon: Coffee,
      title: t('service.hospitality.title'),
      desc: t('service.hospitality.desc'),
      image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416848/15_%D8%B6%D9%8A%D8%A7%D9%81%D8%A9_%D9%86%D8%A7%D8%AF%D9%84_ytxbnx.jpg',
    },
    {
      id: 'pest',
      icon: Bug,
      title: t('service.pest.title'),
      desc: t('service.pest.desc'),
      image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416849/17_%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9_%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA1_ohplqy.jpg',
    },
    {
      id: 'landscaping',
      icon: Leaf,
      title: t('service.landscaping.title'),
      desc: t('service.landscaping.desc'),
      image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416850/20_%D8%AD%D8%AF%D8%A7%D8%A6%D9%821_wnhm0f.jpg',
    },
    {
      id: 'cameras',
      icon: Camera,
      title: t('service.cameras.title'),
      desc: t('service.cameras.desc'),
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'tanks',
      icon: Box,
      title: t('service.tanks.title'),
      desc: t('service.tanks.desc'),
      image: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'ac',
      icon: Wind,
      title: t('service.ac.title'),
      desc: t('service.ac.desc'),
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'furniture',
      icon: Truck,
      title: t('service.furniture.title'),
      desc: t('service.furniture.desc'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'construction',
      icon: Hammer,
      title: t('service.construction.title'),
      desc: t('service.construction.desc'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'insulation',
      icon: Umbrella,
      title: t('service.insulation.title'),
      desc: t('service.insulation.desc'),
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'mep',
      icon: Zap,
      title: t('service.mep.title'),
      desc: t('service.mep.desc'),
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <motion.section ref={containerRef} id="services" className="py-24 bg-slate-50/95 relative overflow-hidden" dir={dir}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Geometric Shapes from PDF Identity */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#5CE1E6]/10 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00509E]/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#00509E] opacity-5 transform rotate-45 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-[#00509E] text-sm font-semibold shadow-sm mb-6"
          >
            {t('services.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight"
          >
            {t('services.subtitle')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.id}`} key={service.id} className="block h-full">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerVariants}
                className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
                style={{ willChange: 'transform' }}
              >
              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00509E]/90 via-[#00509E]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-white/30">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col flex-grow p-8">
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex items-center text-[#00509E] font-semibold text-sm group-hover:text-[#003366] transition-colors duration-300 mt-auto">
                  <span>{t('services.discover')}</span>
                  <span className={`ml-2 transition-transform duration-300 ${dir === 'rtl' ? 'mr-2 ml-0 rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
