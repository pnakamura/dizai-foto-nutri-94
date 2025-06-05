
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
  const { profile } = useUserProfile();

  const getUserDashboardLink = () => {
    if (!profile) return '/dashboard';
    
    switch (profile.tipo) {
      case 'admin': return '/admin';
      case 'profissional': return '/professional';
      default: return '/dashboard';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'admin': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'profissional': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cliente': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'admin': return 'Administrador';
      case 'profissional': return 'Profissional';
      case 'cliente': return 'Cliente';
      default: return tipo;
    }
  };

  return (
    <header className="py-4 md:py-6 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="group">
          <h1 className="text-xl md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-200">
            DizAi
          </h1>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <a href="#features" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
          Recursos
        </a>
        <a href="#how-it-works" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
          Como Funciona
        </a>
        <Link to={getUserDashboardLink()} className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
          {profile?.tipo === 'admin' ? 'Painel Admin' : 
           profile?.tipo === 'profissional' ? 'Área Profissional' : 'Dashboard'}
        </Link>
        {profile?.tipo !== 'admin' && (
          <Link to="/professional" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
            Profissionais
          </Link>
        )}
        <a href="#pricing" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
          Planos
        </a>
        <a href="#faq" className="text-foreground/70 hover:text-dizai-brand-green transition-colors font-medium text-sm hover:scale-105 duration-200">
          FAQ
        </a>
      </nav>
      
      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {profile?.nome || user.email}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>
                {profile?.tipo && (
                  <Badge className={cn("text-xs font-medium border", getTipoColor(profile.tipo))}>
                    {getTipoLabel(profile.tipo)}
                  </Badge>
                )}
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={signOut}
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors duration-200"
            >
              Sair
            </Button>
          </div>
        ) : (
          <Link to="/auth">
            <Button 
              variant="outline" 
              size="sm"
              className="hover:bg-dizai-brand-green hover:text-white transition-colors duration-200"
            >
              Login
            </Button>
          </Link>
        )}
        <WhatsAppButton showBadge={true} className="animate-pulse-subtle hover:scale-105 transition-transform duration-200" />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
