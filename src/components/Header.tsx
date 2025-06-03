
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import WhatsAppButton from '@/components/WhatsAppButton';

const Header: React.FC = () => {
  return (
    <header className="py-4 md:py-6 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">DizAi</h1>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        <a href="#features" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Recursos
        </a>
        <a href="#how-it-works" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Como Funciona
        </a>
        <a href="#testimonials" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Depoimentos
        </a>
        <a href="#pricing" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Planos e Preços
        </a>
        <Link to="/dashboard" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Dashboard
        </Link>
        <Link to="/professional" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Profissionais
        </Link>
        <a href="#faq" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          FAQ
        </a>
      </nav>
      
      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        <Link to="/login">
          <Button variant="outline" size="sm">Login</Button>
        </Link>
        <WhatsAppButton showBadge={true} className="animate-pulse-subtle" />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
