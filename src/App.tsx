import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AIConceptsSection } from './components/AIConceptsSection';
import { MachineLearningSection } from './components/MachineLearningSection';
import { DataScienceSection } from './components/DataScienceSection';
import { NeuralNetworkVisualizer } from './components/NeuralNetworkVisualizer';
import { GenerativeAISection } from './components/GenerativeAISection';
import { AIPlaygroundSection } from './components/AIPlaygroundSection';
import { DataScienceDashboard } from './components/DataScienceDashboard';
import { CybersecuritySection } from './components/CybersecuritySection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { TechStackSection } from './components/TechStackSection';
import { EthicsFutureSection } from './components/EthicsFutureSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Footer } from './components/Footer';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  const handleExploreClick = () => {
    const el = document.getElementById('ia-fundamentos');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePlaygroundClick = () => {
    const el = document.getElementById('ai-playground');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 2D Interactive Canvas Neural Background */}
      <BackgroundCanvas />

      {/* Cyberpunk Scanlines & Vignette Layer */}
      <div className="fixed inset-0 pointer-events-none scanlines z-10 opacity-30" />

      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Stream */}
      <main className="relative z-20">
        {/* Section 04: Inicio / Hero */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onPlaygroundClick={handlePlaygroundClick}
        />

        {/* Section 05: Inteligencia Artificial (Fundamentos + Línea de Tiempo) */}
        <AIConceptsSection />

        {/* Section 06: Machine Learning (Supervisado, No Supervisado, Refuerzo + Simulación) */}
        <MachineLearningSection />

        {/* Section 07: Ciencia de Datos (Ciclo completo de 7 fases + Gráficos dinámicos) */}
        <DataScienceSection />

        {/* Section 08: Redes Neuronales (Visualizador interactivo con propagación de señal) */}
        <NeuralNetworkVisualizer />

        {/* Section 09: IA Generativa (Texto, Código, Difusión de Imagen, Sintetizador de Audio) */}
        <GenerativeAISection />

        {/* Section 10: AI Playground (Clasificación 2D, K-Means Clustering, Curva de Pérdida) */}
        <AIPlaygroundSection />

        {/* Section 11: Dashboard de Data Science (5 Indicadores dinámicos + 4 Gráficos en vivo) */}
        <DataScienceDashboard />

        {/* Section 12: IA y Ciberseguridad (Detección de anomalías + Pipeline en vivo) */}
        <CybersecuritySection />

        {/* Section 13: Aplicaciones de la IA (10 Sectores prácticos con búsqueda) */}
        <ApplicationsSection />

        {/* Section 14: Tecnologías y Herramientas (Python, PyTorch, TensorFlow, etc.) */}
        <TechStackSection />

        {/* Section 15: Ética y Futuro de la IA (Sesgos, Privacidad, XAI, Seguridad, AGI) */}
        <EthicsFutureSection />
      </main>

      {/* Section 18: Footer */}
      <Footer />

      {/* Section 16: Interactive CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
