import { CTASection } from '@/components/CTASection';
import { Award, ShieldCheck, Leaf } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management Systems',
      description: 'Demonstrating our ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements.',
      icon: Award,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'iso-14001',
      title: 'ISO 14001:2015',
      subtitle: 'Environmental Management Systems',
      description: 'Ensuring our environmental responsibilities are managed in a systematic manner that contributes to the environmental pillar of sustainability.',
      icon: Leaf,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'iso-45001',
      title: 'ISO 45001:2018',
      subtitle: 'Occupational Health and Safety',
      description: 'Providing safe and healthy workplaces by preventing work-related injury and ill health, as well as by proactively improving our OH&S performance.',
      icon: ShieldCheck,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-[#003366] text-white py-32 text-center overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-6 backdrop-blur-md">
            Our Standards
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Certifications
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We adhere to the highest international standards to ensure quality, safety, and sustainability.
          </p>
        </div>
      </div>
      
      <div className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Commitment to Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Al-Yasmin Services Co. is proud to be recognized by leading international certification bodies. 
              These certifications reflect our unwavering commitment to delivering exceptional services while 
              maintaining the highest standards of safety and environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.id} className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-white/50 transition-transform duration-300 group-hover:scale-110 ${cert.color}`}>
                    <cert.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#00509E] transition-colors">{cert.title}</h3>
                  <h4 className="text-sm font-semibold text-[#00509E] uppercase tracking-wider mb-4">{cert.subtitle}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
