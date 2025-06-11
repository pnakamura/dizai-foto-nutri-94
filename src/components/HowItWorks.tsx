
import React from 'react';
import { Camera, Send, ChartBar } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-[#00C851]" />,
      title: "Envie uma foto do seu prato",
      description: "Capture direto pelo celular, sem sair do WhatsApp."
    },
    {
      icon: <Send className="h-10 w-10 text-[#00C851]" />,
      title: "Receba os dados nutricionais automaticamente",
      description: "A inteligência artificial processa automaticamente sua imagem."
    },
    {
      icon: <ChartBar className="h-10 w-10 text-[#00C851]" />,
      title: "Acompanhe seu progresso no WhatsApp",
      description: "Tenha acesso ao histórico completo e evolução alimentar."
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-medium text-ethra-dark leading-relaxed max-w-4xl mx-auto">
            Seu controle nutricional tão simples quanto tirar uma foto — sem neuras, sem cálculos. A gente entrega tudo pra você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
