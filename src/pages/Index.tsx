
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollIndicator from '@/components/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <FeaturesSection />
      <div className="container mx-auto max-w-7xl">
        <HowItWorks />
      </div>
      <PricingSection />
      <Faq />
      <Footer />
      <ScrollToTop />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
