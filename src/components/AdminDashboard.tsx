
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserCheck, 
  TrendingUp, 
  AlertTriangle,
  BarChart3,
  Settings,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total de Usuários',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Profissionais Ativos',
      value: '89',
      change: '+8%',
      icon: UserCheck,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Taxa de Crescimento',
      value: '23.5%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Alertas Pendentes',
      value: '7',
      change: '-3',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivities = [
    { user: 'Maria Silva', action: 'Novo cadastro', time: '2 min atrás', type: 'signup' },
    { user: 'Dr. João Santos', action: 'Login profissional', time: '5 min atrás', type: 'login' },
    { user: 'Ana Costa', action: 'Atualização de perfil', time: '12 min atrás', type: 'update' },
    { user: 'Carlos Lima', action: 'Reset de senha', time: '18 min atrás', type: 'reset' },
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={cn(
                    "text-xs",
                    stat.change.startsWith('+') ? "text-green-600" : "text-red-600"
                  )}>
                    {stat.change} vs mês anterior
                  </p>
                </div>
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br",
                  stat.color
                )}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      activity.type === 'signup' ? 'default' :
                      activity.type === 'login' ? 'secondary' : 'outline'
                    }>
                      {activity.type}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-600" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button className="w-full justify-start gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                <Users className="h-4 w-4" />
                Gerenciar Usuários
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <UserCheck className="h-4 w-4" />
                Validar Profissionais
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <BarChart3 className="h-4 w-4" />
                Gerar Relatórios
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <Settings className="h-4 w-4" />
                Configurações do Sistema
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
