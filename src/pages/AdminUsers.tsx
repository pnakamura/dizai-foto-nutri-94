
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import DashboardBreadcrumb from '@/components/DashboardBreadcrumb';
import AdminSidebar from '@/components/AdminSidebar';
import LoadingScreen from '@/components/LoadingScreen';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, UserX, Shield } from 'lucide-react';

const AdminUsers = () => {
  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading } = useUserProfile();

  if (authLoading || profileLoading) {
    return (
      <LoadingScreen 
        message="Carregando usuários..."
        variant="admin"
      />
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (profile && profile.tipo !== 'admin') {
    const redirectPath = profile.tipo === 'profissional' ? '/professional' : '/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  if (!profile) {
    return (
      <LoadingScreen 
        message="Verificando permissões..."
        variant="admin"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <DashboardBreadcrumb 
            currentPage="Usuários" 
            items={[{ label: 'Admin', href: '/admin' }]}
          />
        </div>
        
        <div className="flex gap-6">
          <aside className="hidden lg:block">
            <AdminSidebar />
          </aside>
          
          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-0 bg-gradient-to-r from-white to-purple-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Gerenciar Usuários
                </h1>
              </div>
              <p className="text-muted-foreground">
                Visualize e gerencie todos os usuários da plataforma.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">+12% desde último mês</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Novos Usuários</CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">Esta semana</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">90% do total</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inativos</CardTitle>
                  <UserX className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14</div>
                  <p className="text-xs text-muted-foreground">10% do total</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Lista de Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Funcionalidade em Desenvolvimento</p>
                  <p>A lista completa de usuários será implementada em breve.</p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
