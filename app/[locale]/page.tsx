import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import ProductGrid from '@/components/ProductGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <ProductGrid />
      <HowItWorks />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
