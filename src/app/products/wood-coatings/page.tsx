import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'طلاءات الخشب - ILVA و ERCO | Al-Amour Wood Coatings',
  description: 'أساسات، لكر، دهانات، منشفات وتنر للخشب من ILVA الإيطالية و ERCO التركية | Wood primers, lacquers, paints, hardeners and thinners from ILVA and ERCO.',
};

export default function WoodCoatingsPage() {
  return (
    <>
      <ProductCategoryPage slug="wood-coatings" />
      <WhatsAppFloat />
    </>
  );
}
