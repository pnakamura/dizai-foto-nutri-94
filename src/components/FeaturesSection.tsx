
import React from 'react';
import { Camera, ChartBar, Smartphone, Lightbulb } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="glass-card rounded-xl p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-dizai-brand-green hover:translate-y-[-5px] hover:shadow-neon focus-within:border-dizai-brand-green focus-within:shadow-neon h-full">
      <div className="p-3 rounded-full bg-dizai-deep-purple border border-dizai-brand-green/30 mb-3 md:mb-4 border-glow">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 text-sm md:text-base">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 md:h-8 md:w-8 text-dizai-brand-green" />,
      title: "Análise instantânea de imagens",
      description: "Tire uma foto do seu prato e envie diretamente pelo WhatsApp para análise instantânea."
    },
    {
      icon: <ChartBar className="h-6 w-6 md:h-8 md:w-8 text-dizai-brand-green" />,
      title: "Detalhamento nutricional sem esforço",
      description: "Obtenha informações detalhadas sobre calorias, gorduras, carboidratos e proteínas em segundos."
    },
    {
      icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-dizai-brand-green" />,
      title: "Dicas personalizadas para emagrecer",
      description: "Receba sugestões personalizadas ao seu perfil para resultados mais eficazes."
    },
    {
      icon: <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-dizai-brand-green" />,
      title: "Sem downloads necessários",
      description: "Funciona diretamente no WhatsApp, sem necessidade de instalar aplicativos adicionais."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-28 px-5 md:px-8">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-5">
          Recursos <span className="gradient-text">Inovadores</span>
        </h2>
        <p className="text-foreground/90 max-w-2xl mx-auto text-sm md:text-base">
          Tecnologia de ponta para simplificar seu controle nutricional e ajudar você a alcançar seus objetivos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
      
      <div className="mt-12 md:mt-20 text-center">
        <p className="text-lg text-dizai-brand-orange italic md:text-2xl lg:text-3xl font-medium">
          "Tão fácil quanto tirar uma selfie!!"
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
