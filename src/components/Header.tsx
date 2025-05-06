
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-eco-green-dark p-2 rounded-full">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-eco-green-dark">ECO ENERGIA</span>
        </a>
        
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="font-medium text-gray-600 hover:text-eco-green-dark transition-colors">Início</a>
          <a href="#solar-eolica" className="font-medium text-gray-600 hover:text-eco-green-dark transition-colors">Energias Renováveis</a>
          <a href="#dicas" className="font-medium text-gray-600 hover:text-eco-green-dark transition-colors">Dicas</a>
          <a href="#simulador" className="font-medium text-gray-600 hover:text-eco-green-dark transition-colors">Simulador</a>
        </nav>
        
        <button className="block md:hidden">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
