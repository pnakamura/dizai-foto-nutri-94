
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        
        <nav className="flex flex-col items-center gap-6 px-4 py-8 text-lg">
          <a 
            href="#features" 
            className="w-full text-center py-4 bg-dizai-dark-blue/70 rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-dark-blue/90 transition-colors touch-manipulation"
            onClick={closeMenu}
          >
            Recursos
          </a>
          <a 
            href="#how-it-works" 
            className="w-full text-center py-4 bg-dizai-dark-blue/70 rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-dark-blue/90 transition-colors touch-manipulation"
            onClick={closeMenu}
          >
            Como Funciona
          </a>
          <a 
            href="#testimonials" 
            className="w-full text-center py-4 bg-dizai-dark-blue/70 rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-dark-blue/90 transition-colors touch-manipulation"
            onClick={closeMenu}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="w-full text-center py-4 bg-dizai-dark-blue/70 rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-dark-blue/90 transition-colors touch-manipulation"
            onClick={closeMenu}
          >
            FAQ
          </a>
          <a 
            href="#pricing" 
            className="w-full text-center py-4 bg-dizai-dark-blue/70 rounded-md text-foreground hover:text-dizai-neon-green hover:bg-dizai-dark-blue/90 transition-colors touch-manipulation"
            onClick={closeMenu}
          >
            Planos e Preços
          </a>
          
          <Button 
            className="mt-6 w-full bg-gradient-button hover:opacity-90 whatsapp-button"
            onClick={closeMenu}
          >
            Comece Agora
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
