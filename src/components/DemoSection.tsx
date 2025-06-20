
import React from 'react';
import { Play, MessageSquare, Camera, BarChart3 } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Apelo Emocional */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            🍔 PARE DE SOFRER COM DIETAS
          </div>
          
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-gray-900 tracking-tight mb-6"
            style={{ 
              wordBreak: 'keep-all',
              hyphens: 'none',
              textWrap: 'balance',
              fontWeight: '500'
            }}
          >
            Já cansou de contar calorias, pesar comida ou seguir{' '}
            <span className="text-red-500 font-semibold">dietas que não funcionam?</span>
          </h2>
          
          <p 
            className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ 
              wordBreak: 'keep-all',
              hyphens: 'none'
            }}
          >
            A Ethra faz isso por você. De forma{' '}
            <span className="text-[#00C851] font-medium">leve, automática e personalizada</span>, 
            direto no seu WhatsApp.
          </p>
        </div>

        {/* Demonstração com Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mockup do WhatsApp à esquerda */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Simulação de tela do WhatsApp */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm w-full border border-gray-200">
                {/* Header do WhatsApp */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-[#00C851] rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ethra AI</h3>
                    <p className="text-xs text-green-500">online</p>
                  </div>
                </div>
                
                {/* Conversa simulada */}
                <div className="space-y-4 py-4">
                  {/* Mensagem do usuário */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-br-md p-3 max-w-xs">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-600">Foto do prato</p>
                    </div>
                  </div>
                  
                  {/* Resposta da IA */}
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <p className="text-sm text-gray-800 mb-2">✨ Análise completa:</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>Calorias:</span>
                          <span className="font-semibold text-blue-600">450 kcal</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Proteínas:</span>
                          <span className="font-semibold text-green-600">32g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carboidratos:</span>
                          <span className="font-semibold text-orange-600">25g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00C851] opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Steps do processo à direita */}
          <div className="space-y-8">
            <h3 
              className="text-xl md:text-2xl font-medium text-gray-900 mb-8"
              style={{ fontWeight: '500' }}
            >
              Como funciona em 3 passos simples:
            </h3>
            
            <div className="space-y-6">
              {/* Passo 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00C851] rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">1. Tire uma foto</h4>
                  <p className="text-gray-600 text-sm">Envie a imagem da sua refeição pelo WhatsApp</p>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">2. Receba a análise</h4>
                  <p className="text-gray-600 text-sm">Nossa IA identifica e calcula todos os nutrientes</p>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">3. Acompanhe seu progresso</h4>
                  <p className="text-gray-600 text-sm">Veja seu histórico e evolução nutricional</p>
                </div>
              </div>
            </div>

            {/* CTA Button simulando play */}
            <div className="pt-4">
              <button className="flex items-center gap-3 bg-white border-2 border-[#00C851] text-[#00C851] px-6 py-3 rounded-full font-medium hover:bg-[#00C851] hover:text-white transition-all duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver demonstração completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
