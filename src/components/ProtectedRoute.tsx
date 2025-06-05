
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'cliente' | 'profissional' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredUserType }) => {
  const { user, loading, session } = useAuth();
  const { profile, loading: profileLoading } = useUserProfile();

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <Card className="w-96 shadow-lg border-0">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-dizai-brand-green border-t-transparent mx-auto mb-4"></div>
              <p className="text-muted-foreground font-medium">Carregando sua conta...</p>
              <p className="text-xs text-muted-foreground mt-2">Verificando permissões</p>
            </div>
          </CardContent>
        </Card>
      </div>
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
