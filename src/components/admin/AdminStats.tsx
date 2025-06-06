
import React from 'react';
import { 
  Users, 
  UserCheck, 
  TrendingUp, 
  AlertTriangle
} from 'lucide-react';
import StatCard from './StatCard';

const AdminStats: React.FC = () => {
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

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default AdminStats;
