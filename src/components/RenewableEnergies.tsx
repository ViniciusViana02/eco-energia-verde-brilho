
import React from 'react';
import { Sun, Wind, TreeDeciduous } from 'lucide-react';

const RenewableEnergies = () => {
  return (
    <section id="solar-eolica" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Energias Renováveis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Energia Solar */}
          <div className="eco-card">
            <div className="h-56 bg-gradient-solar flex items-center justify-center">
              <Sun className="w-20 h-20 text-white animate-pulse-slow" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-eco-green-dark flex items-center gap-2">
                <Sun className="w-6 h-6" /> Energia Solar
              </h3>
              
              <p className="text-gray-600 mb-4">
                A energia solar é obtida pela luz do Sol e pode ser captada por meio de painéis fotovoltaicos. É uma fonte limpa e abundante, especialmente em países tropicais como o Brasil.
              </p>
              
              <h4 className="font-bold text-eco-blue-dark mb-2">Vantagens:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Não produz poluição durante seu uso</li>
                <li>Fonte inesgotável de energia</li>
                <li>Baixo custo de manutenção</li>
                <li>Redução na conta de luz</li>
                <li>Valorização do imóvel</li>
              </ul>
              
              <h4 className="font-bold text-eco-blue-dark mb-2">Você sabia?</h4>
              <p className="text-gray-600 italic bg-eco-green-light p-3 rounded-md">
                Em apenas uma hora, o Sol fornece energia suficiente para atender às necessidades globais por um ano inteiro!
              </p>
            </div>
          </div>
          
          {/* Energia Eólica */}
          <div className="eco-card">
            <div className="h-56 bg-gradient-wind flex items-center justify-center">
              <Wind className="w-20 h-20 text-white animate-pulse-slow" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-eco-blue-dark flex items-center gap-2">
                <Wind className="w-6 h-6" /> Energia Eólica
              </h3>
              
              <p className="text-gray-600 mb-4">
                A energia eólica é produzida pela força dos ventos e capturada por turbinas eólicas. É uma das fontes que mais cresce no Brasil, especialmente no Nordeste, onde os ventos são constantes.
              </p>
              
              <h4 className="font-bold text-eco-green-dark mb-2">Vantagens:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Fonte renovável e sustentável</li>
                <li>Não emite gases poluentes</li>
                <li>Compatível com outras atividades (como agricultura)</li>
                <li>Cria empregos locais</li>
                <li>Reduz a dependência de combustíveis fósseis</li>
              </ul>
              
              <h4 className="font-bold text-eco-green-dark mb-2">Você sabia?</h4>
              <p className="text-gray-600 italic bg-eco-blue-light p-3 rounded-md">
                O Brasil é o 7º país do mundo em capacidade instalada de energia eólica, com mais de 21 gigawatts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenewableEnergies;
