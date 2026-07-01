'use client';

import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';
import { ShieldCheck, Users, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

export function AboutPreview() {
  const { t, dir, lang } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white/95 overflow-hidden relative" dir={dir}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10" />
      
      {/* Geometric Shapes */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00509E]/5 rounded-full blur-[80px] -z-10 transform-gpu" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-[#5CE1E6]/5 rounded-full blur-[60px] -z-10 transform-gpu" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00509E] opacity-5 transform rotate-45 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416845/07_%D8%A7%D9%84%D8%B1%D8%A4%D9%8A%D8%A9_%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9_bmztan.jpg"
                alt="Al Yasmin Vision and Mission"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00509E]/90 via-[#00509E]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-3xl font-bold mb-3">{t('about.overlay.title')}</p>
                <p className="text-white/80 text-base max-w-sm">{t('about.overlay.desc')}</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute top-12 ${dir === 'rtl' ? '-left-8' : '-right-8'} glass-panel p-6 rounded-2xl shadow-xl max-w-[260px] hidden md:block border border-white/40`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00509E] to-[#5CE1E6] rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-white font-bold text-2xl">2+</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">{t('stats.years')}</p>
                  <p className="text-xs text-[#00509E] font-bold uppercase tracking-wider">{t('about.badge.exp')}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {t('about.badge.desc')}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-slate-200 text-[#00509E] text-sm font-semibold shadow-sm mb-6">
                <ShieldCheck className="w-4 h-4 text-[#00509E]" />
                {t('about.title')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t('about.description')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00509E]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00509E]/10 transition-colors" />
                  <h3 className="text-xl font-bold text-[#00509E] mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00509E]/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#00509E]" />
                    </div>
                    {t('about.vision.title')}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t('about.vision.desc')}
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5CE1E6]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#5CE1E6]/20 transition-colors" />
                  <h3 className="text-xl font-bold text-[#00509E] mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00509E]/10 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-[#00509E]" />
                    </div>
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t('about.mission.desc')}
                  </p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-slate-100"
            >
              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 bg-[#00509E] hover:bg-[#00509E] text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('about.cta')}
                {lang === 'ar' ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
