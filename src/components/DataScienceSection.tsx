import React, { useState } from 'react';
import { Database, Filter, Search, BarChart2, Cpu, Eye, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const DataScienceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dataFilter, setDataFilter] = useState<'all' | 'clean' | 'normalized'>('all');

  const lifecycleSteps = [
    {
      id: 'datos',
      name: 'Datos',
      icon: Database,
      tagline: 'Recolección & Extracción',
      description: 'Ingesta de fuentes heterogéneas: Data Lakes, APIs REST, flujos IoT, bases de datos SQL/NoSQL y web scraping masivo.',
      deliverable: 'Datasets crudos (Raw Data) en Parquet, JSON o Avro.',
      metrics: 'Volumen: 12.4 TB | Formato: Delta Lake'
    },
    {
      id: 'limpieza',
      name: 'Limpieza',
      icon: Filter,
      tagline: 'Transformación & Imputación',
      description: 'Detección de valores nulos (NaN), remoción de registros duplicados, tratamiento de valores atípicos (outliers) y tipado estricto.',
      deliverable: 'Pipeline reproducible con Pandas / PySpark.',
      metrics: 'Integridad: 99.98% | Registros limpiados: 4.8M'
    },
    {
      id: 'exploracion',
      name: 'Exploración',
      icon: Search,
      tagline: 'EDA (Análisis Exploratorio)',
      description: 'Inspección de distribuciones univariadas y multivariadas, matriz de correlación de Pearson y detección de asimetría o curtosis.',
      deliverable: 'Matriz de calor de correlaciones y resumen estadístico.',
      metrics: 'Variables analizadas: 64 features'
    },
    {
      id: 'analisis',
      name: 'Análisis',
      icon: BarChart2,
      tagline: 'Inferencia Estadística',
      description: 'Pruebas de hipótesis (p-value, test A/B, ANOVA, Chi-cuadrado) y modelado causal para validar patrones con significancia matemática.',
      deliverable: 'Informe de significancia estadística (IC 95%).',
      metrics: 'Valor p < 0.001 | Potencia estadística: 0.92'
    },
    {
      id: 'modelo',
      name: 'Modelo',
      icon: Cpu,
      tagline: 'Entrenamiento & Tuning',
      description: 'Selección de arquitecturas predictivas, búsqueda de hiperparámetros (Bayesian Optimization) y validación cruzada estratificada K-fold.',
      deliverable: 'Binario serializado (.onnx / .pkl / TorchScript).',
      metrics: 'ROC-AUC: 0.941 | F1-Score: 0.928'
    },
    {
      id: 'visualizacion',
      name: 'Visualización',
      icon: Eye,
      tagline: 'Dashboards & Narrativa',
      description: 'Comunicación visual de hallazgos mediante gráficos de dispersión, diagramas de caja (boxplots) e interfaces interactivas para negocio.',
      deliverable: 'Paneles de visualización ejecutiva en tiempo real.',
      metrics: 'Latencia de render: <16ms (60 FPS)'
    },
    {
      id: 'decision',
      name: 'Decisión',
      icon: CheckCircle,
      tagline: 'Impacto Estratégico',
      description: 'Traducción de predicciones probabilísticas en acciones operativas automatizadas: fijación de precios, alertas clínicas o compras.',
      deliverable: 'Políticas operativas y retorno de inversión (ROI).',
      metrics: 'Eficiencia operativa ganada: +32%'
    }
  ];

  // Dynamic distribution histogram bars
  const histogramBars = [
    { label: '0-10', height: dataFilter === 'all' ? 24 : dataFilter === 'clean' ? 18 : 12 },
    { label: '10-20', height: dataFilter === 'all' ? 45 : dataFilter === 'clean' ? 38 : 28 },
    { label: '20-30', height: dataFilter === 'all' ? 78 : dataFilter === 'clean' ? 70 : 60 },
    { label: '30-40', height: dataFilter === 'all' ? 120 : dataFilter === 'clean' ? 115 : 110 },
    { label: '40-50', height: dataFilter === 'all' ? 150 : dataFilter === 'clean' ? 145 : 142 },
    { label: '50-60', height: dataFilter === 'all' ? 135 : dataFilter === 'clean' ? 130 : 126 },
    { label: '60-70', height: dataFilter === 'all' ? 95 : dataFilter === 'clean' ? 88 : 82 },
    { label: '70-80', height: dataFilter === 'all' ? 60 : dataFilter === 'clean' ? 52 : 44 },
    { label: '80-90', height: dataFilter === 'all' ? 40 : dataFilter === 'clean' ? 30 : 20 },
    { label: '90-100', height: dataFilter === 'all' ? 25 : dataFilter === 'clean' ? 12 : 5 },
  ];

  const currentStep = lifecycleSteps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="ciencia-de-datos" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            MÓDULO 03 // PIPELINE ANALÍTICO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            CICLO DE VIDA DE <span className="text-blue-400 glow-cyan">DATA SCIENCE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            De señales crudas a decisiones predictivas cuantificables. La metodología de 7 fases para transformar datos en valor estratégico.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Flow Bar */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-[780px] justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            
            {lifecycleSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-blue-600 text-black border-2 border-cyan-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] font-bold'
                        : isPast
                        ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border border-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`mt-2 text-xs font-mono ${isActive ? 'text-cyan-300 font-bold' : 'text-slate-400'}`}>
                    {step.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Paso 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Deep-Dive & Dynamic Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Step Detail Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl p-6 bg-slate-900/70 border border-blue-500/30 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  FASE 0{activeStep + 1} / 07
                </span>
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <StepIcon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono mb-1">
                {currentStep.name}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mb-4">{currentStep.tagline}</div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {currentStep.description}
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Artefacto Entregable:</div>
                  <div className="text-emerald-300 font-semibold mt-0.5">{currentStep.deliverable}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Métricas de Control:</div>
                  <div className="text-cyan-300 font-semibold mt-0.5">{currentStep.metrics}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-6 font-mono text-xs">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(s => Math.max(0, s - 1))}
                className="px-3 py-1.5 rounded bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                ← Fase Anterior
              </button>
              <button
                disabled={activeStep === lifecycleSteps.length - 1}
                onClick={() => setActiveStep(s => Math.min(lifecycleSteps.length - 1, s + 1))}
                className="px-3 py-1.5 rounded bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 text-black font-bold cursor-pointer flex items-center gap-1"
              >
                Siguiente Fase →
              </button>
            </div>
          </div>

          {/* Dynamic SVG / Canvas Visualization Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl p-6 bg-slate-900/70 border border-slate-800 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                    Distribución Gaussiana & Limpieza de Outliers
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">Densidad probabilística simulada</p>
                </div>

                {/* Filter controls */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setDataFilter('all')}
                    className={`px-2.5 py-1 rounded transition-all ${
                      dataFilter === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Datos Crudos
                  </button>
                  <button
                    onClick={() => setDataFilter('clean')}
                    className={`px-2.5 py-1 rounded transition-all ${
                      dataFilter === 'clean' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Limpios
                  </button>
                  <button
                    onClick={() => setDataFilter('normalized')}
                    className={`px-2.5 py-1 rounded transition-all ${
                      dataFilter === 'normalized' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Z-Score Normalizado
                  </button>
                </div>
              </div>

              {/* Dynamic SVG Histogram Bar Chart */}
              <div className="w-full h-52 bg-slate-950/90 rounded-xl p-4 border border-slate-800 flex items-end justify-between gap-2">
                {histogramBars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group h-full justify-end">
                    <div className="text-[9px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.height}
                    </div>
                    <div
                      style={{ height: `${(bar.height / 160) * 100}%` }}
                      className="w-full rounded-t-sm bg-gradient-to-t from-blue-700 via-cyan-500 to-emerald-400 transition-all duration-500 group-hover:brightness-125 shadow-[0_0_8px_rgba(0,240,255,0.2)]"
                    />
                    <span className="text-[9px] font-mono text-slate-500">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Footer */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-center font-mono">
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-slate-400">Media (μ)</div>
                <div className="text-sm font-bold text-white">49.82</div>
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-slate-400">Desv. Estándar (σ)</div>
                <div className="text-sm font-bold text-cyan-300">14.16</div>
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-slate-400">Asimetría (Skewness)</div>
                <div className="text-sm font-bold text-emerald-400">-0.04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
