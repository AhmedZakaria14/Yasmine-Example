'use client';

import { useRef } from 'react';
import { motion as rawMotion, useScroll, useTransform } from 'framer-motion';
const motion = rawMotion as any;
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { Mail, Phone, MapPin, Instagram, ArrowRight, ArrowLeft } from 'lucide-react';

export function Footer() {
  const { t, dir, lang } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start end", "end end"]
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

  return (
    <motion.footer ref={containerRef} className="bg-[#003366] text-slate-300 pt-20 pb-10 relative overflow-hidden" dir={dir}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
      <motion.div 
        style={{ y: yOrb1 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
      />
      <motion.div 
        style={{ y: yOrb2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5CE1E6]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" 
      />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#00509E] opacity-5 transform rotate-45 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand - Span 4 cols */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            
            variants={staggerVariants}
            className="lg:col-span-4 space-y-8"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white rounded-2xl shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541880/al_yasmin_logo_me3goh.png"
                  alt="Al Yasmin Logo"
                  fill
                  className="object-contain p-2 md:p-3"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl md:text-2xl text-white tracking-tight">{lang === 'ar' ? 'شركة خدمات الياسمين' : 'AL-YASMIN SERVICES CO.'}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-300">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:border-[#5CE1E6] hover:text-[#003366] transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <div className="pt-4">
              <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center w-32 h-20 md:w-40 md:h-24 hover:-translate-y-1 transition-transform duration-300 border border-white/10">
                <Image
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782542478/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B1%D8%A4%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9_2030_-_Saudi_vision_2030_Logo_SVG_1_u27dds.png"
                  alt="Saudi Vision 2030"
                  width={120}
                  height={60}
                  className="object-contain w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Span 2 cols */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            
            variants={staggerVariants}
            className="lg:col-span-2"
          >
            <p className="text-white font-semibold text-lg mb-6 tracking-wide">{t('footer.links')}</p>
            <ul className="space-y-4">
              {['home', 'about', 'services', 'certifications', 'clients', 'contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'home' ? '/' : `/${item}`} className="group flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                    <span className={`w-0 h-px bg-[#5CE1E6] transition-all duration-300 group-hover:w-4 ${dir === 'rtl' ? 'ml-0 group-hover:ml-2' : 'mr-0 group-hover:mr-2'}`}></span>
                    {t(`nav.${item}` as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Span 3 cols */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            
            variants={staggerVariants}
            className="lg:col-span-3"
          >
            <p className="text-white font-semibold text-lg mb-6 tracking-wide">{t('nav.services')}</p>
            <ul className="space-y-4">
              {['maintenance', 'cleaning', 'hospitality', 'pest', 'landscaping'].map((item) => (
                <li key={item}>
                  <Link href={`/services/${item}`} className="group flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                    <span className={`w-0 h-px bg-[#5CE1E6] transition-all duration-300 group-hover:w-4 ${dir === 'rtl' ? 'ml-0 group-hover:ml-2' : 'mr-0 group-hover:mr-2'}`}></span>
                    {t(`service.${item}.title` as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Span 3 cols */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            
            variants={staggerVariants}
            className="lg:col-span-3"
          >
            <p className="text-white font-semibold text-lg mb-6 tracking-wide">{t('footer.contact')}</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5CE1E6]/20 group-hover:border-[#5CE1E6]/30 transition-colors">
                  <MapPin className="w-4 h-4 text-[#5CE1E6]" />
                </div>
                <span className="mt-2 leading-relaxed">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5CE1E6]/20 group-hover:border-[#5CE1E6]/30 transition-colors">
                  <Phone className="w-4 h-4 text-[#5CE1E6]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span dir="ltr" className="font-medium tracking-wide">{t('footer.phone1')}</span>
                  <span dir="ltr" className="font-medium tracking-wide">{t('footer.phone2')}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-sm text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5CE1E6]/20 group-hover:border-[#5CE1E6]/30 transition-colors">
                  <Mail className="w-4 h-4 text-[#5CE1E6]" />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <a href={`mailto:${t('footer.email1')}`} className="hover:text-white transition-colors cursor-pointer">{t('footer.email1')}</a>
                  <a href={`mailto:${t('footer.email2')}`} className="hover:text-white transition-colors cursor-pointer">{t('footer.email2')}</a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div 
          
          
          
          
          className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-start"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-slate-500">{t('footer.rights')}</p>
            <span className="hidden md:inline-block text-slate-700">•</span>
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              {lang === 'ar' ? 'تم التصميم والتطوير بواسطة' : 'Designed & Developed by'}
              <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="text-[#5CE1E6] hover:text-white font-semibold transition-colors">
                NasharHub.com
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
