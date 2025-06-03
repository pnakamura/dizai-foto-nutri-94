
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
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

  const navItems = [
    { href: "#features", label: "Recursos" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "/dashboard", label: "Dashboard", isRoute: true },
    { href: "/professional", label: "Profissionais", isRoute: true },
    { href: "#faq", label: "FAQ" },
    { href: "#pricing", label: "Planos e Preços" }
  ];

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost"
        size="sm"
        className="p-2 text-foreground hover:text-dizai-brand-green" 
        onClick={toggleMenu}
        aria-label="Menu de navegação"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay with improved design */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <Link to="/" onClick={closeMenu}>
            <h1 className="text-xl font-bold gradient-text">DizAi</h1>
          </Link>
          <Button 
            variant="ghost" 
            size="sm"
            className="p-2 text-foreground hover:text-dizai-brand-green" 
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex flex-col h-full">
          <div className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <Link 
                  key={index}
                  to={item.href} 
                  className="flex items-center justify-between w-full p-4 rounded-lg text-foreground hover:bg-muted hover:text-dizai-brand-green transition-colors touch-manipulation font-medium"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <a 
                  key={index}
                  href={item.href} 
                  className="flex items-center justify-between w-full p-4 rounded-lg text-foreground hover:bg-muted hover:text-dizai-brand-green transition-colors touch-manipulation font-medium"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              )
            ))}
          </div>
          
          {/* Bottom Actions */}
          <div className="p-4 border-t border-border space-y-3">
            <Link to="/login" onClick={closeMenu} className="block">
              <Button variant="outline" size="lg" className="w-full">
                Login
              </Button>
            </Link>
            <WhatsAppButton 
              showBadge={true}
              fullWidth={true}
              onClick={closeMenu}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
