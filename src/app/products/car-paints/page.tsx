import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'دهانات السيارات - POLITEK | Al-Amour Car Paints',
  description: 'معاجين، أساسات، دهانات، لكر، منشفات وتنر لإصلاح ودهان السيارات من POLITEK التركية | Car-refinishing putties, primers, paints, clearcoats, hardeners and thinners from POLITEK.',
};

export default function CarPaintsPage() {
  return (
    <>
      <ProductCategoryPage slug="car-paints" />
      <WhatsAppFloat />
    </>
  );
}
