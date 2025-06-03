
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Camera, Calendar, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import NutritionChart from '@/components/NutritionChart';
import ProgressOverview from '@/components/ProgressOverview';
import RecentMeals from '@/components/RecentMeals';
import NutritionGoals from '@/components/NutritionGoals';
import DashboardBreadcrumb from '@/components/DashboardBreadcrumb';
import DashboardSidebar from '@/components/DashboardSidebar';

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-4 md:mb-2">
            <div className="flex items-center gap-4">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              )}
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-gradient-button hover:opacity-90">
                <Camera className="mr-2 h-4 w-4" />
                {isMobile ? 'Foto' : 'Nova Foto'}
              </Button>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <DashboardBreadcrumb currentPage="Dashboard" />
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mt-3">
            Meu Dashboard
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          {!isMobile && sidebarOpen && (
            <aside className="flex-shrink-0">
              <DashboardSidebar />
            </aside>
          )}
          
          {/* Mobile Sidebar Overlay */}
          {isMobile && sidebarOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}>
              <div className="w-64 h-full bg-white p-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold gradient-text">Menu</h2>
                  <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </div>
                <DashboardSidebar />
              </div>
            </div>
          )}

          {/* Main Dashboard Content */}
          <main className="flex-1 space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Bem-vindo de volta, Maria!</h2>
              <p className="text-green-100 text-sm md:text-base">
                Continue sua jornada nutricional. Você está indo muito bem!
              </p>
            </div>

            {/* Quick Stats */}
            <ProgressOverview />

            {/* Charts and Details */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Nutrition Chart */}
              <div className="xl:col-span-2">
                <NutritionChart />
              </div>

              {/* Goals */}
              <div>
                <NutritionGoals />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentMeals />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Próximos Lembretes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">Lanche da Tarde</p>
                        <p className="text-sm text-muted-foreground">Em 2 horas</p>
                      </div>
                      <Button size="sm" variant="outline">Marcar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">Hidratação</p>
                        <p className="text-sm text-muted-foreground">Beba água!</p>
                      </div>
                      <Button size="sm" variant="outline">OK</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
