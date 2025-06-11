
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
                    <span className="font-medium">WhatsApp</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="bg-gray-50 min-h-[500px] p-4 space-y-4">
                    {/* Mensagem do usuário */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-2xl rounded-br-md p-3 max-w-[80%]">
                        <div className="bg-white rounded-lg p-2 mb-2">
                          <img 
                            src="/lovable-uploads/a8e49f70-19a6-49f6-97ea-520d6e630e15.png"
                            alt="Foto da refeição"
                            className="w-full h-24 object-cover rounded"
                          />
                        </div>
                        <p className="text-sm">Análise nutricional, por favor!</p>
                      </div>
                    </div>
                    
                    {/* Resposta da Ethra */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-bl-md p-4 max-w-[85%] shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-[#00C851] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">E</span>
                          </div>
                          <span className="font-semibold text-sm text-[#00C851]">Ethra</span>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-gray-900">Frango grelhado</p>
                          <p className="text-gray-900 font-semibold">248 kcal</p>
                          <p className="text-gray-600 text-sm">18g carboidratos</p>
                          <p className="text-gray-600 text-sm">35g proteínas</p>
                          <p className="text-gray-600 text-sm">8g gorduras</p>
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs text-gray-600">💡 Excelente escolha! Rico em proteínas e baixo em gorduras.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conteúdo Principal */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ethra-dark">
                Tire uma foto do seu prato e receba sua análise nutricional completa em segundos.
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
