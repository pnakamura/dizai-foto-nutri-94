
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import DashboardBreadcrumb from '@/components/DashboardBreadcrumb';
import DashboardSidebar from '@/components/DashboardSidebar';
import ProgressOverview from '@/components/ProgressOverview';
import NutritionChart from '@/components/NutritionChart';
import RecentMeals from '@/components/RecentMeals';
import NutritionGoals from '@/components/NutritionGoals';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { userProfile } = useUserProfile();

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
          <DashboardBreadcrumb currentPage="Dashboard" />
        </div>
        
        <div className="flex gap-6">
          <aside className="hidden lg:block">
            <DashboardSidebar />
          </aside>
          
          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold gradient-text mb-2">
                Bem-vindo, {userProfile?.nome || user?.email}!
              </h1>
              <p className="text-muted-foreground">
                Aqui está o resumo do seu progresso hoje.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ProgressOverview />
              </div>
              <div>
                <NutritionGoals />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <NutritionChart />
              <RecentMeals />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
