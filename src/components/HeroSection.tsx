import React from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.png';

const HeroSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="w-full lg:w-1/2 xl:w-2/5">
          {/* Left content - positioned on left side */}
          <div className="text-white space-y-5 max-w-lg text-left">
            <p className="text-cyan-400 text-xs md:text-sm uppercase tracking-wide font-semibold">
              INTELIGÊNCIA ARTIFICIAL PARA TRANSFORMAR SUA ALIMENTAÇÃO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-left">
              Cuide da sua saúde de forma simples, prática e inteligente
            </h1>
            <p className="text-base md:text-lg text-white drop-shadow-md text-left">
              Com a Ethra, basta enviar uma foto da sua refeição no WhatsApp e receba análises nutricionais completas, relatórios e dicas personalizadas em segundos.
            </p>
            <p className="text-base md:text-lg text-white drop-shadow-md text-left font-medium">
              Sua alimentação inteligente começa hoje.
            </p>
            <Button 
              onClick={scrollToPlans}
              className="bg-white text-gray-700 hover:bg-gray-100 text-sm md:text-base px-8 py-5 rounded-md font-semibold shadow-lg mt-2 uppercase"
            >
              QUERO EXPERIMENTAR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
