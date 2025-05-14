
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <HeroSection />
      </div>
      <FeaturesSection />
      <div className="container mx-auto max-w-7xl">
        <HowItWorks />
        <Testimonials />
      </div>
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
