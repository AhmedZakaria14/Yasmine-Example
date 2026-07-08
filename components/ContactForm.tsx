'use client';

import { useState } from 'react';
import { motion as rawMotion } from 'framer-motion';
const motion = rawMotion as any;
import { Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function ContactForm() {
  const { t, dir } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    let text = "";
    if (dir === 'rtl') {
      text = `مرحباً، لدي طلب/استفسار جديد:\n\n*الاسم:* ${name}\n*البريد الإلكتروني:* ${email}\n*الموضوع:* ${subject}\n*الرسالة:*\n${message}`;
    } else {
      text = `Hello, I have a new request/inquiry:\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:*\n${message}`;
    }
    
    const phoneNumber = "966533273366";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir={dir}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className={`text-sm font-semibold text-slate-700 ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`}>
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
            placeholder={t('contact.form.name_placeholder')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={`text-sm font-semibold text-slate-700 ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`}>
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
            placeholder={t('contact.form.email_placeholder')}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className={`text-sm font-semibold text-slate-700 ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`}>
          {t('contact.form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
          placeholder={t('contact.form.subject_placeholder')}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className={`text-sm font-semibold text-slate-700 ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`}>
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 resize-none placeholder:text-slate-500"
          placeholder={t('contact.form.message_placeholder')}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className={`w-full md:w-auto px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:cursor-not-allowed ${
          status === 'success' 
            ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20' 
            : 'bg-[#00509E] hover:bg-[#00509E] text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0'
        }`}
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            {t('contact.form.sending')}
          </span>
        ) : status === 'success' ? (
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            {t('contact.form.sent')}
          </span>
        ) : (
          <>
            {t('contact.form.send')}
            <Send className={`w-4 h-4 ${dir === 'rtl' ? 'mr-1 rotate-180' : 'ml-1'}`} />
          </>
        )}
      </button>
      
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <p>{t('contact.form.success')}</p>
        </motion.div>
      )}
    </form>
  );
}
