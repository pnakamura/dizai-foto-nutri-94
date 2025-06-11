
import React from 'react';
import HeaderLogo from './header/HeaderLogo';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          <HeaderLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
