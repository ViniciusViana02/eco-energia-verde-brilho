
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Floating bubbles state
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    // Create animated bubbles for the background
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      speed: Math.random() * 2 + 1
    }));
    
    setBubbles(newBubbles);
    
    // Clean up animation frame on unmount
    return () => {
      setBubbles([]);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading for a better user experience
    setTimeout(() => {
      // Verificação simples para demonstração
      if (email && password) {
        toast.success("Login realizado com sucesso!");
        navigate('/home');
      } else {
        toast.error("Por favor, preencha todos os campos.");
      }
      setLoading(false);
    }, 800);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-green-50 via-blue-50 to-green-50 p-4 overflow-hidden">
      {/* Animated eco bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {bubbles.map((bubble) => (
          <div 
            key={bubble.id}
            className={`absolute rounded-full bg-eco-green-light opacity-20 animate-float`}
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDuration: `${bubble.speed + 3}s`,
              animationDelay: `${bubble.id * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-eco-green-dark drop-shadow-md">ECO ENERGIA</h1>
          <p className="text-slate-600 mt-2">Acesse para um futuro sustentável</p>
        </div>

        <Card className="border-green-100 shadow-lg backdrop-blur-sm bg-white/80 hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-5px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Entre com suas credenciais para acessar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2 group">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-hover:text-eco-green-dark transition-colors" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="exemplo@email.com" 
                    className="pl-10 focus:border-eco-green-mid transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <a href="#" className="text-sm text-eco-green-dark hover:text-eco-green-mid hover:underline transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-hover:text-eco-green-dark transition-colors" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-10 focus:border-eco-green-mid transition-all duration-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-eco-green-dark transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-eco-green-dark hover:bg-eco-green-mid active:scale-95 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-slate-500">Ou continue com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                type="button" 
                className="flex items-center justify-center gap-2 hover:bg-eco-blue-light/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 8.00001C15.5 7.21201 15.428 6.45301 15.295 5.73401H8V8.48601H12.208C12.044 9.37401 11.494 10.107 10.654 10.589V12.342H13.191C14.658 11.119 15.5 9.72001 15.5 8.00001Z" fill="#4285F4"/>
                  <path d="M8 16C10.1 16 11.874 15.285 13.192 14.342L10.655 12.589C9.954 13.059 9.064 13.342 8.001 13.342C5.981 13.342 4.267 11.891 3.636 9.94403H1.01001V11.756C2.321 14.293 4.961 16 8 16Z" fill="#34A853"/>
                  <path d="M3.63505 9.94199C3.49505 9.46099 3.41505 8.94499 3.41505 8.00099C3.41505 7.05699 3.49505 6.54099 3.63505 6.05999V4.24799H1.01005C0.51705 5.35799 0.235046 6.58399 0.235046 8.00099C0.235046 9.41799 0.51705 10.644 1.01005 11.754L3.63505 9.94199Z" fill="#FBBC05"/>
                  <path d="M8 2.66C9.144 2.66 10.16 3.039 10.966 3.79L13.184 1.585C11.87 0.343 10.096 -0.372 8 -0.372C4.961 -0.372 2.321 1.335 1.01 3.872L3.635 5.684C4.267 3.737 5.981 2.66 8 2.66Z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button 
                variant="outline" 
                type="button" 
                className="flex items-center justify-center gap-2 hover:bg-eco-blue-light/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2168 8.09699C14.2168 5.40524 12.0199 3.20837 9.32812 3.20837C6.63637 3.20837 4.4395 5.40524 4.4395 8.09699C4.4395 10.5403 6.25533 12.5705 8.62054 12.9258V9.65283H7.30085V8.09699H8.62054V6.92278C8.62054 5.57708 9.29866 4.9534 10.5234 4.9534C11.1059 4.9534 11.7155 5.06399 11.7155 5.06399V6.34183H10.9516C10.1976 6.34183 9.93945 6.76691 9.93945 7.20356V8.09699H11.6444L11.3521 9.65283H9.93945V13C12.4288 12.6642 14.2168 10.5993 14.2168 8.09699Z" fill="#1877F2"/>
                </svg>
                Facebook
              </Button>
            </div>
            <div className="text-center text-sm">
              <span className="text-slate-500">Não tem uma conta? </span>
              <a href="#" className="text-eco-green-dark hover:text-eco-green-mid hover:underline transition-colors font-medium">
                Cadastre-se
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
