
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const HeroSection: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 space-y-4 md:space-y-6 animate-fade-in text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Rastreamento Nutricional Sem Esforço. <span className="gradient-text">Resultados Reais.</span> Tudo pelo WhatsApp.
        </h1>
        <p className="text-base md:text-xl text-foreground/80 max-w-2xl">
          Tire uma foto do seu prato. Receba instantaneamente calorias, gorduras, carboidratos e dicas personalizadas para emagrecer — sem sair do seu aplicativo de mensagens favorito.
        </p>
        <p className="text-lg md:text-xl italic text-dizai-neon-green">
          "Revolucione sua jornada de saúde com apenas uma foto enviada no WhatsApp. Sem apps extras, apenas resultados."
        </p>
        <WhatsAppButton 
          buttonText="Comece Agora no WhatsApp"
          fullWidth={true}
          className="mt-4 md:mt-6 text-base md:text-lg py-5 md:py-6 animate-pulse-subtle"
        />
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative animate-float w-full max-w-[280px] md:max-w-[300px]">
          <div className="absolute inset-0 bg-dizai-neon-purple/20 blur-3xl rounded-full"></div>
          <div className="relative bg-dizai-dark-blue border border-dizai-light-purple/20 rounded-3xl p-2 shadow-lg transform rotate-3">
            <div className="relative bg-black rounded-2xl overflow-hidden border border-dizai-light-purple/30">
              <img 
                src="/lovable-uploads/a8e49f70-19a6-49f6-97ea-520d6e630e15.png" 
                alt="Mulher fotografando comida para análise nutricional no WhatsApp" 
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-futuristic bg-opacity-80 p-3 md:p-4 text-xs">
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
