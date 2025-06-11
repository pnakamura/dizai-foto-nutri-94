
import React from 'react';
import { Camera, ChartBar, Lightbulb, Smartphone } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Camera className="h-8 w-8 text-[#00C851]" />,
      title: "Análise instantânea",
      description: "Tire uma foto e receba a análise completa da sua refeição em segundos sem precisar digitar nada."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-[#00C851]" />,
      title: "Dados precisos e mensuráveis",
      description: "Descubra tudo sobre sua refeição: calorias, macronutrientes e composição, com alta precisão."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#00C851]" />,
      title: "Recomendações inteligentes",
      description: "Receba dicas personalizadas com base no seu prato e metas direto no WhatsApp."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#00C851]" />,
      title: "Sem downloads",
      description: "Sem apps, sem complicações. Toda a experiência acontece via WhatsApp, com segurança e agilidade."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ethra-dark">
            Transforme sua alimentação com tecnologia e simplicidade.
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#00C851]">
            De forma simples, eficaz e sem complicações.
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com a <span className="text-[#00C851] font-semibold">Ethra</span>, uma simples foto vira uma análise completa precisa, rápida e prática, direto no seu WhatsApp.
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
