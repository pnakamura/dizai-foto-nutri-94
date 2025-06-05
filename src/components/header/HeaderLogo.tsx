
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderLogoProps {
  profile?: {
    tipo?: 'cliente' | 'profissional' | 'admin';
  } | null;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ profile }) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center",
        profile?.tipo === 'admin' ? "bg-gradient-to-br from-purple-500 to-red-500" :
        profile?.tipo === 'profissional' ? "bg-gradient-to-br from-blue-500 to-green-500" :
        "bg-gradient-to-br from-green-500 to-blue-500"
      )}>
        <span className="text-white font-bold text-sm">DA</span>
      </div>
      <span className="text-xl font-bold gradient-text">DizAi</span>
    </Link>
  );
};

export default HeaderLogo;
