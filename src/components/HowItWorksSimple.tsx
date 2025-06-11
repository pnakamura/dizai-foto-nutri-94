
import React from 'react';
import { Camera, Send, CheckCircle } from 'lucide-react';

const HowItWorksSimple: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="h-16 w-16 text-ethra-green" />,
      title: "Fotografe",
      description: "Use seu celular para capturar sua refeição"
    },
    {
      icon: <Send className="h-16 w-16 text-ethra-green" />,
      title: "Envie via WhatsApp", 
      description: "Mande a imagem e nossa IA faz a análise"
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-ethra-green" />,
      title: "Receba os resultados",
      description: "Calorias, proteínas, gorduras em segundos"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;
