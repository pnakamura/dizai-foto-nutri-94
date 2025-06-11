
import React from 'react';
import { Camera, Send, ChartBar, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-[#00C851]" />,
      title: "Fotografe sua refeição",
      description: "Capture direto pelo celular, sem sair do WhatsApp."
    },
    {
      icon: <Send className="h-10 w-10 text-[#00C851]" />,
      title: "Envie no chat da Ethra",
      description: "A inteligência artificial processa automaticamente sua imagem."
    },
    {
      icon: <ChartBar className="h-10 w-10 text-[#00C851]" />,
      title: "Receba a análise completa",
      description: "Veja as calorias, macros e sugestões personalizadas em segundos."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#00C851]" />,
      title: "Acompanhe sua evolução alimentar",
      description: "Tenha acesso ao histórico completo do que você comeu, como comeu e como pode melhorar sua rotina nutricional."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ethra-dark">
            Como funciona a <span className="text-[#00C851]">Ethra</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ethra-dark">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
