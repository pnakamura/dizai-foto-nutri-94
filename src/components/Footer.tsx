
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dizai-dark-blue border-t border-dizai-light-purple/20 py-10 md:py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold gradient-text">DizAi</h3>
            <p className="text-foreground/70 text-sm md:text-base">
              Simplificando o controle nutricional através da tecnologia e inteligência artificial.
            </p>
            <p className="text-dizai-neon-green italic text-xs md:text-sm">
              "Inicie sua jornada de saúde com apenas uma foto no WhatsApp. Resultados, não complicações."
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Sobre Nós</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Carreiras</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Imprensa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Guia Nutricional</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Comunidade</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Planos & Preços</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Dicas & Receitas</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contato</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Suporte</a></li>
              <li><a href="https://wa.me/555189457133?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Diz%20a%C3%AD%3F" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">WhatsApp</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">Email</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-sm md:text-base block py-1">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-dizai-light-purple/20 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors p-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors p-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors p-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
          
          <p className="text-foreground/60 text-xs md:text-sm mb-6 md:mb-0">© {currentYear} DizAi. Todos os direitos reservados.</p>
          
          <div className="flex gap-6">
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-xs md:text-sm py-1">Privacidade</a>
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-xs md:text-sm py-1">Termos</a>
            <a href="#" className="text-foreground/70 hover:text-dizai-neon-green transition-colors text-xs md:text-sm py-1">Cookies</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <WhatsAppButton
            buttonText="Comece no WhatsApp" 
            fullWidth={true}
            className="text-base py-5 w-full md:w-auto animate-pulse-subtle"
          />
        </div>
        
        <div className="mt-8 bg-dizai-deep-purple/40 p-4 md:p-6 rounded-xl border border-dizai-light-purple/20">
          <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-center">Para Profissionais de Saúde</h4>
          <p className="text-foreground/80 text-center mb-4 text-sm md:text-base">
            DizAi é a ferramenta perfeita para complementar seu trabalho como nutricionista, personal trainer ou médico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-dizai-neon-green mt-1.5"></div>
              <p className="ml-2 text-xs md:text-sm text-foreground/70">Acompanhe seus clientes com facilidade</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-dizai-neon-green mt-1.5"></div>
              <p className="ml-2 text-xs md:text-sm text-foreground/70">Integre com seus protocolos existentes</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-dizai-neon-green mt-1.5"></div>
              <p className="ml-2 text-xs md:text-sm text-foreground/70">Receba relatórios detalhados automaticamente</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-dizai-neon-green mt-1.5"></div>
              <p className="ml-2 text-xs md:text-sm text-foreground/70">Diferencie seu serviço com tecnologia de ponta</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button 
              asChild
              className="bg-gradient-button hover:opacity-90 w-full md:w-auto text-sm md:text-base"
            >
              <a href="https://wa.me/555189457133?text=Ol%C3%A1!%20Sou%20profissional%20de%20sa%C3%BAde%20e%20quero%20saber%20mais%20sobre%20o%20Diz%20a%C3%AD%3F">
                Saiba mais
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
