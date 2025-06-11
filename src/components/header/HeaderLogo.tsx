
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  profile?: {
    tipo?: 'cliente' | 'profissional' | 'admin';
  } | null;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ profile }) => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/73345937-88b5-4bd7-89fa-25a562109474.png" 
        alt="Ethra" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default HeaderLogo;
