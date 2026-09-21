import React, { useState } from 'react';
import { 
  Cpu, Layers, Activity, Network, MessageSquareCode, 
  Eye, Sparkles, Bot, Clock, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { AI_CONCEPTS_DATA, TIMELINE_DATA } from '../data/platformData';

export const AIConceptsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'timeline'>('concepts');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5 text-teal-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="ia-fundamentos" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              MÓDULO 01 // FUNDAMENTOS COGNITIVOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              ARQUITECTURA DE LA <span className="text-cyan-400 glow-cyan">INTELIGENCIA ARTIFICIAL</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
              Explora los pilares teóricos y tecnológicos que transformaron modelos matemáticos en sistemas con capacidad perceptiva y generativa.
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-cyan-500/20 mt-4 md:mt-0 font-mono text-xs">
            <button
              onClick={() => setActiveTab('concepts')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'concepts'
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              8 Pilares Conceptuales
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'timeline'
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Línea de Tiempo (1950-2026)
            </button>
          </div>
        </div>

        {activeTab === 'concepts' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_CONCEPTS_DATA.map((concept) => {
              const isSelected = selectedCardId === concept.id;
              return (
                <div
                  key={concept.id}
                  id={`concept-card-${concept.id}`}
                  onClick={() => setSelectedCardId(isSelected ? null : concept.id)}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)]'
                      : 'bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/70 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:-translate-y-1'
                  }`}
                >
                  {/* Card top badge & icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/60 transition-all">
                        {getIcon(concept.iconName)}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        {concept.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-cyan-300 transition-colors">
                      {concept.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                      {concept.description}
                    </p>
                  </div>

                  {/* Bottom section: Application example & expand details */}
                  <div className="pt-3 border-t border-slate-800/60 mt-auto">
                    <div className="text-[11px] font-mono text-emerald-400 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ejemplo Práctico:</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans italic">
                      "{concept.example}"
                    </p>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs font-mono space-y-1 animate-in fade-in duration-200">
                        <div className="text-cyan-300 text-[10px] font-bold">COMPONENTES CLAVE:</div>
                        {concept.details.map((detail, idx) => (
                          <div key={idx} className="text-slate-300 flex items-center gap-1.5 text-[11px]">
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-2 text-right">
                      <span className="text-[10px] font-mono text-cyan-400/80 group-hover:text-cyan-300 inline-flex items-center gap-0.5">
                        {isSelected ? 'Cerrar detalle ▲' : 'Ver más detalles ▼'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Timeline view */
          <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-10 space-y-8 max-w-4xl mx-auto py-4">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node pin */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(0,240,255,0.6)]" />

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm transition-all group-hover:bg-slate-900/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      AÑO {item.year}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      Impacto: {item.impact}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white font-mono mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
