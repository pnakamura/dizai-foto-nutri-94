import React from 'react';
import { Button } from '@/components/ui/button';
import heroBowl from '@/assets/hero-bowl.jpg';

const HeroSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#7CB342] overflow-hidden py-16 md:py-24">
      {/* Background ethra text pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="text-[200px] md:text-[300px] font-bold text-white/30 leading-none">
          ethra<br/>ethra<br/>ethra
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cuide da sua saúde de forma simples, prática e inteligente
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Com a Ethra, tornar-se uma foto rápida em sua refeição e receba informações nutricionais completas.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Não é necessário baixar nenhum aplicativo, tudo é via Whatsapp.
            </p>
            <Button 
              onClick={scrollToPlans}
              className="bg-white text-[#7CB342] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
            >
              CONHEÇA OS PLANOS
            </Button>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img 
              src={heroBowl}
              alt="Mãos segurando tigela saudável"
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
