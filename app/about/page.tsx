import { AboutPreview } from '@/components/AboutPreview';
import { Statistics } from '@/components/Statistics';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="relative bg-[#003366] text-white py-32 text-center overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00509E] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#5CE1E6] text-sm font-semibold mb-6 backdrop-blur-md">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover our legacy of quality, trust, and excellence in facility management across the region.
          </p>
        </div>
      </div>
      <AboutPreview />
      <Statistics />
    </div>
  );
}
