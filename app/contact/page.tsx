import { CTASection } from '@/components/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="relative bg-[#003366] text-white py-32 text-center overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-6 backdrop-blur-md">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch for a customized facility management proposal tailored to your specific needs.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00509E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Send Us a Message</h2>
                <p className="text-slate-600 mb-10 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Contact Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00509E]/20 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#00509E] group-hover:bg-[#00509E] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-lg">Headquarters</h3>
                    <p className="text-slate-600 leading-relaxed">123 Business Avenue<br />Financial District, Riyadh 12345<br />Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00509E]/20 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#00509E] group-hover:bg-[#00509E] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-lg">Phone</h3>
                    <p className="text-slate-600 leading-relaxed" dir="ltr">+966 11 234 5678</p>
                    <p className="text-slate-600 leading-relaxed" dir="ltr">+966 50 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00509E]/20 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#00509E] group-hover:bg-[#00509E] group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-lg">Email</h3>
                    <p className="text-slate-600 leading-relaxed">info@alyasminservices.com</p>
                    <p className="text-slate-600 leading-relaxed">support@alyasminservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00509E]/20 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#00509E] group-hover:bg-[#00509E] group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-lg">Business Hours</h3>
                    <p className="text-slate-600 leading-relaxed">Sunday - Thursday: 8:00 AM - 5:00 PM</p>
                    <p className="text-slate-600 leading-relaxed">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-inner border border-slate-100">
              {/* Placeholder for a map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-50">
                <MapPin className="w-10 h-10 mb-3 text-slate-500" />
                <p className="font-medium">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
