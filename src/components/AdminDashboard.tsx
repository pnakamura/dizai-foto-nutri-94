
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserCheck, TrendingUp, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  // Dados mockados para demonstração
  const stats = [
    {
      title: 'Total de Usuários',
      value: '1,234',
      description: 'Usuários ativos na plataforma',
      icon: Users,
      trend: '+12%',
      trendType: 'positive' as const
    },
    {
      title: 'Profissionais',
      value: '89',
      description: 'Profissionais verificados',
      icon: UserCheck,
      trend: '+5%',
      trendType: 'positive' as const
    },
    {
      title: 'Crescimento Mensal',
      value: '23%',
      description: 'Novos usuários este mês',
      icon: TrendingUp,
      trend: '+8%',
      trendType: 'positive' as const
    },
    {
      title: 'Questões Pendentes',
      value: '3',
      description: 'Requerem atenção',
      icon: AlertCircle,
      trend: '-2',
      trendType: 'negative' as const
    }
  ];

  const recentActivities = [
    { id: 1, user: 'João Silva', action: 'Novo cadastro como cliente', time: '2 min atrás', type: 'user' },
    { id: 2, user: 'Dra. Maria Santos', action: 'Profissional verificado', time: '15 min atrás', type: 'professional' },
    { id: 3, user: 'Pedro Costa', action: 'Reportou problema técnico', time: '1h atrás', type: 'issue' },
    { id: 4, user: 'Ana Oliveira', action: 'Completou primeiro mês', time: '2h atrás', type: 'milestone' }
  ];

  const getTrendColor = (type: 'positive' | 'negative') => {
    return type === 'positive' ? 'text-green-600' : 'text-red-600';
  };

  const getActivityBadge = (type: string) => {
    switch (type) {
      case 'user': return <Badge className="bg-blue-100 text-blue-800">Usuário</Badge>;
      case 'professional': return <Badge className="bg-green-100 text-green-800">Profissional</Badge>;
      case 'issue': return <Badge className="bg-red-100 text-red-800">Problema</Badge>;
      case 'milestone': return <Badge className="bg-purple-100 text-purple-800">Marco</Badge>;
      default: return <Badge>Geral</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
              <div className={cn("text-xs mt-2", getTrendColor(stat.trendType))}>
                {stat.trend} desde o mês passado
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Atividades recentes */}
      <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Atividades Recentes
          </CardTitle>
          <CardDescription>
            Últimas ações realizadas na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{activity.user}</span>
                    <span className="text-xs text-muted-foreground">{activity.action}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getActivityBadge(activity.type)}
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cards adicionais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Usuários por Tipo</CardTitle>
            <CardDescription>Distribuição dos tipos de conta</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Clientes</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-medium">1,145</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Profissionais</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/5 h-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm font-medium">89</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
            <CardDescription>Monitoramento em tempo real</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">API Status</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Database</span>
                <Badge className="bg-green-100 text-green-800">Saudável</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Último Backup</span>
                <span className="text-sm text-muted-foreground">2 horas atrás</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
