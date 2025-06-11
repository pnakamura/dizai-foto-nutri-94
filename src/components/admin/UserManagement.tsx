import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Edit, 
  Trash2, 
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Users,
  UserX,
  CreditCard,
  Calendar,
  Clock
} from 'lucide-react';
import UserCreateModal from './UserCreateModal';
import UserEditModal from './UserEditModal';
import UserDeleteModal from './UserDeleteModal';
import UserFilters from './UserFilters';

interface User {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo: 'cliente' | 'profissional' | 'admin';
  status_conta: 'ativo' | 'inativo' | 'pausado';
  status_pagamento: 'primeira_vez' | 'teste' | 'normal' | 'assinatura' | 'pendente';
  is_active: boolean;
  data_criacao: string;
  last_login: string;
  avatar_url: string;
  total_count: number;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterActive, setFilterActive] = useState<string>('all');
  const [filterPayment, setFilterPayment] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const { toast } = useToast();
  const itemsPerPage = 10;

  const loadUsers = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase.rpc('search_users_admin', {
        search_term: searchTerm || null,
        filter_tipo: filterType === 'all' ? null : filterType as any,
        filter_status: filterStatus === 'all' ? null : filterStatus as any,
        filter_active: filterActive === 'all' ? null : filterActive === 'true',
        limit_count: itemsPerPage,
        offset_count: (currentPage - 1) * itemsPerPage
      });

      if (error) throw error;

      setUsers(data || []);
      if (data && data.length > 0) {
        setTotalCount(data[0].total_count);
      } else {
        setTotalCount(0);
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os usuários.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [searchTerm, filterType, filterStatus, filterActive, filterPayment, currentPage]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setFilterStatus('all');
    setFilterActive('all');
    setFilterPayment('all');
    setCurrentPage(1);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (searchTerm) count++;
    if (filterType !== 'all') count++;
    if (filterStatus !== 'all') count++;
    if (filterActive !== 'all') count++;
    if (filterPayment !== 'all') count++;
    return count;
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleUserUpdated = () => {
    loadUsers();
    setShowEditModal(false);
    setShowCreateModal(false);
    setShowDeleteModal(false);
    setSelectedUser(null);
  };

  const getStatusBadge = (status: string, isActive: boolean) => {
    if (!isActive) {
      return <Badge variant="destructive">Inativo</Badge>;
    }
    
    switch (status) {
      case 'ativo':
        return <Badge variant="default" className="bg-green-500">Ativo</Badge>;
      case 'inativo':
        return <Badge variant="destructive">Inativo</Badge>;
      case 'pausado':
        return <Badge variant="secondary">Pausado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTipoBadge = (tipo: string) => {
    switch (tipo) {
      case 'admin':
        return <Badge variant="destructive">Administrador</Badge>;
      case 'profissional':
        return <Badge variant="default" className="bg-blue-500">Profissional</Badge>;
      case 'cliente':
        return <Badge variant="outline">Cliente</Badge>;
      default:
        return <Badge variant="outline">{tipo}</Badge>;
    }
  };

  const getStatusPagamentoBadge = (status: string) => {
    const badgeMap = {
      'primeira_vez': { variant: 'outline' as const, label: 'Primeira Vez', color: 'text-gray-600' },
      'teste': { variant: 'secondary' as const, label: 'Teste', color: 'text-yellow-600' },
      'normal': { variant: 'default' as const, label: 'Normal', color: 'bg-blue-500' },
      'assinatura': { variant: 'default' as const, label: 'Assinatura', color: 'bg-green-500' },
      'pendente': { variant: 'destructive' as const, label: 'Pendente', color: 'text-red-600' }
    };

    const config = badgeMap[status as keyof typeof badgeMap] || { variant: 'outline' as const, label: status, color: '' };
    
    return (
      <Badge variant={config.variant} className={config.color}>
        <CreditCard className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Filtros Aprimorados */}
      <UserFilters
        searchTerm={searchTerm}
        filterType={filterType}
        filterStatus={filterStatus}
        filterActive={filterActive}
        filterPayment={filterPayment}
        onSearchChange={handleSearch}
        onTypeChange={setFilterType}
        onStatusChange={setFilterStatus}
        onActiveChange={setFilterActive}
        onPaymentChange={setFilterPayment}
        onClearFilters={handleClearFilters}
        activeFiltersCount={getActiveFiltersCount()}
      />

      {/* Tabela de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Gerenciamento de Usuários
              <Badge variant="outline" className="ml-2">
                {totalCount} usuário{totalCount !== 1 ? 's' : ''} encontrado{totalCount !== 1 ? 's' : ''}
              </Badge>
            </div>
            <Button onClick={() => setShowCreateModal(true)} className="bg-ethra-green hover:bg-ethra-green/90">
              <UserPlus className="h-4 w-4 mr-2" />
              Novo Usuário
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Nome
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700">Email</TableHead>
                  <TableHead className="font-semibold text-gray-700">Tipo</TableHead>
                  <TableHead className="font-semibold text-gray-700">Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Pagamento
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Criado em
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Último Login
                    </div>
                  </TableHead>
                  <TableHead className="text-right font-semibold text-gray-700">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12">
                      <div className="flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ethra-green mb-4"></div>
                        <span className="text-gray-600">Carregando usuários...</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12">
                      <div className="flex flex-col items-center text-muted-foreground">
                        <UserX className="h-16 w-16 mb-4 opacity-50" />
                        <span className="text-lg font-medium mb-2">Nenhum usuário encontrado</span>
                        <span className="text-sm">
                          {getActiveFiltersCount() > 0 
                            ? 'Tente ajustar os filtros para encontrar usuários'
                            : 'Não há usuários cadastrados no sistema'
                          }
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {user.avatar_url ? (
                            <img 
                              src={user.avatar_url} 
                              alt={user.nome}
                              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <Users className="h-5 w-5 text-gray-500" />
                            </div>
                          )}
                          <div>
                            <span className="font-medium text-gray-900">{user.nome}</span>
                            {user.telefone && (
                              <div className="text-sm text-gray-500">{user.telefone}</div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-700">{user.email}</span>
                      </TableCell>
                      <TableCell>{getTipoBadge(user.tipo)}</TableCell>
                      <TableCell>{getStatusBadge(user.status_conta, user.is_active)}</TableCell>
                      <TableCell>{getStatusPagamentoBadge(user.status_pagamento)}</TableCell>
                      <TableCell>
                        <span className="text-gray-600">
                          {new Date(user.data_criacao).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">
                          {user.last_login 
                            ? new Date(user.last_login).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              })
                            : 'Nunca'
                          }
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(user)}
                            className="hover:bg-blue-50 hover:border-blue-300"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(user)}
                            className="hover:bg-red-50 hover:border-red-300 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Paginação Melhorada */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-muted-foreground">
                Mostrando{' '}
                <span className="font-medium text-gray-900">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>
                {' '}a{' '}
                <span className="font-medium text-gray-900">
                  {Math.min(currentPage * itemsPerPage, totalCount)}
                </span>
                {' '}de{' '}
                <span className="font-medium text-gray-900">{totalCount}</span>
                {' '}usuários
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-600">Página</span>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded border">
                    {currentPage}
                  </span>
                  <span className="text-sm text-gray-600">de {totalPages}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                >
                  Próxima
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modais */}
      <UserCreateModal 
        open={showCreateModal} 
        onOpenChange={setShowCreateModal}
        onUserCreated={handleUserUpdated}
      />
      
      {selectedUser && (
        <>
          <UserEditModal 
            open={showEditModal} 
            onOpenChange={setShowEditModal}
            user={selectedUser}
            onUserUpdated={handleUserUpdated}
          />
          
          <UserDeleteModal 
            open={showDeleteModal} 
            onOpenChange={setShowDeleteModal}
            user={selectedUser}
            onUserDeleted={handleUserUpdated}
          />
        </>
      )}
    </div>
  );
};

export default UserManagement;
