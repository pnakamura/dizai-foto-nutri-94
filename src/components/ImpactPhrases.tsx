
import React from 'react';

const ImpactPhrases: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-8">
        <blockquote className="text-2xl md:text-3xl font-medium text-ethra-dark leading-relaxed">
          "Tão simples quanto tirar uma selfie. Tão eficaz quanto uma consulta personalizada."
        </blockquote>
        
        <blockquote className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
          "De uma foto à sua análise nutricional em menos de 60 segundos."
        </blockquote>
      </div>
    </section>
  );
};

export default ImpactPhrases;
