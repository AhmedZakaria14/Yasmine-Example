'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Menu, X, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { t, lang, setLang, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.certifications'), href: '/certifications' },
    { name: t('nav.clients'), href: '/clients' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500`}
      dir={dir}
    >
      <div 
        className={`relative flex items-center justify-between px-4 py-3 md:px-6 md:py-3 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50' 
            : 'bg-white/60 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-white/30'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00509E] to-[#5CE1E6] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            {lang === 'ar' ? 'ي' : 'Y'}
          </div>
          <span className="font-bold text-lg md:text-xl text-slate-900 tracking-tight group-hover:text-[#00509E] transition-colors">
            {lang === 'ar' ? 'الياسمين' : 'Al Yasmin'}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-slate-600 hover:text-[#00509E] transition-colors group rounded-full hover:bg-slate-100/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#00509E] transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50"
          >
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <Link
            href="/contact"
            className="bg-[#00509E] hover:bg-[#00509E] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('hero.contact')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="p-2 text-slate-700 hover:bg-white/50 rounded-full transition-colors"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-slate-700 hover:bg-white/50 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Nav Floating Card */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+1rem)] left-0 w-full bg-white/95 backdrop-blur-3xl border border-white/50 shadow-[0_20px_40px_rgb(0,0,0,0.1)] rounded-3xl overflow-hidden lg:hidden"
            >
              <div className="flex flex-col p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between text-slate-700 font-semibold py-4 px-6 rounded-2xl hover:bg-slate-50 hover:text-[#00509E] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {dir === 'rtl' ? <ChevronLeft className="w-4 h-4 opacity-50" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="pt-4 pb-2 px-2"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full bg-[#00509E] hover:bg-[#00509E] text-white px-6 py-4 rounded-2xl font-semibold transition-colors shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('hero.contact')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
