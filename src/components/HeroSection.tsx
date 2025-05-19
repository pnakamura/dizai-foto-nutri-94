
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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Rastreamento Nutricional Sem Esforço. <span className="gradient-text">Resultados Reais.</span> Tudo pelo WhatsApp.
        </h1>
        <p className="text-base md:text-xl text-foreground/90 max-w-2xl">
          Tire uma foto do seu prato. Receba instantaneamente calorias, gorduras, carboidratos e dicas personalizadas para emagrecer — sem sair do seu aplicativo de mensagens favorito.
        </p>
        <p className="text-lg md:text-xl italic text-dizai-neon-green font-medium">
          "Revolucione sua jornada de saúde com apenas uma foto enviada no WhatsApp. Sem apps extras, apenas resultados."
        </p>
        <WhatsAppButton 
          buttonText="Comece Agora no WhatsApp"
          fullWidth={true}
          className="mt-4 md:mt-6 text-base md:text-lg py-5 md:py-6 animate-pulse-subtle shadow-lg hover:shadow-neon"
          showBadge={true}
        />
        
        <div className="hidden md:flex justify-center md:justify-start pt-4">
          <button 
            onClick={scrollToFeatures} 
            className="flex items-center gap-2 text-dizai-neon-green hover:text-dizai-neon-green/80 transition-colors focus:outline-none focus:ring-2 focus:ring-dizai-neon-green/50 focus:ring-offset-2 focus:ring-offset-dizai-dark-blue rounded-md p-1"
            aria-label="Veja os recursos"
          >
            <span className="text-sm font-medium">Ver recursos</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative animate-float w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px]">
          <div className="absolute inset-0 bg-dizai-neon-purple/20 blur-3xl rounded-full"></div>
          <div className="relative bg-dizai-dark-blue border border-dizai-light-purple/30 rounded-3xl p-2 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="relative bg-black rounded-2xl overflow-hidden border border-dizai-light-purple/30">
              <img 
                src="/lovable-uploads/a8e49f70-19a6-49f6-97ea-520d6e630e15.png" 
                alt="Mulher fotografando comida para análise nutricional no WhatsApp" 
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-futuristic bg-opacity-90 p-3 md:p-4 text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green animate-pulse"></div>
                  <span className="text-dizai-neon-green font-medium">Analisando... 245 kcal, 15g carboidratos</span>
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
