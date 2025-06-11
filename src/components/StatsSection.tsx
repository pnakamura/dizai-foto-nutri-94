
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-gray-900">99%</p>
            <p className="text-lg text-gray-600">precisão</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-gray-900">45s</p>
            <p className="text-lg text-gray-600">de resposta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
