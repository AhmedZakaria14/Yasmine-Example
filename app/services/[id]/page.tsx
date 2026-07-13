import ServiceDetailClient from './ServiceDetailClient';

const servicesData = {
  maintenance: {},
  cleaning: {},
  hospitality: {},
  pest: {},
  landscaping: {},
  facilities_management: {},
  security_cameras: {},
  water_tanks: {},
  ac_maintenance: {},
  furniture_moving: {},
  building_restoration: {},
  leak_detection: {},
  plumbing_electrical: {},
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id: id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ServiceDetailClient params={params} />;
}
