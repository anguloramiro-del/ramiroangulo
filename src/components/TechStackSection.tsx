import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Code, Cpu, ExternalLink } from 'lucide-react';
import { TECH_STACK_DATA } from '../data/platformData';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Lenguaje', 'Framework', 'Librería', 'Entorno', 'Infraestructura'];

  const filteredTools = activeCategory === 'Todos'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter(t => t.category === activeCategory);

  return (
    <section id="tecnologias" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              MÓDULO 10 // ECOSISTEMA TECNOLÓGICO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              TECNOLOGÍAS & <span className="text-emerald-400 glow-green">HERRAMIENTAS DE IA</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
              Stack estándar industrial para investigación, desarrollo de modelos matemáticos y serving de producción.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 mt-4 md:mt-0 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tool.badgeColor}`}>
                    {tool.category}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400 font-bold block mb-0.5">Uso Principal:</span>
                <span className="italic">{tool.useCase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
