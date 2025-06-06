
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Navigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'cliente' | 'profissional' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredUserType }) => {
  const { user, loading, session } = useAuth();
  const { profile, loading: profileLoading } = useUserProfile();

  if (loading || profileLoading) {
    const variant = requiredUserType === 'admin' ? 'admin' : 
                   requiredUserType === 'profissional' ? 'professional' : 'auth';
    
    return (
      <LoadingScreen 
        message="Carregando sua conta..."
        subMessage="Verificando permissões"
        variant={variant}
      />
    );
  }

  if (!user || !session) {
    return <Navigate to="/auth" replace />;
  }

  // Verificar tipo de usuário se especificado
  if (requiredUserType && profile) {
    if (profile.tipo !== requiredUserType) {
      // Redirecionar para a página apropriada baseada no tipo do usuário
      const redirectPath = profile.tipo === 'admin' ? '/admin' : 
                          profile.tipo === 'profissional' ? '/professional' : '/dashboard';
      return <Navigate to={redirectPath} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
