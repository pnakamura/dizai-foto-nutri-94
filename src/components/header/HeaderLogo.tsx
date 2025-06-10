
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  profile?: {
    tipo?: 'cliente' | 'profissional' | 'admin';
  } | null;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ profile }) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/8d74b715-8a44-47ed-92be-4159edbfb736.png" 
        alt="Ethra - Análise nutricional por inteligência artificial" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default HeaderLogo;
