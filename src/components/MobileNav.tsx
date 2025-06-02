
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import WhatsAppButton from '@/components/WhatsAppButton';

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
        
        {/* Solid background for better visibility */}
        <nav className="mx-4 bg-dizai-deep-purple rounded-lg border border-dizai-brand-green/30 border-glow p-4 shadow-lg">
          <div className="flex flex-col items-center gap-4 px-2 py-4 text-lg">
            <a 
              href="#features" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-brand-green hover:bg-dizai-deep-purple/80 transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-brand-green hover:bg-dizai-deep-purple/80 transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-brand-green hover:bg-dizai-deep-purple/80 transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-brand-green hover:bg-dizai-deep-purple/80 transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#pricing" 
              className="w-full text-center py-4 bg-dizai-dark-blue rounded-md text-foreground hover:text-dizai-brand-green hover:bg-dizai-deep-purple/80 transition-colors touch-manipulation"
              onClick={closeMenu}
            >
              Planos e Preços
            </a>
            
            <WhatsAppButton 
              showBadge={true}
              fullWidth={true}
              className="mt-6"
              onClick={closeMenu}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
