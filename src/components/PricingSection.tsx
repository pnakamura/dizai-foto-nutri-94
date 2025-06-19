import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Heart, Carrot, Apple, Dumbbell } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Premium',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Para famílias e casais que desejam cuidar da alimentação juntos, com perfis individuais e suporte premium.',
      features: [
        '3 acessos compartilhados',
        'Histórico completo por usuário',
        'IA com sugestões personalizadas por perfil',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      ctaText: 'Começar agora',
      popular: false
    },
    {
      name: 'Essencial',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Ideal para quem quer praticidade e autonomia. Use a IA da Ethra no dia a dia, com histórico e sugestões personalizadas.',
      features: [
        'Histórico de 30 dias',
        'Suporte padrão via WhatsApp',
        'IA com sugestões personalizadas'
      ],
      ctaText: 'Começar agora',
      popular: true
    },
    {
      name: 'Profissional',
      price: 'R$ 99,90',
      period: '/mês',
      description: 'Perfeito para profissionais da saúde que querem automatizar o atendimento e oferecer relatórios personalizados com inteligência artificial.',
      features: [
        'Gestão de até 10 clientes',
        'Painel de gestão com perfis individualizados',
        'Envio automatizado de análises para pacientes',
        'Relatórios detalhados por cliente',
        'Integração via API',
        'Suporte técnico dedicado'
      ],
      ctaText: 'Começar agora',
      popular: false
    }
  ];

  return (
    <>
      {/* Segunda seção - Layout seguindo a imagem de referência */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
        {/* Elementos decorativos flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-8 animate-float">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Carrot className="w-5 h-5 text-orange-500" />
            </div>
          </div>
          <div className="absolute bottom-40 left-12 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Apple className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-purple-500" />
            </div>
          </div>
          
          {/* Círculos decorativos */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse-subtle"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-200 rounded-full opacity-20 animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Lado esquerdo - Conteúdo principal */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <h2 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-gray-900 tracking-tight"
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none',
                    textWrap: 'balance',
                    fontWeight: '500'
                  }}
                >
                  Transforme sua{' '}
                  <span className="text-[#00C851] bg-gradient-to-r from-[#00C851] to-[#00b348] bg-clip-text text-transparent font-semibold">
                    alimentação
                  </span>{' '}
                  com tecnologia e simplicidade
                </h2>
                
                <p 
                  className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none'
                  }}
                >
                  De forma simples, eficaz e sem complicações.
                </p>
                
                <p 
                  className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none'
                  }}
                >
                  Com a Ethra, uma simples foto vira uma análise completa{' '}
                  <span className="font-medium text-[#00C851]">precisa, rápida e prática</span>, direto no seu WhatsApp.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  className="bg-[#00C851] hover:bg-[#00b348] text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none',
                    fontWeight: '500'
                  }}
                >
                  Comece uma vida saudável hoje!
                </Button>
              </div>
            </div>
            
            {/* Lado direito - Imagem do prato */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
              <div className="relative">
                {/* Círculo verde de fundo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#00C851] to-[#00b348] rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
                  <div className="relative rounded-full overflow-hidden border-4 border-[#00C851] shadow-2xl">
                    <img 
                      src="/lovable-uploads/640c77f4-06b3-4859-8ebd-02219f42be29.png"
                      alt="Prato saudável com carne grelhada, salada e batatas"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de planos (mantida) */}
      <section id="pricing" className="py-16 md:py-24 px-5 md:px-8 bg-gray-50">
        <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-2xl md:text-4xl font-medium mb-4 md:mb-5 text-gray-900 leading-tight tracking-tight"
            style={{ 
              wordBreak: 'keep-all',
              hyphens: 'none',
              textWrap: 'balance',
              fontWeight: '500'
            }}
          >
            Escolha o plano ideal e comece a{' '}
            <span className="text-[#00C851] bg-gradient-to-r from-[#00C851] to-[#00b348] bg-clip-text text-transparent font-semibold">
              evoluir hoje
            </span>
          </h2>
          <p 
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mb-8 font-light leading-relaxed"
            style={{ 
              wordBreak: 'keep-all',
              hyphens: 'none'
            }}
          >
            Compare os planos e veja como a Ethra pode transformar sua rotina nutricional, com praticidade e eficiência desde o primeiro uso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-[#00C851] shadow-lg shadow-[#00C851]/20' 
                  : 'border-gray-200 hover:border-[#00C851]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00C851] text-white px-3 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle 
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontWeight: '500' }}
                >
                  {plan.name}
                </CardTitle>
                <div className="mb-3">
                  <span 
                    className="text-2xl md:text-3xl font-semibold text-[#00C851]"
                    style={{ fontWeight: '600' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm font-light">{plan.period}</span>
                </div>
                <p 
                  className="text-sm text-gray-500 font-light leading-relaxed"
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none'
                  }}
                >
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#00C851] mt-0.5 flex-shrink-0" />
                      <span 
                        className="text-sm text-gray-600 font-light"
                        style={{ 
                          wordBreak: 'keep-all',
                          hyphens: 'none'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 font-medium rounded-full py-3 ${
                    plan.popular
                      ? 'bg-[#00C851] hover:bg-[#00b348] text-white shadow-lg shadow-[#00C851]/20 hover:shadow-xl transform hover:scale-105'
                      : 'bg-white text-[#00C851] border border-[#00C851] hover:bg-[#00C851] hover:text-white'
                  }`}
                  style={{ 
                    wordBreak: 'keep-all',
                    hyphens: 'none',
                    fontWeight: '500'
                  }}
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PricingSection;
