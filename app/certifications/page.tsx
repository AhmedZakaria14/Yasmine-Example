'use client';

import { CTASection } from '@/components/CTASection';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function CertificationsPage() {
  const { t, dir } = useLanguage();

  const certificates = [
    {
      id: 'cr',
      title: dir === 'rtl' ? 'السجل التجاري' : 'Commercial Register',
      src: '/images/certificates/commercial-register.jpg'
    },
    {
      id: 'vat',
      title: dir === 'rtl' ? 'شهادة ضريبة القيمة المضافة' : 'VAT Certificate',
      src: '/images/certificates/vat.jpg'
    },
    {
      id: 'nitaqat',
      title: dir === 'rtl' ? 'شهادة التوطين (نطاقات)' : 'Saudization Nitaqat Certificate',
      src: '/images/certificates/nitaqat.jpg'
    },
    {
      id: 'wage',
      title: dir === 'rtl' ? 'شهادة حماية الأجور' : 'Wage Protection Certificate',
      src: '/images/certificates/wage-protection.jpg'
    },
    {
      id: 'address',
      title: dir === 'rtl' ? 'شهادة إثبات العنوان الوطني' : 'National Address Certificate',
      src: '/images/certificates/national-address.png'
    },
    {
      id: 'cr_qr',
      title: dir === 'rtl' ? 'السجل التجاري (QR)' : 'Commercial Register (QR)',
      src: '/images/certificates/commercial-register-qr.png'
    }
  ];

  return (
    <div className="pt-20" dir={dir}>
      <div className="relative bg-[#003366] text-white py-32 text-center overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Breadcrumbs className="justify-center" />
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-6 backdrop-blur-md">
            {t('certifications.subtitle')}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {t('nav.certifications')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('certifications.desc')}
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center w-48 h-28 hover:-translate-y-1 transition-transform duration-300 border border-white/20">
              <Image
                src="/images/brand/vision-2030.png"
                alt="Saudi Vision 2030"
                width={140}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center w-48 h-28 hover:-translate-y-1 transition-transform duration-300 border border-white/20">
              <Image
                src="/images/certificates/ministry-of-commerce.jpg"
                alt="Ministry of Commerce"
                width={140}
                height={80}
                className="object-contain w-full h-full mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('certifications.commitment.title')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('certifications.commitment.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col gap-4">
                <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-slate-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden aspect-[1/1.4]">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 md:p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-center font-bold text-lg text-slate-800">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
