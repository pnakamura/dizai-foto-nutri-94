
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
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
        className="p-2 text-foreground hover:text-dizai-brand-green" 
        onClick={toggleMenu}
        aria-label="Menu de navegação"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay with light background */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-end p-4">
          <Button 
            variant="ghost" 
            className="p-2 text-foreground hover:text-dizai-brand-green" 
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Menu with light theme */}
        <nav className="mx-4 bg-white/95 rounded-lg border border-dizai-brand-green/30 border-glow p-4 shadow-lg">
          <div className="flex flex-col items-center gap-4 px-2 py-4 text-lg">
            <a 
              href="#features" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Depoimentos
            </a>
            <Link 
              to="/dashboard" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/professional" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Profissionais
            </Link>
            <a 
              href="#faq" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#pricing" 
              className="w-full text-center py-4 bg-gray-50 rounded-md text-foreground hover:text-dizai-brand-green hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              onClick={closeMenu}
            >
              Planos e Preços
            </a>
            
            <div className="w-full flex flex-col gap-3 mt-6">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <WhatsAppButton 
                showBadge={true}
                fullWidth={true}
                onClick={closeMenu}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
