'use client';

import { CTASection } from '@/components/CTASection';
import { useLanguage } from '@/components/LanguageProvider';
import { FileText } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function TermsOfServicePage() {
  const { t, dir, lang } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-slate-50" dir={dir}>
      {/* Header */}
      <div className="bg-[#00509E] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782298285/cleaning_1_tqj8l6.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00509E] to-[#00509E]/80" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Breadcrumbs className="justify-center" />
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-[#5CE1E6]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ar' 
              ? 'يرجى قراءة شروط وأحكام استخدام خدماتنا وموقعنا الإلكتروني بعناية.' 
              : 'Please read these terms and conditions carefully before using our services and website.'}
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none prose-headings:text-[#00509E] prose-a:text-[#5CE1E6]">
            {lang === 'ar' ? (
              <>
                <h2>1. قبول الشروط</h2>
                <p>
                  من خلال الوصول إلى موقع <strong>شركة خدمات الياسمين</strong> أو استخدام خدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية. إذا كنت لا توافق على أي من هذه الشروط، يُحظر عليك استخدام هذا الموقع أو خدماتنا.
                </p>
                
                <h2>2. وصف الخدمات</h2>
                <p>
                  تقدم شركة خدمات الياسمين حلولاً متكاملة في إدارة المرافق، خدمات التنظيف الاحترافية، والضيافة للشركات والمؤسسات. تخضع جميع الخدمات للاتفاقيات والعقود المبرمة بين الشركة والعميل.
                </p>

                <h2>3. التزامات المستخدم</h2>
                <p>بصفتك مستخدماً لموقعنا أو خدماتنا، فإنك توافق على:</p>
                <ul>
                  <li>تقديم معلومات دقيقة وحديثة عند التواصل معنا أو طلب خدماتنا.</li>
                  <li>عدم استخدام موقعنا لأي غرض غير قانوني أو غير مصرح به.</li>
                  <li>عدم محاولة التدخل في أو تعطيل أمان الموقع أو الشبكات المتصلة به.</li>
                </ul>

                <h2>4. حقوق الملكية الفكرية</h2>
                <p>
                  جميع المحتويات المتوفرة على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر، النصوص والرسومات والشعارات والصور، هي ملك لشركة خدمات الياسمين أو مورديها وهي محمية بموجب قوانين حقوق الطبع والنشر.
                </p>

                <h2>5. إخلاء المسؤولية</h2>
                <p>
                  يتم توفير المواد والمعلومات على موقعنا &quot;كما هي&quot;. لا تقدم شركة خدمات الياسمين أي ضمانات، صريحة أو ضمنية، وتنفي بموجب هذا جميع الضمانات الأخرى بما في ذلك الضمانات الضمنية أو شروط التسويق أو الملاءمة لغرض معين.
                </p>

                <h2>6. حدود المسؤولية</h2>
                <p>
                  لن تكون شركة خدمات الياسمين في أي حال من الأحوال مسؤولة عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن فقدان البيانات أو الأرباح، أو بسبب انقطاع الأعمال) الناشئة عن استخدام أو عدم القدرة على استخدام المواد أو الخدمات.
                </p>

                <h2>7. القانون الحاكم</h2>
                <p>
                  تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة العربية السعودية، وتخضع حصريًا لاختصاص المحاكم في المملكة.
                </p>
              </>
            ) : (
              <>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing the website of <strong>Al-Yasmin Services Co.</strong> or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Kingdom of Saudi Arabia. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                
                <h2>2. Description of Services</h2>
                <p>
                  Al-Yasmin Services Co. provides integrated solutions in facility management, professional cleaning services, and hospitality for businesses and organizations. All services are subject to the specific agreements and contracts concluded between the company and the client.
                </p>

                <h2>3. User Obligations</h2>
                <p>As a user of our website or services, you agree to:</p>
                <ul>
                  <li>Provide accurate, current, and complete information when contacting us or requesting our services.</li>
                  <li>Not use our website for any unlawful or unauthorized purpose.</li>
                  <li>Not attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the website.</li>
                </ul>

                <h2>4. Intellectual Property Rights</h2>
                <p>
                  All content included on this site, such as text, graphics, logos, button icons, and images, is the property of Al-Yasmin Services Co. or its content suppliers and protected by international copyright laws.
                </p>

                <h2>5. Disclaimer</h2>
                <p>
                  The materials on our website are provided on an &apos;as is&apos; basis. Al-Yasmin Services Co. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>6. Limitations of Liability</h2>
                <p>
                  In no event shall Al-Yasmin Services Co. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or our services.
                </p>

                <h2>7. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
