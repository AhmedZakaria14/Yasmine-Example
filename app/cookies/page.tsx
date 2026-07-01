'use client';

import { CTASection } from '@/components/CTASection';
import { useLanguage } from '@/components/LanguageProvider';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function CookiePolicyPage() {
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
            <ShieldCheck className="w-10 h-10 text-[#5CE1E6]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {lang === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ar' 
              ? 'كيفية استخدامنا لملفات تعريف الارتباط لتحسين تجربتك.' 
              : 'How we use cookies to improve your experience on our website.'}
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none prose-headings:text-[#00509E] prose-a:text-[#5CE1E6]">
            {lang === 'ar' ? (
              <>
                <h2>ما هي ملفات تعريف الارتباط؟</h2>
                <p>
                  ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الهاتف الذكي الخاص بك عند زيارة موقعنا الإلكتروني. تستخدم <strong>شركة خدمات الياسمين</strong> ملفات تعريف الارتباط لتحسين تجربتك وتوفير ميزات إضافية.
                </p>
                
                <h2>كيف نستخدم ملفات تعريف الارتباط؟</h2>
                <p>نستخدم ملفات تعريف الارتباط للأغراض التالية:</p>
                <ul>
                  <li><strong>ضرورية جداً:</strong> وهي ضرورية لتمكينك من تصفح الموقع واستخدام ميزاته بشكل صحيح، مثل تذكر تفضيلات اللغة.</li>
                  <li><strong>الأداء والتحليلات:</strong> تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع الموقع من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول الهوية، مما يساعدنا على تحسين وظائف الموقع.</li>
                  <li><strong>الوظيفية:</strong> تسمح هذه الملفات للموقع بتذكر الاختيارات التي تقوم بها (مثل اسم المستخدم الخاص بك أو منطقتك) لتوفير ميزات محسنة وأكثر شخصية.</li>
                </ul>

                <h2>التحكم في ملفات تعريف الارتباط</h2>
                <p>
                  يمكنك إدارة وتغيير إعدادات ملفات تعريف الارتباط الخاصة بك في أي وقت من خلال إعدادات المتصفح الخاص بك. يرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف معينة في موقعنا ويقلل من جودة تجربتك.
                </p>

                <h2>تحديثات سياسة ملفات تعريف الارتباط</h2>
                <p>
                  قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس، على سبيل المثال، التغييرات في ملفات تعريف الارتباط التي نستخدمها أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى.
                </p>

                <h2>تواصل معنا</h2>
                <p>
                  إذا كان لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط، يرجى التواصل معنا من خلال معلومات الاتصال المتوفرة في موقعنا.
                </p>
              </>
            ) : (
              <>
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. <strong>Al-Yasmin Services Co.</strong> uses cookies to improve your experience and provide additional functionality.
                </p>
                
                <h2>How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul>
                  <li><strong>Strictly Necessary:</strong> These cookies are essential to enable you to browse around our website and use its features, such as remembering your language preferences.</li>
                  <li><strong>Performance and Analytics:</strong> These cookies collect information about how visitors use a website, for instance, which pages visitors go to most often. We use this information to improve how our website works.</li>
                  <li><strong>Functionality:</strong> These cookies allow our website to remember choices you make and provide enhanced, more personal features.</li>
                </ul>

                <h2>Controlling Cookies</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Please note that if you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please contact us using the information provided on our website.
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
