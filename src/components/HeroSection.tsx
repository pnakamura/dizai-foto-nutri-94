
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Rastreamento Nutricional <span className="gradient-text">Sem Esforço.</span> Resultados Reais. Tudo pelo WhatsApp.
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
          Basta tirar e enviar uma foto do seu prato pelo WhatsApp. Descubra instantaneamente calorias, gorduras, carboidratos e receba dicas personalizadas para emagrecer, tudo no seu app de mensagens favorito.
        </p>
        <Button 
          size="lg" 
          className="bg-[#25D366] hover:bg-[#128C7E] text-white whatsapp-button mt-6 px-8 py-6 text-lg"
        >
          <MessageSquare className="mr-2 h-6 w-6" />
          Comece Agora no WhatsApp
        </Button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-dizai-neon-purple/20 blur-3xl rounded-full"></div>
          <div className="relative bg-dizai-dark-blue border border-dizai-light-purple/20 rounded-3xl p-2 shadow-lg transform rotate-3">
            <div className="relative bg-black rounded-2xl overflow-hidden border border-dizai-light-purple/30">
              <img 
                src="/placeholder.svg" 
                alt="DizAi em ação" 
                className="w-full max-w-[300px] h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-futuristic bg-opacity-80 p-4 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green animate-pulse"></div>
                  <span className="text-dizai-neon-green font-medium">Analisando... 245 kcal, 15g carbs</span>
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
