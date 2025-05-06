
import React, { useState } from 'react';
import { Sun, BarChart, Battery } from 'lucide-react';

const Simulator = () => {
  const [consumo, setConsumo] = useState(300);
  const [pessoas, setPessoas] = useState(3);
  
  const calculaEconomia = () => {
    const consumoMedio = consumo * (pessoas * 0.8);
    const economiaAnual = consumoMedio * 0.6 * 12;
    const economiaEmissao = consumoMedio * 0.084 * 12; // kg de CO2 por kWh
    return {
      mensal: (consumoMedio * 0.6).toFixed(2),
      anual: economiaAnual.toFixed(2),
      emissao: economiaEmissao.toFixed(2)
    };
  };
  
  const economia = calculaEconomia();
  
  return (
    <section id="simulador" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Simulador de Economia</h2>
        
        <div className="max-w-4xl mx-auto eco-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-eco-green-dark">
                <Sun className="h-6 w-6" /> Simule sua Economia com Energia Solar
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consumo mensal médio (kWh):
                  </label>
                  <input 
                    type="range" 
                    min="100" 
                    max="1000" 
                    step="50"
                    value={consumo} 
                    onChange={(e) => setConsumo(parseInt(e.target.value))}
                    className="w-full h-2 bg-eco-green-light rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>100</span>
                    <span className="font-medium text-eco-green-dark">{consumo} kWh</span>
                    <span>1000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de pessoas na residência:
                  </label>
                  <div className="flex gap-4 items-center">
                    <button 
                      onClick={() => pessoas > 1 && setPessoas(pessoas - 1)}
                      className="w-8 h-8 rounded-full bg-eco-green-light text-eco-green-dark font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{pessoas}</span>
                    <button 
                      onClick={() => setPessoas(pessoas + 1)}
                      className="w-8 h-8 rounded-full bg-eco-green-dark text-white font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-eco-blue-light bg-opacity-30 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-center text-eco-blue-dark flex items-center justify-center gap-2">
                <BarChart className="h-5 w-5" /> Resultado da Simulação
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Economia Mensal:</span>
                    <span className="text-xl font-bold text-eco-green-dark">R$ {economia.mensal}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Economia Anual:</span>
                    <span className="text-xl font-bold text-eco-blue-mid">R$ {economia.anual}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Redução de CO2:</span>
                    <span className="text-xl font-bold text-eco-green-mid">{economia.emissao} kg</span>
                  </div>
                </div>
                
                <div className="bg-eco-green-light bg-opacity-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    <Battery className="h-4 w-4 inline mr-1" />
                    Esse é apenas um cálculo aproximado. Consulte um especialista para um orçamento preciso para sua residência.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="eco-button inline-block">Fale com um Especialista</a>
            <p className="text-sm text-gray-500 mt-2">Receba um orçamento personalizado para sua residência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
