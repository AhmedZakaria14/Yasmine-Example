'use client';

import { motion as rawMotion, useScroll, useSpring } from 'framer-motion';
const motion = rawMotion as any;
import { useLanguage } from './LanguageProvider';

export function ScrollProgress() {
  const scrollYProgress = useScroll().scrollYProgress;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { dir } = useLanguage();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00509E] via-[#5CE1E6] to-[#00509E] z-[60] shadow-[0_0_10px_rgba(92,225,230,0.5)]"
      style={{ scaleX, transformOrigin: dir === 'rtl' ? 'right' : 'left' }}
    />
  );
}
