'use client';

import { ServicesOverview } from '@/components/ServicesOverview';
import { CTASection } from '@/components/CTASection';
import { useLanguage } from '@/components/LanguageProvider';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ServicesPage() {
  const { t, dir } = useLanguage();

  return (
    <div className="pt-20" dir={dir}>
      <div className="relative bg-[#003366] text-white py-32 text-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416845/08_%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%85%D8%A8%D9%86%D9%89_obxprc.jpg')` }}
        />
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Breadcrumbs className="justify-center" />
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-6 backdrop-blur-md">
            {t('nav.services')}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {t('services.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </div>
      <ServicesOverview />
      <CTASection />
    </div>
  );
}
