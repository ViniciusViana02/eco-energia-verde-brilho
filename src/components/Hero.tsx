
import React from 'react';
import { Sun, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-eco-green-light to-white">
      <div className="absolute top-20 right-10 animate-spin-slow opacity-10">
        <Sun className="w-64 h-64 text-eco-blue-mid" />
      </div>
      <div className="absolute bottom-10 left-10 animate-float opacity-10">
        <Wind className="w-48 h-48 text-eco-blue-dark" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nosso futuro é <span className="text-eco-green-dark">limpo</span> e <span className="text-eco-blue-mid">renovável</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            É hora de transformar nossa relação com a energia. Descubra como as energias renováveis podem mudar o mundo e como você pode fazer parte dessa revolução.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#solar-eolica" className="eco-button text-center">
              Descobrir Energias Renováveis
            </a>
            <a href="#dicas" className="px-6 py-2 bg-white border border-eco-green-dark text-eco-green-dark rounded-md font-medium transition-all duration-300 hover:bg-eco-green-light text-center">
              Dicas Práticas
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-eco-green-light">
              <p className="text-4xl font-bold text-eco-green-dark mb-2">80%</p>
              <p className="text-gray-600">de redução na emissão de CO2 com energia solar</p>
            </div>
            
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-eco-green-light">
              <p className="text-4xl font-bold text-eco-blue-dark mb-2">50%</p>
              <p className="text-gray-600">de economia na conta de energia com sistemas solares</p>
            </div>
            
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-eco-green-light">
              <p className="text-4xl font-bold text-eco-green-mid mb-2">2030</p>
              <p className="text-gray-600">ano meta para aumentar o uso de energia renovável no Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
