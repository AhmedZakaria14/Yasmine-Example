'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 placeholder:text-slate-500"
          placeholder="How can we help you?"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#00509E] focus:ring-4 focus:ring-[#00509E]/10 outline-none transition-all duration-300 resize-none placeholder:text-slate-500"
          placeholder="Tell us about your project or inquiry..."
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
            Sending...
          </span>
        ) : status === 'success' ? (
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Message Sent!
          </span>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-1" />
          </>
        )}
      </button>
      
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <p>Thank you for reaching out. We have received your message and will contact you shortly.</p>
        </motion.div>
      )}
    </form>
  );
}
