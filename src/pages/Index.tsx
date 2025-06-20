
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TransformSection from '@/components/TransformSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TransformSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
