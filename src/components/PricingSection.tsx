import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'PREMIUM',
      price: '37,90',
      description: 'Para famílias e casais que desejam cuidar da alimentação juntos, com perfis individuais e suporte premium.',
      features: [
        '3 acessos compartilhados',
        'Histórico completo',
        'IA com sugestões personalizadas',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      highlighted: false
    },
    {
      name: 'ESSENCIAL',
      price: '19,90',
      description: 'Ideal para quem quer praticidade e autonomia. Use a IA da Ethra no dia a dia.',
      features: [
        'Histórico de 30 dias',
        'Suporte padrão via WhatsApp',
        'IA com sugestões personalizadas'
      ],
      highlighted: true
    },
    {
      name: 'PROFISSIONAL',
      price: '99,90',
      description: 'Perfeito para profissionais da saúde que querem automatizar o atendimento.',
      features: [
        'Gestão de até 10 clientes',
        'Painel de gestão completo',
        'Envio automatizado de análises',
        'Relatórios detalhados',
        'Integração via API',
        'Suporte técnico dedicado'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#7CB342] relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <div className="w-full h-full bg-green-900/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <div className="w-full h-full bg-green-900/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Planos para cada necessidade
        </h2>
        <p className="text-lg text-white/90 text-center mb-12 max-w-2xl mx-auto">
          + MAIS POPULAR
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 bg-white ${
                plan.highlighted
                  ? 'ring-4 ring-white shadow-2xl transform scale-105'
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-sm text-gray-600">R$</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#7CB342]" />
                    <span className="text-sm text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <WhatsAppButton
                buttonText="EU QUERO ESSE PLANO"
                fullWidth
                className="bg-[#7CB342] hover:bg-[#689F38] text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
