
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Camera, 
  TrendingUp, 
  Target, 
  Calendar,
  User,
  Settings,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Visão Geral',
      href: '/dashboard',
      icon: LayoutDashboard,
      active: location.pathname === '/dashboard'
    },
    {
      title: 'Nova Foto',
      href: '/dashboard/photo',
      icon: Camera,
      active: location.pathname === '/dashboard/photo'
    },
    {
      title: 'Progresso',
      href: '/dashboard/progress',
      icon: TrendingUp,
      active: location.pathname === '/dashboard/progress'
    },
    {
      title: 'Metas',
      href: '/dashboard/goals',
      icon: Target,
      active: location.pathname === '/dashboard/goals'
    },
    {
      title: 'Agenda',
      href: '/dashboard/schedule',
      icon: Calendar,
      active: location.pathname === '/dashboard/schedule'
    },
    {
      title: 'Perfil',
      href: '/dashboard/profile',
      icon: User,
      active: location.pathname === '/dashboard/profile'
    },
    {
      title: 'Notificações',
      href: '/dashboard/notifications',
      icon: Bell,
      active: location.pathname === '/dashboard/notifications'
    },
    {
      title: 'Configurações',
      href: '/dashboard/settings',
      icon: Settings,
      active: location.pathname === '/dashboard/settings'
    }
  ];

  return (
    <Card className="w-64 h-fit p-4 space-y-2">
      <h3 className="font-semibold text-lg mb-4 gradient-text">Navegação</h3>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <Button
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                item.active && "bg-gradient-button text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        ))}
      </nav>
    </Card>
  );
};

export default DashboardSidebar;
