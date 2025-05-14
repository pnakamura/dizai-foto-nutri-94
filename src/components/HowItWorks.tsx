
import React from 'react';

const StepItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start group">
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-neon text-dizai-dark-blue font-bold text-lg md:text-xl mb-3 md:mb-4 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-center md:text-left text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 text-center md:text-left text-sm md:text-base">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24 px-4 md:px-8 bg-dizai-deep-purple/30">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Como <span className="gradient-text">Funciona</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base">
          Apenas três passos simples para obter uma análise nutricional completa.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StepItem 
            number={1} 
            title="Tire uma foto do seu prato" 
            description="Use seu smartphone para fotografar sua refeição com a câmera do WhatsApp."
          />
          <StepItem 
            number={2} 
            title="Envie para o DizAi no WhatsApp" 
            description="Mande a imagem para nosso número e deixe nossa IA fazer a análise."
          />
          <StepItem 
            number={3} 
            title="Receba detalhes nutricionais" 
            description="Instantaneamente receba valores nutricionais e dicas personalizadas para emagrecer."
          />
        </div>
        
        <div className="mt-10 md:mt-16 flex justify-center">
          <div className="glass-card rounded-xl p-5 md:p-8 w-full max-w-3xl hover:border-dizai-neon-green transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center md:text-left">
                  <span className="text-dizai-neon-green text-neon">Acompanhamento</span> Simplificado
                </h3>
                <p className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base text-center md:text-left">
                  DizAi armazena seu histórico de refeições e fornece insights sobre seus hábitos alimentares ao longo do tempo, ajudando você a fazer ajustes para alcançar seus objetivos.
                </p>
                <div className="space-y-2 hidden md:block">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                    <span className="text-xs md:text-sm text-foreground/70">Inteligência artificial avançada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                    <span className="text-xs md:text-sm text-foreground/70">Análise precisa de alimentos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                    <span className="text-xs md:text-sm text-foreground/70">Suporte nutricional 24/7</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="border border-dizai-light-purple/20 rounded-lg p-1 shadow-neon animate-float">
                  <div className="bg-black rounded-md p-3 md:p-4">
                    <div className="text-xs text-dizai-neon-purple mb-1">DizAi • Agora</div>
                    <div className="bg-dizai-deep-purple/50 rounded-lg p-2 md:p-3 max-w-[260px]">
                      <p className="text-xs md:text-sm">Sua refeição tem aproximadamente 520 calorias, 30g de proteína, 15g de gordura, e 50g de carboidratos. Para melhorar resultados, considere reduzir carboidratos na próxima refeição. 💪</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full md:hidden mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-xs text-foreground/70">IA avançada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-xs text-foreground/70">Precisão</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-xs text-foreground/70">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
