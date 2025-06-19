
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Carrot, Apple, Cherry } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden pt-8 md:pt-12">
      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Carrot className="w-5 h-5 text-orange-500" />
          </div>
        </div>
        <div className="absolute bottom-40 left-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Apple className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center">
            <Cherry className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-200 rounded-full opacity-20 animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[85vh]">
          {/* Conteúdo Principal - Texto à Esquerda */}
          <div className="space-y-6 text-left flex flex-col justify-center order-2 lg:order-1">
            {/* Badge superior */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium w-fit">
              🌱 ANÁLISE NUTRICIONAL IA
            </div>

            <div className="space-y-4">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] text-gray-900 tracking-tight max-w-full"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none',
                  textWrap: 'balance',
                  fontWeight: '600'
                }}
              >
                Comece uma vida{' '}
                <span className="text-[#00C851] bg-gradient-to-r from-[#00C851] to-[#00b348] bg-clip-text text-transparent font-bold">
                  saudável
                </span>{' '}
                hoje!
              </h1>
              
              <p 
                className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg font-normal"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none'
                }}
              >
                Envie uma foto da sua refeição via WhatsApp e receba análise nutricional instantânea com{' '}
                <span className="font-medium text-[#00C851]">inteligência artificial</span>.
              </p>
            </div>

            {/* Mini cards de pratos */}
            <div className="flex gap-4 py-4">
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Saladas</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Proteínas</span>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={scrollToPlans}
                className="bg-[#00C851] hover:bg-[#00b348] text-white text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{ 
                  wordBreak: 'keep-all',
                  hyphens: 'none'
                }}
              >
                Conheça nossos planos
              </Button>
            </div>
          </div>
          
          {/* Imagem à Direita - Aumentada ainda mais */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
            {/* Fundo decorativo atrás da imagem */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-20 transform scale-110"></div>
            
            <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl relative z-10">
              <img 
                src="/lovable-uploads/9eaf6092-dc32-4852-8ba8-4528e00346fc.png"
                alt="Mulher sorrindo com tigela de salada saudável e ícones nutricionais"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
