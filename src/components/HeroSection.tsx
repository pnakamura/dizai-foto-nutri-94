
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Carrot, Apple, Dumbbell } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex items-start justify-center px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden pt-8 md:pt-12">
      {/* Elementos decorativos flutuantes no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 animate-float">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
            <Carrot className="w-5 h-5 text-orange-500" />
          </div>
        </div>
        <div className="absolute bottom-40 left-12 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            <Apple className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
            <Dumbbell className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        {/* Círculos decorativos menores */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-200 rounded-full opacity-20 animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo Principal com Elementos Gráficos */}
          <div className="space-y-6 text-center lg:text-left flex flex-col justify-center order-2 lg:order-1">
            {/* Título Principal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Balance Your{' '}
                <span className="text-[#00C851] block">Eating Habits</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
              </p>
            </div>

            {/* Indicadores Nutricionais */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-4">
              {/* Proteína */}
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-green-100">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Prot.</span>
              </div>
              
              {/* Calorias */}
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-orange-100">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Cal.</span>
              </div>
              
              {/* Gordura */}
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-red-100">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Fat.</span>
              </div>
            </div>

            {/* Métricas Nutricionais com Círculos */}
            <div className="flex justify-center lg:justify-start gap-6 py-4">
              {/* Proteína - 23g */}
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                    <circle 
                      cx="32" 
                      cy="32" 
                      r="28" 
                      stroke="#00C851" 
                      strokeWidth="4" 
                      fill="none"
                      strokeDasharray="176"
                      strokeDashoffset="35"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">23g</span>
                  </div>
                </div>
              </div>

              {/* Calorias - 250 */}
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                    <circle 
                      cx="32" 
                      cy="32" 
                      r="28" 
                      stroke="#f97316" 
                      strokeWidth="4" 
                      fill="none"
                      strokeDasharray="176"
                      strokeDashoffset="44"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">250</span>
                  </div>
                </div>
              </div>

              {/* Gordura - 10g */}
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                    <circle 
                      cx="32" 
                      cy="32" 
                      r="28" 
                      stroke="#ef4444" 
                      strokeWidth="4" 
                      fill="none"
                      strokeDasharray="176"
                      strokeDashoffset="123"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">10g</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frase de Impacto */}
            <div className="py-4">
              <p className="text-xl sm:text-2xl font-semibold text-[#00C851] mb-6">
                START A HEALTHY LIFE TODAY!
              </p>
            </div>

            {/* Botão CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                www.yourwebsiteurl.com
              </Button>
            </div>
          </div>
          
          {/* Lado Direito - Imagem do Prato com Borda Verde */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
            <div className="relative">
              {/* Círculo verde de fundo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00C851] to-[#00b348] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#00C851] to-[#00b348] rounded-full"></div>
              
              {/* Container da imagem */}
              <div className="relative bg-white rounded-full p-4 shadow-2xl">
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/9eaf6092-dc32-4852-8ba8-4528e00346fc.png"
                    alt="Prato saudável com alimentos nutritivos"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
