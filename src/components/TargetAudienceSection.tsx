import React from 'react';
import coupleImage from '@/assets/couple-image.jpg';

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#7CB342] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <div className="w-full h-full bg-green-900/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <img 
              src={coupleImage}
              alt="Casal feliz com comida saudável"
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Right content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              A Ethra foi criada para pessoas como você:
            </h2>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Pessoas que querem melhorar a sua saúde.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Quem deseja perder peso de forma realista.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Quem quer ganhar massa muscular.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Pessoas que querem economizar tempo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Quem busca praticidade sem complicações desnecessárias.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
