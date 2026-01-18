
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  XCircle, 
  CheckCircle2, 
  UserCircle, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  BarChart3,
  MessageCircle
} from 'lucide-react';
import { SlideLayout } from './components/SlideLayout.tsx';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 6;
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá Weskley, vi sua apresentação e gostaria de estruturar o relacionamento digital da minha escola.";

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen bg-slate-900 overflow-hidden text-slate-900 select-none">
      
      {/* Barra de Progresso Superior */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide 0: Capa */}
      <SlideLayout active={currentSlide === 0} background="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="max-w-4xl animate-fade-in-up text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs md:text-sm font-semibold tracking-wider uppercase">
            Especialista em Gestão Digital
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:mb-8 leading-tight">
            Por que o relacionamento com os pais <span className="text-blue-400 italic">quebra</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/80 mb-10 md:mb-12 max-w-2xl font-light mx-auto md:mx-0">
            O esforço da sua equipe não é o problema. 
            <span className="font-bold text-white block mt-2 underline decoration-blue-500/50 underline-offset-8">É a falta de estrutura.</span>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-16 pt-8 border-t border-white/10">
            <img 
              src="https://i.imgur.com/eUGpgJR.jpeg" 
              alt="Weskley Gomes" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500 shadow-2xl object-cover"
            />
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-lg md:text-xl leading-tight">Weskley Gomes</p>
              <p className="text-blue-200/60 text-xs md:text-sm uppercase tracking-widest mt-1">Especialista em estrutura digital e processos escolares</p>
            </div>
          </div>
        </div>
      </SlideLayout>

      {/* Slide 1: O Problema Real */}
      <SlideLayout active={currentSlide === 1}>
        <div className="w-full">
          <header className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Página 1 — O Problema Real</h2>
            <h3 className="text-2xl md:text-5xl font-serif text-slate-800 leading-tight">O caos não nasce do conflito.</h3>
            <p className="text-lg md:text-2xl text-slate-500 mt-2 font-light italic">Ele nasce da falta de processo.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="space-y-3 md:space-y-4">
              {[
                "Pais só entram em contato quando há problema",
                "Comunicação fragmentada por múltiplos canais",
                "Setores falando com o pai de formas diferentes",
                "Falta de histórico claro de interações",
                "Escola operando em constante modo reativo"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <AlertCircle className="text-amber-500 w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl min-h-[250px]">
              <div className="relative z-10">
                <h4 className="text-blue-400 font-bold mb-4 md:mb-6 uppercase text-[10px] md:text-xs tracking-widest">O Resultado do Desajuste</h4>
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-light text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Ruído constante</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Comparação com a concorrência</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Sensação de desorganização</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Perda progressiva de confiança</li>
                </ul>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-5 transform rotate-12">
                <ShieldCheck size={200} className="md:w-[280px]" />
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>

      {/* Slide 2: O Erro Comum */}
      <SlideLayout active={currentSlide === 2} background="bg-red-50">
        <div className="w-full">
          <header className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Página 2 — O Erro Comum</h2>
            <h3 className="text-2xl md:text-5xl font-serif text-slate-800 leading-tight text-balance">Mensagens em excesso não é comunicação.</h3>
          </header>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex-1 w-full space-y-6 md:space-y-8">
              <div className="p-5 md:p-8 bg-white rounded-2xl border-l-4 md:border-l-8 border-red-500 shadow-xl">
                <p className="text-base md:text-lg text-slate-500 mb-4 md:mb-6 font-medium">Reações que apenas "apagam incêndio":</p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-3 text-slate-800 font-bold p-2 md:p-3 bg-red-50 rounded-lg text-xs md:text-base">
                    <XCircle className="text-red-500 w-4 h-4 md:w-5 md:h-5" /> Grupos
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-slate-800 font-bold p-2 md:p-3 bg-red-50 rounded-lg text-xs md:text-base">
                    <XCircle className="text-red-500 w-4 h-4 md:w-5 md:h-5" /> Avisos
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-slate-800 font-bold p-2 md:p-3 bg-red-50 rounded-lg text-xs md:text-base">
                    <XCircle className="text-red-500 w-4 h-4 md:w-5 md:h-5" /> Respostas
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-slate-800 font-bold p-2 md:p-3 bg-red-50 rounded-lg text-xs md:text-base">
                    <XCircle className="text-red-500 w-4 h-4 md:w-5 md:h-5" /> Reação
                  </div>
                </div>
              </div>

              <div className="bg-red-600 p-6 md:p-8 rounded-2xl text-white shadow-lg">
                <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">O Erro Central:</h4>
                <p className="text-red-50 opacity-90 leading-relaxed text-sm md:text-lg font-light">
                  Não está na frequência, mas na <strong>ausência de uma jornada clara</strong>. Sem previsibilidade, qualquer falha vira crise.
                </p>
              </div>
            </div>

            <div className="w-full md:w-80 flex md:flex-col gap-4">
              <div className="flex-1 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-red-100 flex flex-col items-center text-center group hover:border-red-500 transition-colors">
                <MessageSquare className="text-red-200 group-hover:text-red-500 transition-colors mb-2 md:mb-3 w-8 h-8 md:w-12 md:h-12" />
                <p className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold mb-1">Causa Raiz</p>
                <p className="font-bold text-slate-800 text-[10px] md:text-base">Falta de jornada anual</p>
              </div>
              <div className="flex-1 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-red-100 flex flex-col items-center text-center group hover:border-red-500 transition-colors">
                <UserCircle className="text-red-200 group-hover:text-red-500 transition-colors mb-2 md:mb-3 w-8 h-8 md:w-12 md:h-12" />
                <p className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold mb-1">Falha Gestão</p>
                <p className="font-bold text-slate-800 text-[10px] md:text-base">Não centralizado</p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>

      {/* Slide 3: A Visão Correta */}
      <SlideLayout active={currentSlide === 3} background="bg-emerald-50">
        <div className="w-full">
          <header className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Página 3 — A Visão Correta</h2>
            <h3 className="text-2xl md:text-5xl font-serif text-slate-800 leading-tight">Estrutura é o novo diferencial.</h3>
            <p className="text-lg md:text-2xl text-emerald-600 mt-2 font-medium">Processo traz paz e lucro.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: TrendingUp, title: "Previsibilidade", desc: "O pai sabe quando será acionado. Zero surpresas." },
              { icon: CheckCircle2, title: "Centralização", desc: "Histórico único. Toda a escola fala a mesma língua." },
              { icon: ShieldCheck, title: "Percepção Valor", desc: "O pai enxerga profissionalismo, não apenas operacional." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 md:p-8 rounded-2xl border-b-4 border-emerald-500 shadow-lg hover:-translate-y-1 md:hover:-translate-y-2 transition-transform">
                <item.icon className="text-emerald-500 mb-3 md:mb-4" size={28} />
                <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-2xl">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-serif mb-2 md:mb-4 text-emerald-400">É sobre Estrutura, não Sistema.</h4>
              <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
                Pare de procurar o software mágico. Comece desenhando o <strong>processo de relacionamento</strong>.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl w-full md:w-auto">
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li className="flex items-center gap-2 text-emerald-300"><CheckCircle2 size={14}/> Equipe menos sobrecarregada</li>
                <li className="flex items-center gap-2 text-emerald-300"><CheckCircle2 size={14}/> Retenção de alunos em alta</li>
                <li className="flex items-center gap-2 text-emerald-300"><CheckCircle2 size={14}/> Marca escolar valorizada</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>

      {/* Slide 4: Estudo de Caso / Resultados */}
      <SlideLayout active={currentSlide === 4} background="bg-indigo-50">
        <div className="w-full">
          <header className="mb-6 md:mb-10 text-center md:text-left">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 flex items-center justify-center md:justify-start gap-2">
              <BarChart3 size={14} /> Estudo de Caso: Colégio Reação
            </h2>
            <h3 className="text-2xl md:text-5xl font-serif text-slate-900 leading-tight">
              Resultados de uma <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-4">Estrutura Digital</span>
            </h3>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-4 md:border-8 border-white bg-white">
                <img 
                  src="https://i.imgur.com/neWv2gJ.png" 
                  alt="Relatório de crescimento Colégio Reação" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-2 right-2 md:top-6 md:right-6 bg-indigo-600 text-white px-3 py-1 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-xl">
                  +300% de Procura
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 w-full">
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-xl border border-indigo-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0"></div>
                <div className="relative z-10 text-center md:text-left">
                  <h4 className="text-4xl md:text-5xl font-black text-indigo-600 mb-1 md:mb-2 leading-none">3x</h4>
                  <p className="text-slate-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-4 md:mb-6">Mais visibilidade em 3 meses</p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-lg mb-6 md:mb-8">
                    Não foi sorte. Foi o alinhamento da <strong>estrutura digital</strong> com a necessidade do mercado.
                  </p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 md:gap-3 w-full py-4 md:py-5 bg-green-500 hover:bg-green-600 text-white rounded-xl md:rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl shadow-green-500/30 uppercase tracking-tighter text-xs md:text-base"
                  >
                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                    REPLICAR NO MEU COLÉGIO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>

      {/* Slide 5: Fechamento */}
      <SlideLayout active={currentSlide === 5} background="bg-slate-950">
        <div className="w-full text-center mx-auto py-6 md:py-10">
          <div className="mb-6 md:mb-10 inline-block">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
               {/* Fixed: Replaced invalid md:size prop with Tailwind classes for responsive dimensions */}
               <ShieldCheck className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 md:mb-8 px-2">
            Pare de apagar incêndios e passe a <span className="text-blue-400 italic">liderar</span> com previsibilidade.
          </h2>
          <p className="text-base md:text-2xl text-blue-200/60 font-light max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16 px-4">
            O relacionamento estruturado é o caminho para uma escola saudável e pais satisfeitos.
          </p>

          <div className="px-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 md:gap-4 w-full md:w-auto px-6 md:px-12 py-5 md:py-7 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl md:rounded-3xl font-black text-sm md:text-3xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/40 uppercase group"
            >
              {/* Fixed: Replaced invalid md:size prop with Tailwind classes for responsive dimensions */}
              <MessageCircle className="group-hover:rotate-12 transition-transform w-6 h-6 md:w-9 md:h-9" />
              QUERO ESTRUTURAR MINHA ESCOLA
            </a>
          </div>
          
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex flex-col items-center">
            <img 
              src="https://i.imgur.com/eUGpgJR.jpeg" 
              alt="Weskley Gomes" 
              className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/20 object-cover shadow-2xl mb-3 md:mb-4"
            />
            <p className="text-white font-serif text-lg md:text-2xl">Weskley Gomes</p>
            <p className="text-blue-400/60 text-[10px] md:text-sm mt-1 font-medium tracking-widest uppercase">Especialista em Estrutura Digital</p>
          </div>
        </div>
      </SlideLayout>

      {/* Controles de Navegação Flutuantes - Tamanho reduzido em mobile */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-3 md:gap-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-slate-800 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-2xl"
          title="Slide Anterior"
        >
          {/* Fixed: Replaced invalid md:size prop with Tailwind classes for responsive dimensions */}
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-[0_0_20px_rgba(37,99,235,0.4)] md:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-90"
          title="Próximo Slide"
        >
          {/* Fixed: Replaced invalid md:size prop with Tailwind classes for responsive dimensions */}
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 text-white/20 text-[8px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase z-50 pointer-events-none">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
