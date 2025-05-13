
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold gradient-text">DizAi</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
        <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</a>
        <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Testimonials</a>
        <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
      </nav>
      <Button className="bg-gradient-button hover:opacity-90 whatsapp-button">
        Start Now
      </Button>
    </header>
  );
};

export default Header;
