
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-8 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem da Interface */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-lg">
              <img 
                src="/lovable-uploads/3ad11bf0-4844-477e-8c56-e7652567affe.png"
                alt="Interface do app Ethra mostrando análise nutricional"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Conteúdo Principal */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ethra-dark">
                Receba sua análise nutricional em segundos.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Foco, resultado e praticidade. Deixe a inteligência da Ethra cuidar da sua nutrição.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                onClick={scrollToPlans}
                className="bg-[#00C851] hover:bg-[#00b348] text-white text-lg md:text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Conheça nossos planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
