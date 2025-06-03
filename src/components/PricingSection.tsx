
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
    <section id="pricing" className="py-16 md:py-24 px-4 relative overflow-hidden bg-gray-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dizai-brand-green/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Limited Time Offer Banner */}
        <div className="text-center mb-8">
          <Badge className="bg-dizai-brand-orange text-white px-3 py-2 text-xs sm:text-sm font-semibold animate-pulse-subtle break-words">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
            <span className="break-words">Oferta Limitada - 60% OFF</span>
          </Badge>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text break-words">Planos e Preços</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed break-words">
            Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de saúde agora.
          </p>
          <p className="text-dizai-brand-green font-semibold mt-2 text-sm sm:text-base break-words">
            🎉 Economia de até R$119,40/mês com nossos preços promocionais!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Plano Básico */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-dizai-brand-green/20 relative">
            <Badge className="absolute -top-3 left-2 sm:left-4 bg-dizai-brand-green text-white font-bold text-xs break-words">
              60% OFF
            </Badge>
            
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 break-words text-foreground">Básico</h3>
              <p className="text-foreground/80 mb-4 text-sm sm:text-base break-words">Perfeito para começar sua jornada</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-foreground/60 line-through break-words">De R$39/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-dizai-brand-green break-words">R$15,60</span>
                    <span className="text-foreground/60 ml-2 text-sm break-words">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-dizai-brand-green font-medium break-words">Economia de R$23,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Análise básica de alimentos</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">10 análises nutricionais por mês</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Histórico de 30 dias</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Acesso ao suporte via WhatsApp</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Assinar Agora"
              className="mb-3 text-sm"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center break-words">
                <Shield className="w-3 h-3 mr-1 flex-shrink-0" />
                Garantia de 7 dias
              </p>
            </div>
          </div>
          
          {/* Plano Premium */}
          <div className="bg-white border-2 border-dizai-brand-green rounded-xl p-4 sm:p-6 md:p-8 flex flex-col relative transform md:scale-105 shadow-xl shadow-dizai-brand-green/30">
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-dizai-brand-green px-3 sm:px-6 py-1 sm:py-2 rounded-full text-white font-bold text-xs sm:text-sm break-words">
              Mais Popular
            </div>
            
            <Badge className="absolute -top-3 right-2 sm:right-4 bg-dizai-brand-orange text-white font-bold text-xs break-words">
              60% OFF
            </Badge>
            
            <div className="mb-4 mt-3 sm:mt-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 break-words text-foreground">Premium</h3>
              <p className="text-foreground/80 mb-4 text-sm sm:text-base break-words">Para quem quer resultados rápidos</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-foreground/60 line-through break-words">De R$79/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-dizai-brand-green break-words">R$31,60</span>
                    <span className="text-foreground/60 ml-2 text-sm break-words">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-dizai-brand-green font-medium break-words">Economia de R$47,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Análise detalhada de alimentos</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">50 análises nutricionais por mês</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Histórico completo</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Acesso prioritário ao suporte</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Relatórios personalizados</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Recomendações alimentares</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Assinar Agora"
              className="mb-3 bg-dizai-brand-green text-white hover:bg-dizai-brand-green/90 text-sm"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center break-words">
                <Shield className="w-3 h-3 mr-1 flex-shrink-0" />
                Garantia de 14 dias
              </p>
            </div>
          </div>
          
          {/* Plano Profissional */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-dizai-brand-green/20 relative">
            <Badge className="absolute -top-3 left-2 sm:left-4 bg-dizai-brand-green text-white font-bold text-xs break-words">
              60% OFF
            </Badge>
            
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 break-words text-foreground">Profissional</h3>
              <p className="text-foreground/80 mb-4 text-sm sm:text-base break-words">Para profissionais da saúde</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-foreground/60 line-through break-words">De R$199/mês</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-dizai-brand-green break-words">R$79,60</span>
                    <span className="text-foreground/60 ml-2 text-sm break-words">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-dizai-brand-green font-medium break-words">Economia de R$119,40/mês</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Todas as funcionalidades Premium</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Análises ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Painel de gerenciamento de pacientes</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">API para integração com sistemas</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Relatórios avançados para pacientes</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-dizai-brand-green mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-words text-foreground">Suporte dedicado</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              fullWidth={true}
              buttonText="Fale com um Consultor"
              className="mb-3 text-sm"
            />
            
            <div className="text-center">
              <p className="text-xs text-foreground/60 flex items-center justify-center break-words">
                <Shield className="w-3 h-3 mr-1 flex-shrink-0" />
                Garantia de 30 dias
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-foreground/80 text-sm md:text-base mb-4 leading-relaxed break-words">
              Não tem certeza qual plano escolher? Experimente gratuitamente por 7 dias sem compromisso.
            </p>
            <p className="text-dizai-brand-green text-xs sm:text-sm mb-6 font-medium break-words">
              ✅ Sem cartão de crédito • ✅ Cancelamento gratuito • ✅ Suporte completo
            </p>
            <WhatsAppButton 
              buttonText="Teste Grátis por 7 Dias"
              showBadge={true}
              className="bg-dizai-brand-green text-white hover:bg-dizai-brand-green/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
            />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-xs sm:text-sm mb-4 break-words">Mais de 10.000 pessoas já transformaram sua saúde com o Diz aí</p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs text-foreground/50">
            <span className="flex items-center break-words">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              Dados protegidos
            </span>
            <span>•</span>
            <span className="break-words">Suporte 24/7</span>
            <span>•</span>
            <span className="break-words">Satisfação garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
