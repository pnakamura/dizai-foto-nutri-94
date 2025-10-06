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
    <section className="relative overflow-hidden py-16 md:py-24 min-h-[600px] md:min-h-[700px]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Cuide da sua saúde de forma simples, prática e inteligente
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-md">
              Com a Ethra, tornar-se uma foto rápida em sua refeição e receba informações nutricionais completas.
            </p>
            <p className="text-base md:text-lg text-white drop-shadow-md">
              Não é necessário baixar nenhum aplicativo, tudo é via Whatsapp.
            </p>
            <Button 
              onClick={scrollToPlans}
              className="bg-white text-[#7CB342] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg"
            >
              CONHEÇA OS PLANOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
