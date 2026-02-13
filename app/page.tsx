import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CodeDemo from '@/components/CodeDemo';
import WhyLumina from '@/components/WhyLumina';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <CodeDemo />
      <WhyLumina />
      <Features />
      <UseCases />
      <ProductShowcase />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
