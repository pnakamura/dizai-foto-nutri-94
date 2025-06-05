
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useAdminData } from '@/hooks/useAdminData';
import DashboardBreadcrumb from '@/components/DashboardBreadcrumb';
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboard from '@/components/AdminDashboard';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user, loading } = useAuth();
  const { userProfile } = useUserProfile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dizai-brand-green"></div>
      </div>
    );
  }

  // Verificar se é admin
  if (userProfile && userProfile.tipo !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <DashboardBreadcrumb currentPage="Painel Administrativo" />
        </div>
        
        <div className="flex gap-6">
          <aside className="hidden lg:block">
            <AdminSidebar />
          </aside>
          
          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold gradient-text mb-2">
                Painel Administrativo
              </h1>
              <p className="text-muted-foreground">
                Gerencie usuários, monitore o sistema e configure funcionalidades.
              </p>
            </div>
            
            <AdminDashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
