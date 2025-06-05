
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, UserCheck, AlertTriangle, Activity } from 'lucide-react';
import { useAdminData } from '@/hooks/useAdminData';

const AdminDashboard = () => {
  const { stats, allUsers, loading, updateUserStatus } = useAdminData();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dizai-brand-green"></div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-800';
      case 'inativo': return 'bg-red-100 text-red-800';
      case 'pausado': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'profissional': return 'bg-blue-100 text-blue-800';
      case 'cliente': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">Todos os usuários</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalClients || 0}</div>
            <p className="text-xs text-muted-foreground">Usuários clientes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profissionais</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalProfessionals || 0}</div>
            <p className="text-xs text-muted-foreground">Usuários profissionais</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activeUsers || 0}</div>
            <p className="text-xs text-muted-foreground">Contas ativas</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Gerenciar Usuários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {allUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{user.nome}</h4>
                    <Badge className={getTipoColor(user.tipo)}>
                      {user.tipo}
                    </Badge>
                    <Badge className={getStatusColor(user.status_conta)}>
                      {user.status_conta}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  {user.telefone && (
                    <p className="text-sm text-muted-foreground">{user.telefone}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Criado em: {new Date(user.data_criacao).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="flex gap-2">
                  {user.status_conta === 'ativo' ? (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateUserStatus(user.id, 'pausado')}
                    >
                      Pausar
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateUserStatus(user.id, 'ativo')}
                    >
                      Ativar
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => updateUserStatus(user.id, 'inativo')}
                  >
                    Desativar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
