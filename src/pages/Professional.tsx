
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Professional = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header com navegação de volta */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao início
        </Link>
        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Área Profissional
          </h1>
          <p className="text-muted-foreground text-lg">
            Gerencie seus clientes e acompanhe o progresso deles de forma eficiente.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">+5% este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 restantes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Clientes Recentes */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Clientes Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { nome: "Maria Silva", ultimaConsulta: "2 dias atrás", status: "Em progresso" },
                { nome: "João Santos", ultimaConsulta: "1 semana atrás", status: "Meta atingida" },
                { nome: "Ana Costa", ultimaConsulta: "3 dias atrás", status: "Precisa atenção" },
              ].map((cliente, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{cliente.nome}</h3>
                    <p className="text-sm text-muted-foreground">Última consulta: {cliente.ultimaConsulta}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      cliente.status === 'Meta atingida' ? 'bg-green-100 text-green-800' :
                      cliente.status === 'Precisa atenção' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cliente.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ações Rápidas */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-gradient-button hover:opacity-90">
                Adicionar Cliente
              </Button>
              <Button variant="outline">
                Agendar Consulta
              </Button>
              <Button variant="outline">
                Gerar Relatório
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Professional;
