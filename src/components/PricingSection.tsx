import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import leafPricing1 from '@/assets/leaf-pricing-1.png';
import leafPricing2 from '@/assets/leaf-pricing-2.png';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'PREMIUM',
      price: '37,90',
      description: 'Para famílias e casais que querem evoluir juntos',
      features: [
        '3 acessos compartilhados',
        'Histórico completo',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      buttonText: 'ASSINAR PREMIUM',
      highlighted: false
    },
    {
      name: 'ESSENCIAL',
      price: '19,90',
      description: 'Ideal para quem busca praticidade no dia a dia',
      features: [
        'Histórico de 30 dias',
        'IA com sugestões personalizadas',
        'Suporte via WhatsApp'
      ],
      buttonText: 'COMEÇAR COM ESSENCIAL',
      highlighted: true,
      badge: '+ MAIS POPULAR'
    },
    {
      name: 'PROFISSIONAL',
      price: '99,90',
      description: 'Feito para nutricionistas e profissionais da saúde',
      features: [
        'Gestão de até 10 clientes',
        'Painel de gestão completo',
        'Integração via API',
        'Suporte técnico dedicado'
      ],
      buttonText: 'QUERO O PROFISSIONAL',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#8BA675] relative overflow-hidden">
      {/* Decorative leaves */}
      <img 
        src={leafPricing1}
        alt=""
        className="absolute top-8 left-8 w-32 h-32 md:w-48 md:h-48 opacity-80"
      />
      <img 
        src={leafPricing2}
        alt=""
        className="absolute bottom-8 right-8 w-24 h-24 md:w-40 md:h-40 opacity-80"
      />
      <img 
        src={leafPricing1}
        alt=""
        className="absolute top-1/2 right-16 w-28 h-28 md:w-36 md:h-36 opacity-70"
      />
      <img 
        src={leafPricing2}
        alt=""
        className="absolute bottom-1/3 left-16 w-20 h-20 md:w-32 md:h-32 opacity-70"
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Planos para cada necessidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-[#5A7D3C] text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div
                className={`rounded-2xl p-6 bg-white shadow-lg transition-all duration-300 ${
                  plan.highlighted ? 'mt-4' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-3 text-[#5A7D3C]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-xs text-gray-600 mr-1">POR</span>
                    <span className="text-4xl font-bold text-[#5A7D3C]">{plan.price}</span>
                    <span className="text-gray-600 ml-1 text-sm">/mês</span>
                  </div>
                  <p className="text-xs text-gray-600 px-2">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-gray-500 text-sm mt-0.5">//</span>
                      <span className="text-xs text-gray-700 italic">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <WhatsAppButton
                  buttonText={plan.buttonText}
                  fullWidth
                  className="bg-[#8BA675] hover:bg-[#7CA565] text-white text-xs py-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
