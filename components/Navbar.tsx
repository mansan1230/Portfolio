import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-full px-8 py-3 flex items-center gap-8 md:gap-12">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-gray-900 hover:text-brand-salmon transition-colors">
          Emily Tang
        </Link>
        
        <div className="flex space-x-2 md:space-x-6">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive('/') 
                ? 'bg-brand-salmon text-white shadow-md transform -rotate-1' 
                : 'text-gray-600 hover:bg-brand-pink/30 hover:text-gray-900'
            }`}
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive('/projects') 
                ? 'bg-brand-salmon text-white shadow-md transform rotate-1' 
                : 'text-gray-600 hover:bg-brand-blue/30 hover:text-gray-900'
            }`}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;