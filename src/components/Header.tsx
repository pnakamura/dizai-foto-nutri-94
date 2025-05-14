
import React from 'react';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/MobileNav';
import { WhatsApp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 bg-dizai-dark-blue/80 backdrop-blur-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold gradient-text">DizAi</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-foreground/80 hover:text-dizai-neon-green transition-colors">Recursos</a>
        <a href="#how-it-works" className="text-foreground/80 hover:text-dizai-neon-green transition-colors">Como Funciona</a>
        <a href="#testimonials" className="text-foreground/80 hover:text-dizai-neon-green transition-colors">Depoimentos</a>
        <a href="#pricing" className="text-foreground/80 hover:text-dizai-neon-green transition-colors">Planos e Preços</a>
        <a href="#faq" className="text-foreground/80 hover:text-dizai-neon-green transition-colors">FAQ</a>
      </nav>
      <div className="hidden md:block">
        <Button className="bg-gradient-button hover:opacity-90 whatsapp-button animate-pulse-subtle flex items-center gap-2">
          <WhatsApp className="h-5 w-5" />
          Comece Agora
          <Badge variant="outline" className="bg-dizai-neon-green text-dizai-dark-blue border-none ml-1 px-2">
            Grátis
          </Badge>
        </Button>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
