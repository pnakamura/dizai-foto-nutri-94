
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

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
  );
};

export default PricingSection;
