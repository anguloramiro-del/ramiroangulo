import React, { useState, useEffect } from 'react';
import { ArrowDown, Cpu, Sparkles, ShieldAlert, BarChart3, Binary, Compass, Play } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlaygroundClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onPlaygroundClick }) => {
  // Live fluctuating counters for Cyberpunk Matrix feel
  const [modelsAnalyzed, setModelsAnalyzed] = useState(14892);
  const [dataProcessedGb, setDataProcessedGb] = useState(8742.6);
  const [predictionsCount, setPredictionsCount] = useState(3892401);
  const [threatsDetected, setThreatsDetected] = useState(247);

  useEffect(() => {
    const interval = setInterval(() => {
      setModelsAnalyzed((prev) => prev + Math.floor(Math.random() * 3));
      setDataProcessedGb((prev) => +(prev + (Math.random() * 0.4)).toFixed(1));
      setPredictionsCount((prev) => prev + Math.floor(Math.random() * 14 + 5));
      if (Math.random() > 0.65) {
        setThreatsDetected((prev) => prev + 1);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background isometric and radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* System status pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-semibold">CORE OPERACIONAL ACTIVO</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 tracking-wider">MATRIZ NEURAL v4.28 // LATENCIA: 1.4ms</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
          <span className="block font-mono text-cyan-400 glow-cyan drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            INTELIGENCIA ARTIFICIAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-200/90 font-medium mb-6 tracking-wide">
          Machine Learning <span className="text-emerald-400 mx-2">•</span> Data Science <span className="text-blue-400 mx-2">•</span> Tecnologías Emergentes
        </p>

        {/* Brief Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-sans">
          Explora la arquitectura matemática, algoritmos de aprendizaje profundo, pipelines analíticos 
          y simulaciones de vanguardia. Un ecosistema interactivo diseñado para decodificar la frontera 
          cognitiva entre silicio y modelos probabilísticos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="group px-7 py-3.5 rounded-xl font-mono text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span>EXPLORAR IA</span>
          </button>

          <button
            id="hero-playground-btn"
            onClick={onPlaygroundClick}
            className="group px-7 py-3.5 rounded-xl font-mono text-sm font-semibold bg-slate-900/90 hover:bg-slate-800/90 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400 group-hover:translate-x-1 transition-transform" />
            <span>INICIAR PLAYGROUND</span>
          </button>
        </div>

        {/* 4 Animated Live Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {/* Models */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-cyan-400 text-xs font-mono">
              <Cpu className="w-4 h-4" />
              <span>MODELOS ANALIZADOS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              {modelsAnalyzed.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> +4 nuevos/min
            </div>
          </div>

          {/* Data Processed */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-blue-500/20 backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-blue-400 text-xs font-mono">
              <BarChart3 className="w-4 h-4" />
              <span>DATOS PROCESADOS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              {dataProcessedGb.toLocaleString()} <span className="text-sm font-normal text-slate-400">GB</span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400 mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> 18.2 MB/s continuo
            </div>
          </div>

          {/* Predictions */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-emerald-400 text-xs font-mono">
              <Binary className="w-4 h-4" />
              <span>PREDICCIONES REALIZADAS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              {predictionsCount.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-emerald-300 mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> Precisión 99.4%
            </div>
          </div>

          {/* Threats Detected */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 backdrop-blur-md hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-red-400 text-xs font-mono">
              <ShieldAlert className="w-4 h-4" />
              <span>AMENAZAS DETECTADAS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-red-400 tracking-tight">
              {threatsDetected}
            </div>
            <div className="text-[11px] font-mono text-red-300 mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" /> 100% Mitigadas
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onExploreClick}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">DESCUBRIR MÓDULOS</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
