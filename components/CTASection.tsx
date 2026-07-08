'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react';

export function CTASection() {
  const { t, dir, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yCard = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} id="contact" className="py-24 bg-slate-50/95 relative overflow-hidden" dir={dir}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00509E]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5CE1E6]/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none transform-gpu" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y: yCard }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl border border-slate-100 max-w-5xl mx-auto text-center overflow-hidden transform-gpu will-change-transform"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50/50 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00509E]/5 text-[#00509E] text-sm font-semibold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5CE1E6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5CE1E6]"></span>
              </span>
              {t('cta.badge')}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight"
            >
              {t('cta.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t('cta.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
            >
              <a
                href={`mailto:${t('footer.email1')}`}
                className="group inline-flex items-center justify-center gap-2 bg-[#00509E] hover:bg-[#00509E] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                {t('cta.button')}
                {lang === 'ar' ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
              <a
                href={`tel:${t('footer.phone1').replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-medium transition-all shadow-sm border border-slate-200 hover:border-slate-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-slate-500" />
                <span dir="ltr">{t('footer.phone1')}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
