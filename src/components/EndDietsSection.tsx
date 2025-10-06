import React from 'react';
import personEating from '@/assets/person-eating.png';
import leaf1 from '@/assets/leaf-1.png';
import leaf2 from '@/assets/leaf-2.png';
import caloriesIcon from '@/assets/calories-icon.png';
import weightIcon from '@/assets/weight-icon.png';
import notesIcon from '@/assets/notes-icon.png';

const EndDietsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center relative">
            <div className="relative">
              <img 
                src={personEating}
                alt="Pessoa preparando comida saudável"
                className="w-full max-w-md"
              />
              <img 
                src={leaf1}
                alt=""
                className="absolute -top-8 -left-8 w-24 h-24 opacity-80"
              />
              <img 
                src={leaf2}
                alt=""
                className="absolute -bottom-8 -right-8 w-20 h-20 opacity-80"
              />
            </div>
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
                  <img src={caloriesIcon} alt="Calories icon" className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Contar calorias manualmente</p>
              </div>

              <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-3">
                  <img src={weightIcon} alt="Weight icon" className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Pesar alimentos todos os dias</p>
              </div>

              <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-3">
                  <img src={notesIcon} alt="Notes icon" className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Anotar refeições em aplicativos chatos</p>
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
