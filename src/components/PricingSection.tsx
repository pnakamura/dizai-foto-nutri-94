
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Para quem busca praticidade no dia a dia, com uso individual.',
      features: [
        'Histórico de 30 dias',
        'Suporte padrão via WhatsApp',
        'IA com sugestões personalizadas'
      ],
      ctaText: 'Comprar agora',
      popular: false
    },
    {
      name: 'Premium',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Ideal para famílias, casais ou times pequenos: até 3 pessoas com contas separadas.',
      features: [
        '3 acessos compartilhados',
        'Histórico completo por usuário',
        'IA com sugestões personalizadas por perfil',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      ctaText: 'Comprar agora',
      popular: true
    },
    {
      name: 'Profissional',
      price: 'R$ 99,90',
      period: '/mês',
      description: 'Para nutricionistas, coaches e clínicas que desejam escalar seu atendimento com tecnologia.',
      features: [
        'Gestão de até 10 clientes',
        'Painel de gestão com perfis individualizados',
        'Envio automatizado de análises para pacientes',
        'Relatórios detalhados por cliente',
        'Integração via API',
        'Suporte técnico dedicado'
      ],
      ctaText: 'Comprar agora',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-5 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-5 text-ethra-dark">
            Planos que acompanham sua <span className="text-[#00C851]">jornada</span>
          </h2>
          <p className="text-ethra-dark/70 max-w-2xl mx-auto text-sm md:text-base mb-8">
            Escolha o plano ideal e aproveite o melhor da nutrição automatizada com inteligência artificial.
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
                <CardTitle className="text-xl font-bold text-ethra-dark mb-2">{plan.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-bold text-[#00C851]">{plan.price}</span>
                  <span className="text-ethra-dark/60 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-ethra-dark/70">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#00C851] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ethra-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#00C851] hover:bg-[#00b348] text-white shadow-lg shadow-[#00C851]/20'
                      : 'bg-white text-[#00C851] border border-[#00C851] hover:bg-[#00C851] hover:text-white'
                  }`}
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
