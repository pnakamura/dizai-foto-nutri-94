
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
  const { userProfile, loading: profileLoading } = useUserProfile();

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <Card className="w-96">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dizai-brand-green mx-auto mb-4"></div>
              <p className="text-muted-foreground">Carregando...</p>
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
  if (requiredUserType && userProfile) {
    if (userProfile.tipo !== requiredUserType) {
      // Redirecionar para a página apropriada baseada no tipo do usuário
      const redirectPath = userProfile.tipo === 'admin' ? '/admin' : 
                          userProfile.tipo === 'profissional' ? '/professional' : '/dashboard';
      return <Navigate to={redirectPath} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
