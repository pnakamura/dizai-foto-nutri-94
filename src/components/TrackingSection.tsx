
import React from 'react';

const TrackingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-ethra-dark">
              Acompanhamento contínuo, com inteligência artificial
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              A Ethra monitora seu histórico alimentar e envia relatórios e insights semanais para melhorar seus hábitos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4">
                <div className="text-ethra-green font-semibold mb-1">IA avançada e precisa</div>
              </div>
              <div className="text-center p-4">
                <div className="text-ethra-green font-semibold mb-1">Suporte nutricional 24/7</div>
              </div>
              <div className="text-center p-4">
                <div className="text-ethra-green font-semibold mb-1">Histórico e tendências</div>
              </div>
            </div>
          </div>
          
          {/* Exemplo de mensagem */}
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-2xl p-6 max-w-sm w-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-ethra-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <div className="font-semibold text-ethra-dark">Ethra</div>
                  <div className="text-xs text-gray-500">Agora</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 space-y-3">
                <p className="text-sm text-gray-900 leading-relaxed">
                  Sua refeição tem aproximadamente <strong>520 kcal</strong>, <strong>30g de proteína</strong>, 
                  <strong> 15g de gordura</strong> e <strong>50g de carboidratos</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Para melhores resultados, considere reduzir carboidratos na próxima refeição. 💪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
