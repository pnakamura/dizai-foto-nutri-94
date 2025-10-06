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
      <div className="container mx-auto px-6 h-full flex items-center justify-end relative z-10">
        <div className="w-full lg:w-1/2 xl:w-2/5 lg:ml-auto">
          {/* Right content - positioned away from hands */}
          <div className="text-white space-y-5 max-w-xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-left">
              Cuide da sua saúde de forma simples, prática e inteligente
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-md text-left">
              Com a Ethra, tornar-se uma foto rápida em sua refeição e receba informações nutricionais completas.
            </p>
            <p className="text-base md:text-lg text-white drop-shadow-md text-left">
              Não é necessário baixar nenhum aplicativo, tudo é via Whatsapp.
            </p>
            <Button 
              onClick={scrollToPlans}
              className="bg-white text-[#7CB342] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg mt-2"
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
