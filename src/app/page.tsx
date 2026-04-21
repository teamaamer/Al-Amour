import PremiumHero from '@/components/PremiumHero';
import Stats from '@/components/Stats';
import LogoTicker from '@/components/LogoTicker';
import ServicesNew from '@/components/ServicesNew';
import Catalogs from '@/components/Catalogs';
import About from '@/components/About';
import Blog from '@/components/Blog';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-navy">
      <PremiumHero />
      <Stats />
      <LogoTicker />
      <ServicesNew />
      <Catalogs />
      <About />
      <Blog />
      <WhatsAppFloat />
      <Footer />
    </main>
  );
}
