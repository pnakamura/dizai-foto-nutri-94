
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
    <section className="py-16 md:py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup do iPhone - Mobile First */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-sm w-full">
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center text-sm">
                    <span className="font-medium">7:45 AM</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Interface */}
                  <div className="bg-gray-50 min-h-[500px] p-4">
                    <img 
                      src="/lovable-uploads/3ad11bf0-4844-477e-8c56-e7652567affe.png"
                      alt="Interface do app Ethra mostrando análise nutricional"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
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
