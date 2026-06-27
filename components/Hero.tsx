'use client';

import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { ArrowRight, ArrowLeft, Building2, ShieldCheck, Leaf } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const { t, dir, lang } = useLanguage();
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" dir={dir}>
      {/* Premium Background Effects - Static */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00509E] opacity-10 transform rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5CE1E6] opacity-10 transform rotate-45 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      {/* Glowing Orbs - Static */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00509E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#5CE1E6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-start pt-10 lg:pt-0">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className={`mb-8 inline-flex ${dir === 'rtl' ? 'lg:mr-0' : 'lg:ml-0'}`}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-[#00509E] text-sm font-semibold shadow-sm">
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              {lang === 'ar' ? (
                <>
                  ارتقِ بمعايير <span className="text-gradient">مرافقك</span> <br className="hidden md:block" />
                  اليوم
                </>
              ) : (
                <>
                  Elevate Your <span className="text-gradient">Facilities</span> <br className="hidden md:block" />
                  Today
                </>
              )}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto mb-12"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-[#00509E] hover:bg-[#00509E] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('hero.cta')}
                {lang === 'ar' ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
              >
                {t('hero.contact')}
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00509E]" />
                <span>{t('hero.trust.iso')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00509E]" />
                <span>{t('hero.trust.facilities')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[#00509E]" />
                <span>{t('hero.trust.eco')}</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block h-[600px] w-full"
            style={{ willChange: 'transform' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00509E]/20 to-[#5CE1E6]/20 rounded-[3rem] transform rotate-3 scale-105" />
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416847/01_%D8%BA%D9%84%D8%A7%D9%81_%D8%AE%D9%84%D9%81%D9%8A%D8%A9_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_nxdd3s.jpg"
                  alt="Al Yasmin Services Riyadh Background"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00509E]/80 via-transparent to-transparent" />
                
                {/* Floating UI Element */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute bottom-8 ${dir === 'rtl' ? 'right-8' : 'left-8'} glass-panel p-4 rounded-2xl shadow-lg flex items-center gap-4`}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-inner">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t('hero.secure')}</p>
                    <p className="text-xs text-slate-600">{t('hero.operations')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
