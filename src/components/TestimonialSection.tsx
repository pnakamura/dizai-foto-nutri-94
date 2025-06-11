
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-relaxed mb-8">
          "Usei por 7 dias e consegui reduzir 250 kcal diárias com pequenas sugestões — tudo via WhatsApp!"
        </blockquote>
        
        <div className="flex items-center justify-center space-x-4">
          <img 
            src="/lovable-uploads/a8e49f70-19a6-49f6-97ea-520d6e630e15.png"
            alt="Lucas, 32 anos"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900 text-lg">Lucas, 32 anos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
