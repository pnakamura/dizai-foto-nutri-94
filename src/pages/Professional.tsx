
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardBreadcrumb from '@/components/DashboardBreadcrumb';
import DashboardSidebar from '@/components/DashboardSidebar';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';

const Professional = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dizai-brand-green"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <DashboardBreadcrumb currentPage="Área Profissional" />
        </div>
        
        <div className="flex gap-6">
          <aside className="hidden lg:block">
            <DashboardSidebar />
          </aside>
          
          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold gradient-text mb-2">
                Bem-vindo, Dr. {user?.email}!
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus clientes e acompanhe o progresso deles de forma eficiente.
              </p>
            </div>
            
            <ProfessionalDashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Professional;
