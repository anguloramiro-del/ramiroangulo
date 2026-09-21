import React from 'react';
import { Cpu, Github, Linkedin, Twitter, ArrowUp, ShieldCheck, Heart, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyan-500/20 bg-[#080c12] py-14 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                CYBER<span className="text-emerald-400">MATRIX</span> AI
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-md mb-4">
              Plataforma interactiva, moderna y educativa orientada a la divulgación técnica de la 
              Inteligencia Artificial, el Machine Learning y la Ciencia de Datos. Arquitectura 
              de visualización reactiva con simuladores locales y telemetría sintética en tiempo real.
            </p>
            <div className="text-[11px] text-cyan-400/80">
              Autor: <span className="text-white font-semibold">Arquitectura & Ingeniería AI Senior</span> • Año: 2026
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-cyan-300">
              TECNOLOGÍAS DEL NÚCLEO
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> HTML5 Semántico
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> CSS3 & Tailwind Glassmorphism
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> JavaScript & TypeScript Reactivo
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Canvas 2D & SVG Interactivo
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Web Audio API Sintetizado
              </li>
            </ul>
          </div>

          {/* Social Links & Disclaimer */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-emerald-300">
              ENLACES & COMUNIDAD
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] text-slate-400 leading-snug">
              <span className="text-amber-400 font-bold block mb-0.5">AVISO EDUCATIVO:</span>
              Plataforma para fines pedagógicos y experimentales. Las simulaciones numéricas y registros de ciberseguridad son sintetizados localmente.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CyberMatrix AI • Todos los derechos reservados • Desarrollado para exploración de Inteligencia Artificial.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors cursor-pointer"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
