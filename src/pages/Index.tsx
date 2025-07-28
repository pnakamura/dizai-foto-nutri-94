
import React from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import DemoSection from '@/components/DemoSection';
import TransformSection from '@/components/TransformSection';
import FeaturesSection from '@/components/FeaturesSection';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <DemoSection />
      <TransformSection />
      <FeaturesSection />
      <Testimonials />
      <PricingSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
