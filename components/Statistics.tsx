'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

export function Statistics() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const stats = [
    { id: 'clients', icon: Users, value: '60', label: t('stats.clients') },
    { id: 'projects', icon: Briefcase, value: '60+', label: t('stats.projects') },
    { id: 'employees', icon: Award, value: '300+', label: t('stats.employees') },
    { id: 'years', icon: Clock, value: '2+', label: t('stats.years') },
  ];

  const staggerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <section ref={containerRef} className="py-24 bg-[#00509E] text-white relative overflow-hidden" dir={dir}>
      {/* Premium Background Effects */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5CE1E6]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white/5 group-hover:bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:-translate-y-2 shadow-lg">
                <stat.icon className="w-10 h-10 text-[#5CE1E6] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-5xl md:text-6xl font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {stat.value}
              </p>
              <p className="text-slate-300 font-medium text-sm md:text-base uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
