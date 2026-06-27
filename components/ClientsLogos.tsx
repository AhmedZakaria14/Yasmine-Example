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
    { en: 'ABM Arabian Business Machines', ar: 'الشركة العربية لمكائن الأعمال (ABM)', src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782541285/ABM_Arabian_Business_Machines_u9s5dm.png' }
  ];

  // Duplicate logos for infinite scroll effect
  const extendedClients = [...clients, ...clients];

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
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex w-[200%] items-center gap-16 md:gap-24 transform-gpu will-change-transform"
          >
            {extendedClients.map((client, index) => (
              <div
                key={index}
                className="relative h-16 md:h-20 w-32 md:w-48 shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <Image
                  src={client.src}
                  alt={dir === 'rtl' ? client.ar : client.en}
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
