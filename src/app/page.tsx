import PremiumHero from '@/components/PremiumHero';
import ServicesNew from '@/components/ServicesNew';
import Catalogs from '@/components/Catalogs';
import About from '@/components/About';
import Founder from '@/components/Founder';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-navy">
      <PremiumHero />
      <ServicesNew />
      <Catalogs />
      <About />
      <Founder />
      <Blog />
      <FAQ />
      <WhatsAppFloat />
      <ContactSection />
      <Footer />
    </main>
  );
}
