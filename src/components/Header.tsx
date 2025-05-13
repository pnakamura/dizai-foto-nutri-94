
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold gradient-text">DizAi</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-foreground/80 hover:text-foreground hover:text-dizai-neon-green transition-colors">Recursos</a>
        <a href="#how-it-works" className="text-foreground/80 hover:text-foreground hover:text-dizai-neon-green transition-colors">Como Funciona</a>
        <a href="#testimonials" className="text-foreground/80 hover:text-foreground hover:text-dizai-neon-green transition-colors">Depoimentos</a>
        <a href="#faq" className="text-foreground/80 hover:text-foreground hover:text-dizai-neon-green transition-colors">FAQ</a>
      </nav>
      <Button className="bg-gradient-button hover:opacity-90 whatsapp-button animate-pulse-subtle">
        Comece Agora
      </Button>
    </header>
  );
};

export default Header;
