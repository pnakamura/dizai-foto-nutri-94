
import React from 'react';

const StepItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start group">
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-ethra-green text-white font-bold text-lg md:text-xl mb-3 md:mb-4 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-center md:text-left text-lg md:text-xl font-semibold mb-2 text-ethra-dark">{title}</h3>
      <p className="text-ethra-dark/70 text-center md:text-left text-sm md:text-base">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-ethra-dark">
          Como funciona a <span className="gradient-text-ethra">Ethra em 3 passos simples</span>
        </h2>
        <p className="text-ethra-dark/70 max-w-2xl mx-auto text-sm md:text-base">
          De uma foto à sua análise nutricional em menos de 60 segundos.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StepItem 
            number={1} 
            title="Fotografe sua refeição" 
            description="Tire a foto direto pelo seu celular, sem sair do WhatsApp."
          />
          <StepItem 
            number={2} 
            title="Envie no chat da Ethra" 
            description="A inteligência artificial processa automaticamente sua imagem."
          />
          <StepItem 
            number={3} 
            title="Receba a avaliação completa" 
            description="Veja as calorias, macronutrientes e sugestões personalizadas de forma instantânea."
          />
        </div>
        
        <div className="mt-10 md:mt-16 flex justify-center">
          <div className="glass-card-ethra rounded-xl p-5 md:p-8 w-full max-w-3xl hover:border-ethra-green transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center md:text-left text-ethra-dark">
                  <span className="text-ethra-green text-neon-ethra">Acompanhamento</span> Simplificado
                </h3>
                <p className="text-ethra-dark/70 mb-4 md:mb-6 text-sm md:text-base text-center md:text-left">
                  A Ethra também acompanha seu histórico alimentar e envia insights semanais para melhorar sua rotina nutricional de forma progressiva.
                </p>
                <div className="space-y-2 hidden md:block">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                    <span className="text-xs md:text-sm text-ethra-dark/60">Inteligência artificial avançada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                    <span className="text-xs md:text-sm text-ethra-dark/60">Análise precisa de alimentos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                    <span className="text-xs md:text-sm text-ethra-dark/60">Suporte nutricional 24/7</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="border border-ethra-green/20 rounded-lg p-1 shadow-ethra-glow animate-float">
                  <div className="bg-ethra-dark rounded-md p-3 md:p-4">
                    <div className="text-xs text-ethra-green mb-1">Ethra • Agora</div>
                    <div className="bg-gray-700/50 rounded-lg p-2 md:p-3 max-w-[260px]">
                      <p className="text-xs md:text-sm text-white">Sua refeição tem aproximadamente 520 calorias, 30g de proteína, 15g de gordura, e 50g de carboidratos. Para melhorar resultados, considere reduzir carboidratos na próxima refeição. 💪</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full md:hidden mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                  <span className="text-xs text-ethra-dark/60">IA avançada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                  <span className="text-xs text-ethra-dark/60">Precisão</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ethra-green"></div>
                  <span className="text-xs text-ethra-dark/60">24/7</span>
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
