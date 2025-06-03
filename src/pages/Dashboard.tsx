
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Camera, TrendingUp, Target, Calendar } from 'lucide-react';
import NutritionChart from '@/components/NutritionChart';
import ProgressOverview from '@/components/ProgressOverview';
import RecentMeals from '@/components/RecentMeals';
import NutritionGoals from '@/components/NutritionGoals';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Meu Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-button hover:opacity-90">
              <Camera className="mr-2 h-4 w-4" />
              Nova Foto
            </Button>
            <Button variant="outline">Perfil</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Bem-vindo de volta, Maria!</h2>
          <p className="text-green-100">Continue sua jornada nutricional. Você está indo muito bem!</p>
        </div>

        {/* Quick Stats */}
        <ProgressOverview />

        {/* Charts and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Nutrition Chart */}
          <div className="lg:col-span-2">
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
  );
};

export default Dashboard;
