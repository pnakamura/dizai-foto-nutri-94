
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import WhatsAppButton from '@/components/WhatsAppButton';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold gradient-text">DizAi</h1>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Recursos</a>
        <a href="#how-it-works" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Como Funciona</a>
        <a href="#testimonials" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Depoimentos</a>
        <a href="#pricing" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Planos e Preços</a>
        <Link to="/dashboard" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Dashboard</Link>
        <Link to="/professional" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">Profissionais</Link>
        <a href="#faq" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium">FAQ</a>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <WhatsAppButton showBadge={true} className="animate-pulse-subtle" />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
