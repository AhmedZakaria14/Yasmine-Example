'use client';

import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';

export function ClientsLogos() {
  const { t, dir } = useLanguage();

  const logos = [
    'https://picsum.photos/seed/client-logo-1/200/100',
    'https://picsum.photos/seed/client-logo-2/200/100',
    'https://picsum.photos/seed/client-logo-3/200/100',
    'https://picsum.photos/seed/client-logo-4/200/100',
    'https://picsum.photos/seed/client-logo-5/200/100',
    'https://picsum.photos/seed/client-logo-6/200/100',
  ];

  // Duplicate logos for infinite scroll effect
  const extendedLogos = [...logos, ...logos];

  return (
    <section id="clients" className="py-24 bg-white/95 relative overflow-hidden" dir={dir}>
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-medium mb-6"
          >
            {t('clients.title')}
          </motion.span>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent">
          <motion.div
            animate={{
              x: dir === 'rtl' ? ['0%', '50%'] : ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex w-[200%] items-center gap-16 md:gap-24 transform-gpu will-change-transform"
          >
            {extendedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-32 h-12 md:w-40 md:h-16 shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`${t('clients.logo.alt')} ${index + 1}`}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
