
import React, { useState } from 'react';
import { PRODUCTS } from './constants';
import { ProductCategory, Product } from './types';
import { Button } from './components/Button';
import { AiAssistant } from './components/AiAssistant';
import { GrowthChart } from './components/GrowthChart';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setIsCheckoutOpen(true);
  };

  const categories = Object.values(ProductCategory);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[900px] bg-gradient-to-b from-[#1a0a0a] to-[#050505] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-[800px] left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4d4d] to-[#990000] flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-red-500/20">C</div>
            <span className="text-2xl font-black tracking-tighter text-white">Caio_<span className="gradient-text">STORE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#produtos" className="text-sm font-semibold hover:text-[#ff4d4d] transition-colors">Produtos</a>
            <a href="#growth" className="text-sm font-semibold hover:text-[#ff4d4d] transition-colors">Estratégia</a>
            <a href="#garantia" className="text-sm font-semibold hover:text-[#ff4d4d] transition-colors">Garantia</a>
          </div>
          <Button variant="outline" className="hidden sm:flex border-white/10 hover:border-[#ff4d4d] transition-all" onClick={() => setIsCheckoutOpen(true)}>
            <span className="text-xl">🛒</span>
            <span className="ml-1">{cart.length}</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-[#ff4d4d] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Entrega Rápida! 24/7</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
            Domine o <span className="gradient-text">Instagram</span> com autoridade máxima.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Perfeito para influenciadores iniciantes e marcas que querem passar credibilidade instantânea, atrair novos parceiros e fechar mais vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-16 px-10 text-lg" onClick={() => document.getElementById('produtos')?.scrollIntoView()}>
              Ver Pacotes de Seguidores
            </Button>
            <Button variant="secondary" className="h-16 px-10 text-lg" onClick={() => window.open('https://www.instagram.com/c.psyco7/', '_blank')}>
              Falar no Instagram
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2">
                <span className="font-bold text-[#ff4d4d]">⚡</span>
                <span className="text-sm font-medium">Flash Delivery</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-[#ff4d4d]">🔒</span>
                <span className="text-sm font-medium">No Password Needed</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-[#ff4d4d]">📉</span>
                <span className="text-sm font-medium">Low Drop Rate</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-[#ff4d4d]">✨</span>
                <span className="text-sm font-medium">Quality Profiles</span>
             </div>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="produtos" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-4 italic uppercase">Nossas Ofertas</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Selecione o melhor pacote para o seu objetivo atual. Todos com garantia de reposição.</p>
          </div>

          {categories.map((cat) => (
            <div key={cat} className="mb-20 text-white">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold">{cat}</h3>
                <div className="flex-1 h-[1px] bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter(p => p.category === cat).map(product => (
                  <div 
                    key={product.id} 
                    className={`group relative bg-[#111111] border ${product.featured ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.1)]' : 'border-white/5'} rounded-3xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-600/10 flex flex-col`}
                  >
                    {product.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-[10px] font-black uppercase tracking-tighter rounded-full">Destaque</span>
                    )}
                    <h4 className="text-lg font-bold mb-2 leading-tight group-hover:text-red-500 transition-colors">{product.title}</h4>
                    <p className="text-xs text-gray-500 mb-6">{product.meta}</p>
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-xs font-bold text-gray-400">R$</span>
                        <span className="text-4xl font-black">{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <p className="text-[10px] text-green-500 font-bold mb-4 uppercase">Estoque: {product.stock.toLocaleString()}</p>
                      <Button fullWidth onClick={() => addToCart(product)}>
                        Comprar Agora
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Section */}
      <section id="growth" className="py-24 px-6 bg-[#050505] text-white">
        <div className="max-w-5xl mx-auto">
          <GrowthChart />
          <div className="grid md:grid-cols-3 gap-12 mt-16 text-center">
            <div>
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/20">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Gera Confiança</h4>
              <p className="text-gray-400 text-sm">Visitantes tendem a seguir perfis que já possuem uma base sólida. O social proof é o gatilho mais forte do Instagram.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/20">
                <span className="text-3xl">🏢</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Atrai Parcerias</h4>
              <p className="text-gray-400 text-sm">Marcas procuram números para patrocinar. Um perfil com 10k seguidores abre portas que um com 200 jamais abriria.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/20">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Venda Mais</h4>
              <p className="text-gray-400 text-sm">Números trazem autoridade. Autoridade gera desejo. Desejo converte em vendas no seu link da bio ou direct.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="max-w-sm text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4d4d] to-[#990000] flex items-center justify-center font-black text-lg italic text-white">C</div>
                <span className="text-xl font-black tracking-tighter text-white">Caio_<span className="gradient-text">STORE</span></span>
              </div>
              <p className="text-gray-500 text-sm">O maior marketplace de serviços para redes sociais do Brasil. Qualidade e velocidade que o seu perfil merece.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center md:justify-end text-sm font-bold">
               <a href="#" className="hover:text-red-500 transition-colors">Privacidade</a>
               <a href="#" className="hover:text-red-500 transition-colors">Termos</a>
               <a href="https://www.instagram.com/c.psyco7/" target="_blank" className="hover:text-red-500 transition-colors">Instagram</a>
               <a href="#" className="hover:text-red-500 transition-colors">Suporte</a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-600">
            <p>© 2026 Caio_STORE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-[#111111] border border-white/10 rounded-[32px] p-8 shadow-2xl text-white">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black">Resumo do Pedido</h3>
              <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div>
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <p className="font-black text-red-500">R$ {item.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between items-center p-4 border-t border-white/5 pt-6">
                <span className="text-lg font-bold">Total a Pagar</span>
                <span className="text-3xl font-black text-red-600">R$ {cart.reduce((acc, i) => acc + i.price, 0).toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-6">
               <div className="p-6 bg-red-600/5 border border-red-600/20 rounded-2xl text-center">
                  <p className="text-sm font-bold mb-4 text-red-400 uppercase tracking-tighter">Finalize o pagamento via direct ou discord:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button 
                      onClick={() => window.open('https://www.instagram.com/c.psyco7/', '_blank')}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-3 px-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-red-600/20"
                    >
                      <span className="text-lg">📸</span> Instagram
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText('caiozinhobb7');
                        alert('Usuário Discord (caiozinhobb7) copiado!');
                      }}
                      className="flex items-center justify-center gap-2 bg-[#2c2f33] text-white font-bold py-3 px-4 rounded-xl hover:scale-105 transition-transform border border-white/5"
                    >
                      <span className="text-lg">💬</span> Discord
                    </button>
                  </div>
                  <p className="mt-4 text-[10px] text-gray-500 font-bold italic">Discord: caiozinhobb7 (Clique para copiar)</p>
               </div>

               <Button fullWidth className="h-16 text-lg" onClick={() => { 
                 window.open('https://www.instagram.com/c.psyco7/', '_blank');
                 setIsCheckoutOpen(false); 
               }}>
                  PAGAR VIA PIX (CHAMAR NO INSTA) ⚡
               </Button>
               
               <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">🔒 Atendimento Direto & Seguro</p>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant */}
      <AiAssistant />
    </div>
  );
};

export default App;
