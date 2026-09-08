'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function ClientsLogos() {
  const { t, dir } = useLanguage();

  const clients = [
    { en: 'MEFMA', ar: 'جمعية الشرق الأوسط لإدارة المرافق (MEFMA)', src: '/images/clients/MEFMA.png' },
    { en: 'Chedid Insurance Brokers', ar: 'شديد لوساطة التأمين', src: '/images/clients/Chedid_Insurance.png' },
    { en: 'Al-Moayyed', ar: 'المؤيد', src: '/images/clients/AlMuayid.png' },
    { en: 'Abal Khail Consulting', ar: 'أبا الخيل للاستشارات الهندسية', src: '/images/clients/AbalKhail.png' },
    { en: 'Atos', ar: 'أتوس', src: '/images/clients/Atos.png' },
    { en: 'SMSCMC', ar: 'الشركة السعودية للصيانة وإدارة خطوط الإمداد (SMSCMC)', src: '/images/clients/SMSCMC.png' },
    { en: 'Saudi Xerox', ar: 'سعودي زيروكس', src: '/images/clients/Saudi_Xerox.png' },
    { en: 'Atlas Copco', ar: 'أطلس كوبكو', src: '/images/clients/Atlas_Copco.png' },
    { en: 'Famco', ar: 'فامكو', src: '/images/clients/famco.png' },
    { en: 'Salsabiel', ar: 'سلسبيل', src: '/images/clients/Salsabiel.png' },
    { en: 'Hubari Company', ar: 'شركة حباري', src: '/images/clients/Sharikat_Hbari.png' },
    { en: 'Hawaz', ar: 'هوز', src: '/images/clients/Hawaz.png' },
    { en: 'Jobs in Saudi Arabia', ar: 'وظائف في السعودية', src: '/images/clients/Jobs_in_Saudi_Arabia.png' },
    { en: 'Technical Trading Co. LLC', ar: 'الشركة الفنية التجارية ذ.م.م', src: '/images/clients/Technical_Trading.png' },
    { en: 'GCC Construction', ar: 'شركة الإنشاء الخليجي للمقاولات', src: '/images/clients/GCC.png' },
    { en: 'Olayan', ar: 'العليان', src: '/images/clients/Olayan.png' },
    { en: 'Awshal Restaurant', ar: 'مطعم أوشال', src: '/images/clients/Awshal_Restaurant.png' },
    { en: 'ch2m', ar: 'ch2m', src: '/images/clients/ch2m.png' },
    { en: 'Technical Trade Co.', ar: 'شركة التداول الفني', src: '/images/clients/Technical_Trade_Co.png' },
    { en: 'Norconsult Telematics', ar: 'نوركونسلت تيليماتيكس', src: '/images/clients/Norconsult_Telematics.png' },
    { en: 'ABM Arabian Business Machines', ar: 'الشركة العربية لمكائن الأعمال (ABM)', src: '/images/clients/ABM_Arabian_Business_Machines.png' }
  ];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center aspect-[4/3] relative group"
            >
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={client.src}
                  alt={dir === 'rtl' ? client.ar : client.en}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
