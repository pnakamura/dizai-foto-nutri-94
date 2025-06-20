
import React from 'react';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import TransformSection from '@/components/TransformSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DemoSection />
      <TransformSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
