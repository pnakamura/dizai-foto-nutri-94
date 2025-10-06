import React from 'react';
import { Clock, Heart, Award, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsSection: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Controle Imediato',
      description: 'Saiba na hora o que está comendo'
    },
    {
      icon: Heart,
      title: 'Equilíbrio Personalizado',
      description: 'Recomendações feitas para você'
    },
    {
      icon: Award,
      title: 'Resultados Claros',
      description: 'Veja seu progresso de forma visual'
    },
    {
      icon: TrendingUp,
      title: 'Motivação + Foco',
      description: 'Mantenha-se no caminho certo'
    },
    {
      icon: Target,
      title: 'Tecnologia + Saúde',
      description: 'IA a seu favor todos os dias'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          O que você ganha com a Ethra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#7CB342] transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-[#7CB342]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToPlans}
            className="bg-[#7CB342] hover:bg-[#689F38] text-white text-lg px-8 py-6 rounded-full font-semibold"
          >
            CONHEÇA OS PLANOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
