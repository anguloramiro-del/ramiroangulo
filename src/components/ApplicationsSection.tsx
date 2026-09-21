import React, { useState } from 'react';
import { 
  HeartPulse, GraduationCap, Coins, Factory, Sprout, 
  Car, ShieldCheck, Cpu, Target, Microscope, CheckCircle2, Search 
} from 'lucide-react';
import { SECTOR_APPLICATIONS } from '../data/platformData';

export const ApplicationsSection: React.FC = () => {
  const [filterText, setFilterText] = useState<string>('');
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-yellow-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-orange-400" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'Car': return <Car className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Target': return <Target className="w-5 h-5 text-pink-400" />;
      case 'Microscope': return <Microscope className="w-5 h-5 text-teal-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredSectors = SECTOR_APPLICATIONS.filter(s => 
    s.sector.toLowerCase().includes(filterText.toLowerCase()) ||
    s.title.toLowerCase().includes(filterText.toLowerCase()) ||
    s.tags.some(t => t.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <section id="aplicaciones" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              MÓDULO 09 // DESPLIEGUE EN EL MUNDO REAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              APLICACIONES DE LA <span className="text-cyan-400 glow-cyan">INTELIGENCIA ARTIFICIAL</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
              10 sectores estratégicos transformados por la inferencia automatizada y la predicción algorítmica.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mt-4 md:mt-0 w-full md:w-72 font-mono text-xs">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filtrar por sector o tag..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* 10 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map((app) => {
            const isExpanded = activeSectorId === app.id;
            return (
              <div
                key={app.id}
                onClick={() => setActiveSectorId(isExpanded ? null : app.id)}
                className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getSectorIcon(app.icon)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 uppercase">
                      {app.sector}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-mono mb-2 group-hover:text-cyan-300 transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                    {app.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 mt-auto">
                  <div className="text-[11px] font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Caso Práctico:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans italic mb-3">
                    "{app.practicalExample}"
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
