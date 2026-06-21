import { Hero } from '@/components/Hero';
import { AboutPreview } from '@/components/AboutPreview';
import { ServicesOverview } from '@/components/ServicesOverview';
import { Statistics } from '@/components/Statistics';
import { ClientsLogos } from '@/components/ClientsLogos';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <Statistics />
      <ClientsLogos />
      <CTASection />
    </>
  );
}
