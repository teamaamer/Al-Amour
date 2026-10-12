import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'الراتنجات والجيلكوت | Al-Amour Resins & Gelcoats',
  description: 'جيلكوت، جيلكوت مضاد للكهرباء الساكنة، راتنجات حيوية و DCPD وفينيل إستر، وأنظمة قوالب | Gelcoats, antistatic gelcoat, bio, DCPD and vinyl ester resins, and tooling systems.',
};

export default function ResinsGelcoatsPage() {
  return (
    <>
      <ProductCategoryPage slug="resins-gelcoats" />
      <WhatsAppFloat />
    </>
  );
}
