
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import WhatsAppButton from '@/components/WhatsAppButton';

const PricingSection = () => {
  // URL codificado com mensagem específica para cada plano
  const whatsappBasicMessage = encodeURIComponent("Olá! Quero assinar o plano Básico do Diz aí por R$15,60/mês.");
  const whatsappPremiumMessage = encodeURIComponent("Olá! Quero assinar o plano Premium do Diz aí por R$31,60/mês.");
  const whatsappProfessionalMessage = encodeURIComponent("Olá! Quero saber mais sobre o plano Profissional do Diz aí por R$79,60/mês.");
  const whatsappTrialMessage = encodeURIComponent("Olá! Quero experimentar o teste grátis por 7 dias do Diz aí.");

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dizai-deep-purple/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Limited Time Offer Banner */}
        <div className="text-center mb-8">
          <Badge className="bg-dizai-accent-pink text-white px-4 py-2 text-sm font-semibold animate-pulse-subtle">
            <Clock className="w-4 h-4 mr-2" />
            Oferta Limitada - 60% OFF
          </Badge>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Planos e Preços</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-base md:text-lg">
            Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de saúde agora.
          </p>
          <p className="text-dizai-neon-green font-semibold mt-2">
            🎉 Economia de até R$119,40/mês com nossos preços promocionais!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Plano Básico */}
          <div className="bg-dizai-deep-purple/40 border border-dizai-light-purple/30 rounded-xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-dizai-neon-green/20 relative">
            <Badge className="absolute -top-3 left-4 bg-dizai-neon-green text-dizai-dark-blue font-bold">
              60% OFF
            </Badge>
            
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Básico</h3>
              <p className="text-foreground/80 mb-4">Perfeito para começar sua jornada</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60 line-through">De R$39/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-dizai-neon-green">R$15,60</span>
                    <span className="text-foreground/60 ml-2">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-dizai-neon-green font-medium">Economia de R$23,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Análise básica de alimentos</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>10 análises nutricionais por mês</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Histórico de 30 dias</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Acesso ao suporte via WhatsApp</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Assinar Agora"
              className="mb-3"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Garantia de 7 dias
              </p>
            </div>
          </div>
          
          {/* Plano Premium */}
          <div className="bg-dizai-deep-purple/40 border-2 border-dizai-neon-green rounded-xl p-6 md:p-8 flex flex-col relative transform scale-105 shadow-xl shadow-dizai-neon-green/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dizai-neon-green px-6 py-2 rounded-full text-dizai-dark-blue font-bold text-sm">
              Mais Popular
            </div>
            
            <Badge className="absolute -top-3 right-4 bg-dizai-accent-pink text-white font-bold">
              60% OFF
            </Badge>
            
            <div className="mb-4 mt-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-foreground/80 mb-4">Para quem quer resultados rápidos</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60 line-through">De R$79/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-dizai-neon-green">R$31,60</span>
                    <span className="text-foreground/60 ml-2">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-dizai-neon-green font-medium">Economia de R$47,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Análise detalhada de alimentos</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>50 análises nutricionais por mês</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Histórico completo</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Acesso prioritário ao suporte</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Recomendações alimentares</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Assinar Agora"
              className="mb-3 bg-dizai-neon-green text-dizai-dark-blue hover:bg-dizai-neon-green/90"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Garantia de 14 dias
              </p>
            </div>
          </div>
          
          {/* Plano Profissional */}
          <div className="bg-dizai-deep-purple/40 border border-dizai-light-purple/30 rounded-xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-dizai-neon-green/20 relative">
            <Badge className="absolute -top-3 left-4 bg-dizai-neon-green text-dizai-dark-blue font-bold">
              60% OFF
            </Badge>
            
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Profissional</h3>
              <p className="text-foreground/80 mb-4">Para profissionais da saúde</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60 line-through">De R$199/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-dizai-neon-green">R$79,60</span>
                    <span className="text-foreground/60 ml-2">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-dizai-neon-green font-medium">Economia de R$119,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Todas as funcionalidades Premium</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Análises ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Painel de gerenciamento de pacientes</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>API para integração com sistemas</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Relatórios avançados para pacientes</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-dizai-neon-green mr-3 flex-shrink-0" />
                  <span>Suporte dedicado</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Fale com um Consultor"
              className="mb-3"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Garantia de 30 dias
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-dizai-deep-purple/30 border border-dizai-neon-green/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-foreground/80 text-sm md:text-base mb-4">
              Não tem certeza qual plano escolher? Experimente gratuitamente por 7 dias sem compromisso.
            </p>
            <p className="text-dizai-neon-green text-sm mb-6 font-medium">
              ✅ Sem cartão de crédito • ✅ Cancelamento gratuito • ✅ Suporte completo
            </p>
            <WhatsAppButton 
              buttonText="Teste Grátis por 7 Dias"
              showBadge={true}
              className="bg-dizai-neon-green text-dizai-dark-blue hover:bg-dizai-neon-green/90 text-lg px-8 py-4"
            />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-sm mb-4">Mais de 10.000 pessoas já transformaram sua saúde com o Diz aí</p>
          <div className="flex justify-center items-center space-x-6 text-xs text-foreground/50">
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Dados protegidos
            </span>
            <span>•</span>
            <span>Suporte 24/7</span>
            <span>•</span>
            <span>Satisfação garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
