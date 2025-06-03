
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Users, Search, Plus, TrendingUp, Calendar, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientList from '@/components/ClientList';
import ClientProgress from '@/components/ClientProgress';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';

const Professional = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
            <h1 className="text-2xl font-bold gradient-text">Área Profissional</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-button hover:opacity-90">
              <Plus className="mr-2 h-4 w-4" />
              Novo Cliente
            </Button>
            <Button variant="outline">Configurações</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
            <TabsTrigger value="progress">Progresso</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <ProfessionalDashboard />
          </TabsContent>

          <TabsContent value="clients">
            <div className="space-y-6">
              {/* Search and Filter */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Buscar clientes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">Filtros</Button>
                  </div>
                </CardContent>
              </Card>

              <ClientList searchTerm={searchTerm} />
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <ClientProgress />
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Progresso Geral
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Aderência Mensal
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Feedback dos Clientes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Professional;
