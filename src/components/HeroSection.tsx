
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 px-5 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 space-y-5 md:space-y-7 animate-fade-in text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight break-words text-ethra-dark">
          Pare de contar calorias. <span className="gradient-text-ethra">Deixe a inteligência da Ethra cuidar da sua nutrição.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-ethra-dark/80 max-w-2xl leading-relaxed break-words">
          Com apenas uma foto da sua refeição, você recebe uma análise nutricional completa — com calorias, macronutrientes e orientações personalizadas — direto no seu WhatsApp, em segundos.
        </p>
        <p className="text-base sm:text-lg md:text-xl italic text-ethra-green font-medium leading-relaxed break-words">
          "Sem cadastros. Sem aplicativos. Sem complicação. Apenas resultados."
        </p>
        <WhatsAppButton 
          buttonText="Acesse Agora com 1 Foto"
          fullWidth={true}
          className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg py-5 md:py-6 animate-pulse-subtle shadow-lg hover:shadow-ethra-glow bg-ethra-green hover:bg-ethra-green-dark"
          showBadge={true}
        />
        
        <div className="hidden md:flex justify-center md:justify-start pt-4">
          <button 
            onClick={scrollToFeatures} 
            className="flex items-center gap-2 text-ethra-green hover:text-ethra-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ethra-green/50 focus:ring-offset-2 focus:ring-offset-white rounded-md p-1"
            aria-label="Veja os recursos"
          >
            <span className="text-sm font-medium break-words">Ver recursos</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative animate-float w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px]">
          <div className="absolute inset-0 bg-ethra-green/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white border border-ethra-green/30 rounded-3xl p-2 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="relative bg-ethra-dark rounded-2xl overflow-hidden border border-ethra-green/30">
              <img 
                src="/lovable-uploads/8d74b715-8a44-47ed-92be-4159edbfb736.png" 
                alt="Logo Ethra - Análise nutricional por inteligência artificial" 
                className="w-full h-auto p-8 bg-white"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ethra-dark to-transparent p-2 md:p-3 text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ethra-green animate-pulse flex-shrink-0"></div>
                  <span className="text-ethra-green font-medium break-words">Analisando... 245 kcal, 15g carboidratos</span>
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
