
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Target, Zap } from 'lucide-react';

const ProgressOverview = () => {
  const stats = [
    {
      title: 'Calorias Hoje',
      value: '1,850',
      target: '2,000',
      icon: Zap,
      trend: 'up',
      percentage: '92%'
    },
    {
      title: 'Peso Atual',
      value: '68.5kg',
      change: '-0.8kg',
      icon: TrendingDown,
      trend: 'down',
      percentage: '↓ 1.2%'
    },
    {
      title: 'Meta Semanal',
      value: '5/7',
      target: 'dias',
      icon: Target,
      trend: 'up',
      percentage: '71%'
    },
    {
      title: 'Sequência',
      value: '12',
      target: 'dias',
      icon: TrendingUp,
      trend: 'up',
      percentage: '+2'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.target && <span>de {stat.target}</span>}
              {stat.change && <span>{stat.change}</span>}
              <span className={`ml-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.percentage}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProgressOverview;
