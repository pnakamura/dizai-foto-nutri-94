
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Badge } from '@/components/ui/badge';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { profile } = useUserProfile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getUserDashboardLink = () => {
    if (!profile) return '/dashboard';
    switch (profile.tipo) {
      case 'admin': return '/admin';
      case 'profissional': return '/professional';
      default: return '/dashboard';
    }
  };

  const navItems = [
    { href: "#features", label: "Recursos" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: getUserDashboardLink(), label: profile?.tipo === 'admin' ? 'Painel Admin' : profile?.tipo === 'profissional' ? 'Área Profissional' : 'Dashboard', isRoute: true },
    ...(profile?.tipo !== 'admin' ? [{ href: "/professional", label: "Profissionais", isRoute: true }] : []),
    { href: "#faq", label: "FAQ" },
    { href: "#pricing", label: "Planos e Preços" }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'admin': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'profissional': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cliente': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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

      {/* Overlay with fixed background */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border bg-white shadow-sm">
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
        
        {/* User Info */}
        {user && (
          <div className="px-4 py-3 bg-gray-50 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="font-medium text-sm">{profile?.nome || user.email}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              {profile?.tipo && (
                <Badge className={cn("text-xs", getTipoColor(profile.tipo))}>
                  {profile.tipo}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        {/* Navigation Menu */}
        <nav className="flex flex-col h-full bg-white">
          <div className="flex-1 px-4 py-6 space-y-2 bg-white">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <Link 
                  key={index}
                  to={item.href} 
                  className="flex items-center justify-between w-full p-4 rounded-lg text-foreground hover:bg-green-50 hover:text-dizai-brand-green transition-colors touch-manipulation font-medium"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <a 
                  key={index}
                  href={item.href} 
                  className="flex items-center justify-between w-full p-4 rounded-lg text-foreground hover:bg-green-50 hover:text-dizai-brand-green transition-colors touch-manipulation font-medium"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              )
            ))}
          </div>
          
          {/* Bottom Actions */}
          <div className="p-4 border-t border-border space-y-3 bg-white">
            {user ? (
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
              >
                Sair da Conta
              </Button>
            ) : (
              <Link to="/auth" onClick={closeMenu} className="block">
                <Button variant="outline" size="lg" className="w-full">
                  Login
                </Button>
              </Link>
            )}
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
