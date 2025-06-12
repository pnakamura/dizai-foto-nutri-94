
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
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 bg-gradient-to-br from-white via-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Conteúdo Principal - Texto à Esquerda */}
          <div className="space-y-8 text-left flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-6">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-ethra-dark tracking-tight max-w-full"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none',
                  textWrap: 'balance'
                }}
              >
                Receba sua análise nutricional em{' '}
                <span className="text-[#00C851] bg-gradient-to-r from-[#00C851] to-[#00b348] bg-clip-text text-transparent">
                  segundos
                </span>
                .
              </h1>
              
              <p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none'
                }}
              >
                Foco, resultado e praticidade. Deixe a inteligência da{' '}
                <span className="font-semibold text-[#00C851]">Ethra</span>{' '}
                cuidar da sua nutrição.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                onClick={scrollToPlans}
                className="bg-[#00C851] hover:bg-[#00b348] text-white text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none'
                }}
              >
                Conheça nossos planos
              </Button>
            </div>
          </div>
          
          {/* Imagem à Direita */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img 
                src="/lovable-uploads/3ad11bf0-4844-477e-8c56-e7652567affe.png"
                alt="Interface do app Ethra mostrando análise nutricional"
                className="w-full h-auto object-contain rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
