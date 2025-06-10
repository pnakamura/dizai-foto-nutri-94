
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'semiannual' | 'annual'>('monthly');

  const plans = {
    monthly: [
      {
        name: 'Essencial',
        price: 'R$ 19,90',
        period: '/mês',
        description: 'Para quem busca praticidade no dia a dia, com uso individual.',
        features: [
          '10 análises por mês',
          'Histórico de 30 dias',
          'Suporte padrão via WhatsApp',
          'IA com sugestões personalizadas'
        ],
        ctaText: 'Quero Começar Sozinho',
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
        ctaText: 'Quero Assinar com Minha Família',
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
        ctaText: 'Quero Usar com Meus Pacientes',
        popular: false
      }
    ],
    semiannual: [
      {
        name: 'Essencial',
        price: 'R$ 99,00',
        period: ' (R$ 16,50/mês)',
        description: 'Para quem busca praticidade no dia a dia, com uso individual.',
        features: [
          '10 análises por mês',
          'Histórico de 30 dias',
          'Suporte padrão via WhatsApp',
          'IA com sugestões personalizadas'
        ],
        ctaText: 'Quero Começar Sozinho',
        popular: false
      },
      {
        name: 'Premium',
        price: 'R$ 199,00',
        period: ' (R$ 33,16/mês)',
        description: 'Ideal para famílias, casais ou times pequenos: até 3 pessoas com contas separadas.',
        features: [
          '3 acessos compartilhados',
          'Histórico completo por usuário',
          'IA com sugestões personalizadas por perfil',
          'Relatórios mensais',
          'Suporte prioritário'
        ],
        ctaText: 'Quero Assinar com Minha Família',
        popular: true
      },
      {
        name: 'Profissional',
        price: 'R$ 549,00',
        period: ' (R$ 91,50/mês)',
        description: 'Para nutricionistas, coaches e clínicas que desejam escalar seu atendimento com tecnologia.',
        features: [
          'Gestão de até 10 clientes',
          'Painel de gestão com perfis individualizados',
          'Envio automatizado de análises para pacientes',
          'Relatórios detalhados por cliente',
          'Integração via API',
          'Suporte técnico dedicado'
        ],
        ctaText: 'Quero Usar com Meus Pacientes',
        popular: false
      }
    ],
    annual: [
      {
        name: 'Essencial',
        price: 'R$ 178,80',
        period: ' (R$ 14,90/mês)',
        description: 'Para quem busca praticidade no dia a dia, com uso individual.',
        features: [
          '10 análises por mês',
          'Histórico de 30 dias',
          'Suporte padrão via WhatsApp',
          'IA com sugestões personalizadas'
        ],
        ctaText: 'Quero Começar Sozinho',
        popular: false
      },
      {
        name: 'Premium',
        price: 'R$ 358,80',
        period: ' (R$ 29,90/mês)',
        description: 'Ideal para famílias, casais ou times pequenos: até 3 pessoas com contas separadas.',
        features: [
          '3 acessos compartilhados',
          'Histórico completo por usuário',
          'IA com sugestões personalizadas por perfil',
          'Relatórios mensais',
          'Suporte prioritário'
        ],
        ctaText: 'Quero Assinar com Minha Família',
        popular: true
      },
      {
        name: 'Profissional',
        price: 'R$ 958,80',
        period: ' (R$ 79,90/mês)',
        description: 'Para nutricionistas, coaches e clínicas que desejam escalar seu atendimento com tecnologia.',
        features: [
          'Gestão de até 10 clientes',
          'Painel de gestão com perfis individualizados',
          'Envio automatizado de análises para pacientes',
          'Relatórios detalhados por cliente',
          'Integração via API',
          'Suporte técnico dedicado'
        ],
        ctaText: 'Quero Usar com Meus Pacientes',
        popular: false
      }
    ]
  };

  const currentPlans = plans[billingCycle];

  return (
    <section id="pricing" className="py-16 md:py-24 px-5 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-5 text-ethra-dark">
            Planos que acompanham sua <span className="gradient-text-ethra">jornada</span>
          </h2>
          <p className="text-ethra-dark/70 max-w-2xl mx-auto text-sm md:text-base mb-8">
            Escolha o plano ideal e aproveite o melhor da nutrição automatizada com inteligência artificial.
          </p>
          
          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 border border-ethra-green/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-ethra-green text-white' 
                    : 'text-ethra-dark hover:text-ethra-green'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('semiannual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'semiannual' 
                    ? 'bg-ethra-green text-white' 
                    : 'text-ethra-dark hover:text-ethra-green'
                }`}
              >
                Semestral
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'annual' 
                    ? 'bg-ethra-green text-white' 
                    : 'text-ethra-dark hover:text-ethra-green'
                }`}
              >
                Anual
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-ethra-green shadow-ethra-glow' 
                  : 'border-gray-200 hover:border-ethra-green/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-ethra-green text-white px-3 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-ethra-dark mb-2">{plan.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-bold text-ethra-green">{plan.price}</span>
                  <span className="text-ethra-dark/60 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-ethra-dark/70">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-ethra-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ethra-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-ethra-green hover:bg-ethra-green-dark text-white shadow-ethra-glow'
                      : 'bg-white text-ethra-green border border-ethra-green hover:bg-ethra-green hover:text-white'
                  }`}
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-ethra-dark/70 max-w-3xl mx-auto text-sm md:text-base">
            Todos os planos contam com acesso direto via WhatsApp, inteligência artificial avançada, e relatórios nutricionais personalizados para cada tipo de usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
