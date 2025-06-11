
import React from 'react';
import { Camera, ChartBar, Lightbulb, Smartphone } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Camera className="h-8 w-8 text-[#00C851]" />,
      title: "Análise instantânea",
      description: "Envie uma foto do seu prato e receba os dados nutricionais em tempo real."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-[#00C851]" />,
      title: "Dados precisos e mensuráveis",
      description: "Calorias, carboidratos, proteínas e gorduras com tecnologia de ponta."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#00C851]" />,
      title: "Recomendações inteligentes",
      description: "Dicas práticas para você atingir seus objetivos com eficiência."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#00C851]" />,
      title: "Sem downloads",
      description: "Tudo acontece dentro do WhatsApp. Simples, seguro e direto ao ponto."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ethra-dark">
            Tecnologia que entende sua alimentação
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A IA da <span className="text-[#00C851] font-semibold">Ethra</span> transforma uma simples foto em dados valiosos para sua saúde com alta precisão e sem burocracia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#00C851]/10 rounded-full transition-all duration-300 hover:bg-[#00C851]/20">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-ethra-dark">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
