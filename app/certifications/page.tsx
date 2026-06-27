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
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416852/22_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D8%B3%D8%AC%D9%84_%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A_b9qqrv.jpg'
    },
    {
      id: 'vat',
      title: dir === 'rtl' ? 'شهادة ضريبة القيمة المضافة' : 'VAT Certificate',
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416865/31_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%B6%D8%B1%D9%8A%D8%A8%D8%A9_%D8%A7%D9%84%D9%82%D9%8A%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D8%B6%D8%A7%D9%81%D8%A9_VAT_lb6yo1.jpg'
    },
    {
      id: 'nitaqat',
      title: dir === 'rtl' ? 'شهادة التوطين (نطاقات)' : 'Saudization Nitaqat Certificate',
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416863/27_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D8%AA%D9%88%D8%B7%D9%8A%D9%86_%D9%86%D8%B7%D8%A7%D9%82%D8%A7%D8%AA_pex5wr.jpg'
    },
    {
      id: 'wage',
      title: dir === 'rtl' ? 'شهادة حماية الأجور' : 'Wage Protection Certificate',
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416864/28_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%AD%D9%85%D8%A7%D9%8A%D8%A9_%D8%A7%D9%84%D8%A7%D8%AC%D9%88%D8%B1_k7asck.jpg'
    },
    {
      id: 'address',
      title: dir === 'rtl' ? 'شهادة إثبات العنوان الوطني' : 'National Address Certificate',
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416865/34_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA_%D8%A7%D9%84%D8%B9%D9%86%D9%88%D8%A7%D9%86_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A_rbnagn.png'
    },
    {
      id: 'cr_qr',
      title: dir === 'rtl' ? 'السجل التجاري (QR)' : 'Commercial Register (QR)',
      src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416851/24_%D8%B4%D9%87%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D8%B3%D8%AC%D9%84_%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A_QR_ack8da.png'
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
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782542478/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B1%D8%A4%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9_2030_-_Saudi_vision_2030_Logo_SVG_1_u27dds.png"
                alt="Saudi Vision 2030"
                width={140}
                height={80}
                className="object-contain w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center w-48 h-28 hover:-translate-y-1 transition-transform duration-300 border border-white/20">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782416851/23_%D8%B4%D8%B9%D8%A7%D8%B1_%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9_bdblxe.jpg"
                alt="Ministry of Commerce"
                width={140}
                height={80}
                className="object-contain w-full h-full mix-blend-multiply"
                referrerPolicy="no-referrer"
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
                    referrerPolicy="no-referrer"
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
