
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

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
    <ProtectedRoute requiredUserType="profissional">
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h1 className="text-2xl font-bold gradient-text mb-2">
              Área Profissional
            </h1>
            <p className="text-muted-foreground">
              Gerencie seus clientes e acompanhe o progresso deles.
            </p>
          </div>
          
          <ProfessionalDashboard />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Professional;
