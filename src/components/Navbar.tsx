import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity, Database, Sparkles, Menu, X, Play } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'inicio', 'ia-fundamentos', 'machine-learning', 'ciencia-de-datos',
        'redes-neuronales', 'ia-generativa', 'ai-playground', 'dashboard-ds',
        'ciberseguridad', 'aplicaciones', 'tecnologias', 'etica-futuro'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'ia-fundamentos', label: 'IA' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'ciencia-de-datos', label: 'Data Science' },
    { id: 'redes-neuronales', label: 'Redes Neuronales' },
    { id: 'ia-generativa', label: 'IA Generativa' },
    { id: 'ai-playground', label: 'Playground' },
    { id: 'dashboard-ds', label: 'Dashboard' },
    { id: 'ciberseguridad', label: 'Ciberseguridad' },
    { id: 'aplicaciones', label: 'Sectores' },
    { id: 'etica-futuro', label: 'Ética' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-cyan-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => scrollTo('inicio')} 
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="relative w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-wider text-cyan-300 group-hover:text-cyan-200 flex items-center gap-1.5">
              CYBER<span className="text-emerald-400">MATRIX</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">AI.v4</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
              ML • DATA SCIENCE • NEURAL LAB
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-1" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 border-b-2 border-cyan-400 font-semibold shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions (Terminal button & Playground trigger) */}
        <div className="flex items-center gap-2.5">
          <button
            id="nav-terminal-trigger"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-900/50 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all cursor-pointer"
            title="Abrir consola interactiva CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI TERMINAL</span>
          </button>

          <button
            id="nav-playground-btn"
            onClick={() => scrollTo('ai-playground')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all cursor-pointer"
          >
            <Play className="w-3 h-3 fill-black" />
            <span className="hidden sm:inline">PLAYGROUND</span>
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-300 bg-slate-800/60 border border-slate-700 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#0d1117]/98 border-b border-cyan-500/30 px-5 py-4 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded text-xs font-mono ${
                  activeSection === link.id
                    ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/40 font-bold'
                    : 'text-slate-300 hover:text-white bg-slate-900/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2 text-xs font-mono font-medium rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" /> Abrir CLI
            </button>
            <button
              onClick={() => scrollTo('ai-playground')}
              className="flex-1 py-2 text-xs font-mono font-bold rounded bg-cyan-400 text-black flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            >
              <Play className="w-3.5 h-3.5 fill-black" /> Playground
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
