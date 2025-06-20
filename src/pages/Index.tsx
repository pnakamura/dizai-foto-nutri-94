
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactPhrases from '@/components/ImpactPhrases';
import HowItWorks from '@/components/HowItWorks';
import TrackingSection from '@/components/TrackingSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactPhrases />
      <HowItWorks />
      <TrackingSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
