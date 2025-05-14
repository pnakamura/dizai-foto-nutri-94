
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost"
        className="p-2" 
        onClick={toggleMenu}
        aria-label="Menu de navegação"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div 
        className={cn(
          "fixed inset-0 z-50 bg-dizai-dark-blue/95 backdrop-blur-sm transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <Button 
            variant="ghost" 
            className="p-2" 
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="flex flex-col items-center gap-6 px-4 py-8 text-lg">
          <a 
            href="#features" 
            className="w-full text-center py-3 border-b border-dizai-light-purple/20 text-foreground/80 hover:text-dizai-neon-green transition-colors"
            onClick={toggleMenu}
          >
            Recursos
          </a>
          <a 
            href="#how-it-works" 
            className="w-full text-center py-3 border-b border-dizai-light-purple/20 text-foreground/80 hover:text-dizai-neon-green transition-colors"
            onClick={toggleMenu}
          >
            Como Funciona
          </a>
          <a 
            href="#testimonials" 
            className="w-full text-center py-3 border-b border-dizai-light-purple/20 text-foreground/80 hover:text-dizai-neon-green transition-colors"
            onClick={toggleMenu}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="w-full text-center py-3 border-b border-dizai-light-purple/20 text-foreground/80 hover:text-dizai-neon-green transition-colors"
            onClick={toggleMenu}
          >
            FAQ
          </a>
          
          <Button 
            className="mt-4 w-full bg-gradient-button hover:opacity-90 whatsapp-button animate-pulse-subtle"
            onClick={toggleMenu}
          >
            Comece Agora
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
