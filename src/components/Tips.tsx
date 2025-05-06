
import React from 'react';
import { Lightbulb, Battery, Recycle } from 'lucide-react';

const Tips = () => {
  return (
    <section id="dicas" className="py-16 bg-eco-green-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Dicas Práticas de Economia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-eco-green-dark rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-eco-green-dark">Iluminação Eficiente</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-mid mt-1"></div>
                <span>Substitua lâmpadas incandescentes por LED (economizam até 80% de energia)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-mid mt-1"></div>
                <span>Aproveite a luz natural durante o dia, abrindo cortinas e janelas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-mid mt-1"></div>
                <span>Desligue as luzes ao sair dos ambientes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-mid mt-1"></div>
                <span>Pinte as paredes de cores claras para refletir melhor a luz</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-eco-blue-mid rounded-full flex items-center justify-center mb-4">
              <Battery className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-eco-blue-dark">Aparelhos Elétricos</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-blue-mid mt-1"></div>
                <span>Compre aparelhos com selo A de eficiência energética</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-blue-mid mt-1"></div>
                <span>Desligue aparelhos da tomada quando não estiverem em uso</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-blue-mid mt-1"></div>
                <span>Limpe regularmente os filtros do ar-condicionado</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-blue-mid mt-1"></div>
                <span>Use o modo econômico de máquinas de lavar e ar-condicionado</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-eco-green-mid rounded-full flex items-center justify-center mb-4">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-eco-green-mid">Na Cozinha</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-dark mt-1"></div>
                <span>Mantenha a geladeira afastada de fontes de calor</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-dark mt-1"></div>
                <span>Não coloque alimentos quentes na geladeira</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-dark mt-1"></div>
                <span>Use a tampa das panelas para cozinhar mais rápido</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-eco-green-dark mt-1"></div>
                <span>Desligue o forno elétrico um pouco antes do fim do cozimento</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center text-eco-green-dark">Economia Mensal Estimada</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-eco-green-light p-4 rounded-lg">
              <p className="text-2xl font-bold text-eco-green-dark">30%</p>
              <p className="text-sm text-gray-600">Lâmpadas LED</p>
            </div>
            <div className="bg-eco-blue-light p-4 rounded-lg">
              <p className="text-2xl font-bold text-eco-blue-dark">15%</p>
              <p className="text-sm text-gray-600">Aparelhos em standby</p>
            </div>
            <div className="bg-eco-green-light p-4 rounded-lg">
              <p className="text-2xl font-bold text-eco-green-dark">20%</p>
              <p className="text-sm text-gray-600">Ar-condicionado</p>
            </div>
            <div className="bg-eco-blue-light p-4 rounded-lg">
              <p className="text-2xl font-bold text-eco-blue-dark">10%</p>
              <p className="text-sm text-gray-600">Geladeira eficiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
