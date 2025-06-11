
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
      {/* Conteúdo Principal */}
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Envie uma foto.
            <br />
            <span className="block">Receba sua análise</span>
            <span className="block">nutricional em segundos.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Calorias, macros e recomendações inteligentes
            <br />
            direto no WhatsApp — sem apps, sem cad
          </p>
        </div>

        <div className="pt-4">
          <WhatsAppButton 
            buttonText="Enviar foto grátis"
            className="bg-ethra-green hover:bg-ethra-green-dark text-white text-lg md:text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
      
      {/* Smartphone com Demo */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative max-w-sm w-full">
          {/* Frame do Smartphone */}
          <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="bg-white px-6 py-3 flex justify-between items-center text-sm">
                <span className="font-medium text-gray-900">Ethra</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                  <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                  <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                </div>
              </div>
              
              {/* Conteúdo da Tela */}
              <div className="relative bg-gray-50 min-h-[500px] flex flex-col">
                {/* Área da Imagem */}
                <div className="relative bg-white m-4 rounded-xl overflow-hidden shadow-sm">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <div className="w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Back Arrow */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/80 rounded-full p-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Resultado da Análise */}
                <div className="bg-white mx-4 mb-4 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Almôndega</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-1">248 kcal</p>
                  <p className="text-sm text-gray-600">18 g carboidratos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
