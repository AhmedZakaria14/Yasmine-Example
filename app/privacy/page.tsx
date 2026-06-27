'use client';

import { CTASection } from '@/components/CTASection';
import { useLanguage } from '@/components/LanguageProvider';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function PrivacyPolicyPage() {
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
            {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ar' 
              ? 'نحن في شركة الياسمين للخدمات نولي أهمية كبرى لخصوصيتك وحماية بياناتك.' 
              : 'At Al-Yasmin Services Co., we prioritize your privacy and data protection.'}
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none prose-headings:text-[#00509E] prose-a:text-[#5CE1E6]">
            {lang === 'ar' ? (
              <>
                <h2>مقدمة</h2>
                <p>
                  تحترم <strong>شركة الياسمين للخدمات</strong> خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية المعلومات الخاصة بك عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا.
                </p>
                
                <h2>البيانات التي نجمعها</h2>
                <p>قد نقوم بجمع واستخدام الأنواع التالية من البيانات:</p>
                <ul>
                  <li><strong>بيانات الهوية:</strong> الاسم الأول، اسم العائلة، أو اسم الشركة.</li>
                  <li><strong>بيانات الاتصال:</strong> عنوان البريد الإلكتروني، وأرقام الهواتف.</li>
                  <li><strong>بيانات تقنية:</strong> عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، نظام التشغيل.</li>
                  <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك لموقعنا الإلكتروني وخدماتنا.</li>
                </ul>

                <h2>كيف نستخدم بياناتك</h2>
                <p>نستخدم البيانات التي نجمعها للأغراض التالية:</p>
                <ul>
                  <li>لتقديم خدمات إدارة المرافق والتنظيف والضيافة وإدارتها.</li>
                  <li>للتواصل معك بشأن طلباتك واستفساراتك.</li>
                  <li>لتحسين موقعنا الإلكتروني وتجربة العملاء.</li>
                  <li>للامتثال للمتطلبات القانونية والتنظيمية في المملكة العربية السعودية.</li>
                </ul>

                <h2>حماية البيانات</h2>
                <p>
                  لقد اتخذنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية عن طريق الخطأ أو استخدامها أو الوصول إليها بطريقة غير مصرح بها. يقتصر الوصول إلى بياناتك الشخصية على الموظفين والوكلاء والمقاولين الذين يحتاجون إلى معرفتها لأغراض العمل.
                </p>

                <h2>حقوقك</h2>
                <p>
                  يحق لك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو مسحها. لممارسة هذه الحقوق، يرجى التواصل معنا عبر معلومات الاتصال المتوفرة في الموقع.
                </p>

                <h2>تحديثات سياسة الخصوصية</h2>
                <p>
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة. يرجى مراجعة هذه السياسة بانتظام.
                </p>
              </>
            ) : (
              <>
                <h2>Introduction</h2>
                <p>
                  <strong>Al-Yasmin Services Co.</strong> respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                </p>
                
                <h2>The Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                  <li><strong>Identity Data:</strong> includes first name, last name, or company name.</li>
                  <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                </ul>

                <h2>How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                  <li>To provide and manage our facility management, cleaning, and hospitality services.</li>
                  <li>To communicate with you regarding your requests and inquiries.</li>
                  <li>To improve our website, products/services, marketing, and customer relationships.</li>
                  <li>To comply with a legal or regulatory obligation in Saudi Arabia.</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
                </p>

                <h2>Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure. Please contact us to exercise any of these rights.
                </p>

                <h2>Changes to the Privacy Policy</h2>
                <p>
                  We keep our privacy policy under regular review. This version was last updated recently. We may update this policy from time to time.
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
