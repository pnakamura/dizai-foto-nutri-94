import React from 'react';
import { Camera, Sparkles, MessageSquare } from 'lucide-react';
import dietImage from '@/assets/diet-image.jpg';

const EndDietsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <img 
              src={dietImage}
              alt="Pessoa preparando comida saudável"
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Right content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center lg:text-left">
              O fim das dietas complicadas
            </h2>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              Já tentou contar calorias e não sabia por onde começar ou até mesmo não obteve os resultados?
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Tire uma foto</p>
              </div>

              <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Receba a análise</p>
              </div>

              <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Ajuste sua rotina</p>
              </div>
            </div>

            <p className="text-center lg:text-left text-gray-600">
              Com a Ethra, você torna a nutrição em algo simples. Com o Ethra, você sabe exatamente o que está comendo. A IA da Ethra é sua aliada no seu dia a dia. Simples, rápido e sem enrolação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndDietsSection;
