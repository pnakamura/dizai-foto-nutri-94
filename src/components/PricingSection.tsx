
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const PricingSection = () => {
  // URL codificado com mensagem específica para cada plano
  const whatsappBasicMessage = encodeURIComponent("Olá! Quero saber mais sobre o plano Básico do Diz aí.");
  const whatsappPremiumMessage = encodeURIComponent("Olá! Quero saber mais sobre o plano Premium do Diz aí.");
  const whatsappProfessionalMessage = encodeURIComponent("Olá! Quero saber mais sobre o plano Profissional do Diz aí.");
  const whatsappTrialMessage = encodeURIComponent("Olá! Quero experimentar o teste grátis por 7 dias do Diz aí.");

  return (
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Planos e Preços</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg">
            Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de saúde agora.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Plano Básico */}
          <div className="bg-dizai-deep-purple/30 border border-dizai-light-purple/20 rounded-xl p-6 md:p-8 flex flex-col transition-transform hover:transform hover:scale-105">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Básico</h3>
              <p className="text-foreground/70 mb-4">Perfeito para começar sua jornada</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl md:text-4xl font-bold">R$39</span>
                <span className="text-foreground/60 ml-2">/mês</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Análise básica de alimentos</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>10 análises nutricionais por mês</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Histórico de 30 dias</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Acesso ao suporte via WhatsApp</span>
                </li>
              </ul>
            </div>
            
            <Button 
              asChild
              className="w-full bg-gradient-button hover:opacity-90"
            >
              <a href={`https://wa.me/555189457133?text=${whatsappBasicMessage}`}>
                Começar Grátis
              </a>
            </Button>
          </div>
          
          {/* Plano Premium */}
          <div className="bg-dizai-deep-purple/30 border-2 border-dizai-neon-green rounded-xl p-6 md:p-8 flex flex-col relative transform scale-105 shadow-lg shadow-dizai-neon-green/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dizai-neon-green px-4 py-1 rounded-full text-dizai-dark-blue font-medium text-sm">
              Mais Popular
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-foreground/70 mb-4">Para quem quer resultados rápidos</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl md:text-4xl font-bold">R$79</span>
                <span className="text-foreground/60 ml-2">/mês</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Análise detalhada de alimentos</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>50 análises nutricionais por mês</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Histórico completo</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Acesso prioritário ao suporte</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Recomendações alimentares</span>
                </li>
              </ul>
            </div>
            
            <Button 
              asChild
              className="w-full bg-dizai-neon-green text-black hover:bg-dizai-neon-green/90"
            >
              <a href={`https://wa.me/555189457133?text=${whatsappPremiumMessage}`}>
                Assinar Agora
              </a>
            </Button>
          </div>
          
          {/* Plano Profissional */}
          <div className="bg-dizai-deep-purple/30 border border-dizai-light-purple/20 rounded-xl p-6 md:p-8 flex flex-col transition-transform hover:transform hover:scale-105">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Profissional</h3>
              <p className="text-foreground/70 mb-4">Para profissionais da saúde</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl md:text-4xl font-bold">R$199</span>
                <span className="text-foreground/60 ml-2">/mês</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Todas as funcionalidades Premium</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Análises ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Painel de gerenciamento de pacientes</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>API para integração com sistemas</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Relatórios avançados para pacientes</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-2" />
                  <span>Suporte dedicado</span>
                </li>
              </ul>
            </div>
            
            <Button 
              asChild
              className="w-full bg-gradient-button hover:opacity-90"
            >
              <a href={`https://wa.me/555189457133?text=${whatsappProfessionalMessage}`}>
                Fale com um Consultor
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-foreground/60 text-sm md:text-base mb-6">
            Não tem certeza qual plano escolher? Experimente gratuitamente por 7 dias sem compromisso.
          </p>
          <Button 
            asChild
            className="bg-dizai-neon-green text-black hover:bg-dizai-neon-green/90"
          >
            <a href={`https://wa.me/555189457133?text=${whatsappTrialMessage}`}>
              Teste Grátis por 7 Dias
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
