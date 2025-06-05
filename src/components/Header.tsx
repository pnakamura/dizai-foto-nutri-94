
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { userProfile } = useUserProfile();

  const getUserDashboardLink = () => {
    if (!userProfile) return '/dashboard';
    
    switch (userProfile.tipo) {
      case 'admin': return '/admin';
      case 'profissional': return '/professional';
      default: return '/dashboard';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'profissional': return 'bg-blue-100 text-blue-800';
      case 'cliente': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
        <Link to={getUserDashboardLink()} className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          {userProfile?.tipo === 'admin' ? 'Admin' : 
           userProfile?.tipo === 'profissional' ? 'Área Profissional' : 'Dashboard'}
        </Link>
        {userProfile?.tipo !== 'admin' && (
          <Link to="/professional" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
            Profissionais
          </Link>
        )}
        <a href="#pricing" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          Planos e Preços
        </a>
        <a href="#faq" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm">
          FAQ
        </a>
      </nav>
      
      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {userProfile?.nome || user.email}
                </span>
                {userProfile?.tipo && (
                  <Badge className={getTipoColor(userProfile.tipo)}>
                    {userProfile.tipo}
                  </Badge>
                )}
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={signOut}>
              Sair
            </Button>
          </div>
        ) : (
          <Link to="/auth">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
        )}
        <WhatsAppButton showBadge={true} className="animate-pulse-subtle" />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
