
import React from 'react';
import { Camera, ChartBar, Smartphone, Lightbulb } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-dizai-neon-green">
      <div className="p-3 rounded-full bg-dizai-deep-purple border border-dizai-light-purple/30 mb-4 border-glow">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-dizai-neon-green" />,
      title: "Tire foto e envie pelo WhatsApp",
      description: "Fotografe sua refeição e envie diretamente pelo WhatsApp para obter análise instantânea."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-dizai-neon-green" />,
      title: "Análise nutricional instantânea",
      description: "Obtenha detalhes sobre calorias, gorduras, carboidratos e proteínas em segundos."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-dizai-neon-green" />,
      title: "Dicas personalizadas de emagrecimento",
      description: "Receba sugestões adaptadas ao seu perfil para resultados mais eficazes."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-dizai-neon-green" />,
      title: "Não precisa baixar nada",
      description: "Funciona diretamente no WhatsApp, sem a necessidade de instalar aplicativos adicionais."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Recursos <span className="gradient-text">Inovadores</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Tecnologia de ponta para simplificar seu controle nutricional e ajudar você a atingir seus objetivos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
