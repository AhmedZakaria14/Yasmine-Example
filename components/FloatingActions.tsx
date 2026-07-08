'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { motion } from 'motion/react';

export function FloatingActions() {
  const { dir } = useLanguage();
  const phoneNumber = "966533273366";

  return (
    <div className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 flex flex-col gap-4`}>
      <motion.a
        href={`tel:+${phoneNumber}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-14 h-14 bg-[#00509E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className={`absolute ${dir === 'rtl' ? 'left-full ml-4' : 'right-full mr-4'} bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block`}>
          {dir === 'rtl' ? 'اتصل بنا' : 'Call Us'}
        </span>
      </motion.a>

      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className={`absolute ${dir === 'rtl' ? 'left-full ml-4' : 'right-full mr-4'} bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block`}>
          {dir === 'rtl' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}
        </span>
      </motion.a>
    </div>
  );
}
