
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, WhatsApp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost"
        className="p-2" 
        onClick={toggleMenu}
        aria-label="Menu de navegação"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay with fully opaque background */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-dizai-dark-blue transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-end p-4">
          <Button 
            variant="ghost" 
            className="p-2" 
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Added glass-effect container for menu items */}
        <nav className="mx-4 glass-card rounded-lg border border-dizai-light-purple/30 border-glow p-4">
          <div className="flex flex-col items-center gap-4 px-2 py-4 text-lg">
            <a 
              href="#features" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-deep-purple transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-deep-purple transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-deep-purple transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-deep-purple transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#pricing" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-deep-purple transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Planos e Preços
            </a>
            
            <Button 
              className="mt-6 w-full bg-gradient-button hover:opacity-90 whatsapp-button flex items-center justify-center gap-2"
              onClick={closeMenu}
            >
              <WhatsApp className="h-5 w-5" />
              Comece Agora 
              <Badge variant="outline" className="bg-dizai-neon-green text-dizai-dark-blue border-none ml-1 px-2">
                Grátis
              </Badge>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
