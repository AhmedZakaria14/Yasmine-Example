'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function ClientsLogos() {
  const { t, dir } = useLanguage();

  const clients = [
    { en: 'MEFMA', ar: 'جمعية الشرق الأوسط لإدارة المرافق (MEFMA)', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541311/MEFMA_eypvaw.png' },
    { en: 'Chedid Insurance Brokers', ar: 'شديد لوساطة التأمين', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541308/Chedid_Insurance_hxafeg.png' },
    { en: 'Al-Moayyed', ar: 'المؤيد', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541286/AlMuayid_xm6nud.png' },
    { en: 'Abal Khail Consulting', ar: 'أبا الخيل للاستشارات الهندسية', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541285/AbalKhail_vyapsd.png' },
    { en: 'Atos', ar: 'أتوس', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541286/Atos_no0woi.png' },
    { en: 'SMSCMC', ar: 'الشركة السعودية للصيانة وإدارة خطوط الإمداد (SMSCMC)', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541314/SMSCMC_emvdm5.png' },
    { en: 'Saudi Xerox', ar: 'سعودي زيروكس', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541312/Saudi_Xerox_c72c9y.png' },
    { en: 'Atlas Copco', ar: 'أطلس كوبكو', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541286/Atlas_Copco_dpoqso.png' },
    { en: 'Famco', ar: 'فامكو', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541308/famco_cnxbxb.png' },
    { en: 'Salsabiel', ar: 'سلسبيل', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541312/Salsabiel_wxqrhs.png' },
    { en: 'Hubari Company', ar: 'شركة حباري', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541312/Sharikat_Hbari_jqavds.png' },
    { en: 'Hawaz', ar: 'هوز', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541309/Hawaz_lx6mjt.png' },
    { en: 'Jobs in Saudi Arabia', ar: 'وظائف في السعودية', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541309/Jobs_in_Saudi_Arabia_apu8jk.png' },
    { en: 'Technical Trading Co. LLC', ar: 'الشركة الفنية التجارية ذ.م.م', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541315/Technical_Trading_w17oze.png' },
    { en: 'GCC Construction', ar: 'شركة الإنشاء الخليجي للمقاولات', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541309/GCC_oiqjiy.png' },
    { en: 'Olayan', ar: 'العليان', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541311/Olayan_iywvt4.png' },
    { en: 'Awshal Restaurant', ar: 'مطعم أوشال', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541306/Awshal_Restaurant_rap5tc.png' },
    { en: 'ch2m', ar: 'ch2m', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541306/ch2m_opye1e.png' },
    { en: 'Technical Trade Co.', ar: 'شركة التداول الفني', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541315/Technical_Trade_Co_wk6qgq.png' },
    { en: 'Norconsult Telematics', ar: 'نوركونسلت تيليماتيكس', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541311/Norconsult_Telematics_wzo5h2.png' },
    { en: 'ABM Arabian Business Machines', ar: 'الشركة العربية لمكائن الأعمال (ABM)', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541285/ABM_Arabian_Business_Machines_u9s5dm.png' },
    { en: 'Client 22', ar: 'عميل 22', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783238008/WhatsApp_Image_2026-07-02_at_2.56.28_PM_1_eq4y5k.jpg' },
    { en: 'Client 23', ar: 'عميل 23', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783238008/WhatsApp_Image_2026-07-02_at_2.56.28_PM_w4qu5i.jpg' }
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
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
