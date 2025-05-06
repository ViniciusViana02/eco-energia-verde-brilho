
import React from 'react';
import { Leaf, Earth, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eco-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">ECO ENERGIA</span>
            </div>
            <p className="text-eco-green-light mb-4">
              Promovendo o uso consciente e sustentável de energia para um futuro mais limpo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-eco-green-light transition-colors">Página Inicial</a></li>
              <li><a href="#solar-eolica" className="hover:text-eco-green-light transition-colors">Energias Renováveis</a></li>
              <li><a href="#dicas" className="hover:text-eco-green-light transition-colors">Dicas de Economia</a></li>
              <li><a href="#simulador" className="hover:text-eco-green-light transition-colors">Simulador</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Earth className="h-5 w-5 text-eco-green-light" />
                <span>Rua Sustentável, 123 - Eco Cidade</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-eco-green-light" />
                <span>contato@ecoenergia.com.br</span>
              </li>
            </ul>
            
            <form className="mt-6">
              <p className="text-sm mb-2">Receba dicas de economia:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-2 rounded-l-md flex-1 text-gray-900 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-eco-blue-mid text-white px-4 py-2 rounded-r-md hover:bg-eco-blue-dark transition-colors"
                >
                  Assinar
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center text-sm">
          <p>© 2025 ECO ENERGIA. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com 💚 pelo amor à natureza</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
