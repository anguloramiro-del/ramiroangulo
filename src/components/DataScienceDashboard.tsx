import React, { useState, useEffect } from 'react';
import { Activity, BarChart3, PieChart, Database, Cpu, TrendingUp, RefreshCw, Layers } from 'lucide-react';

export const DataScienceDashboard: React.FC = () => {
  // Live dynamic counters
  const [datasetsCount, setDatasetsCount] = useState<number>(348);
  const [activeModels, setActiveModels] = useState<number>(84);
  const [predictionsSec, setPredictionsSec] = useState<number>(1420);
  const [overallAccuracy, setOverallAccuracy] = useState<number>(98.7);
  const [processedGb, setProcessedGb] = useState<number>(41829.4);

  // Live series for line chart (8 timestamps)
  const [linePoints, setLinePoints] = useState<number[]>([42, 58, 64, 52, 78, 85, 92, 88]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPredictionsSec(prev => Math.floor(1380 + Math.random() * 90));
      setOverallAccuracy(prev => +(98.4 + Math.random() * 0.5).toFixed(1));
      setProcessedGb(prev => +(prev + 0.3).toFixed(1));

      // Push new point to line series
      setLinePoints(prev => {
        const nextVal = Math.floor(65 + Math.random() * 32);
        return [...prev.slice(1), nextVal];
      });
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboard-ds" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              MÓDULO 07 // TELEMETRÍA EN VIVO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              DASHBOARD DE <span className="text-cyan-400 glow-cyan">DATA SCIENCE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
              Supervisión de pipelines distribuidos, tasas de inferencia concurrentes y telemetría de precisión en clúster.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0 font-mono text-xs text-emerald-400 bg-emerald-950/40 px-3.5 py-1.5 rounded-xl border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            STREAMING EN TIEMPO REAL ACTIVO
          </div>
        </div>

        {/* 5 Dynamic Top Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 font-mono">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mb-1">
              <Database className="w-3.5 h-3.5 text-cyan-400" /> DATASETS
            </div>
            <div className="text-2xl font-bold text-white">{datasetsCount}</div>
            <div className="text-[10px] text-cyan-400 mt-1">28 activos en pipeline</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mb-1">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> MODELOS
            </div>
            <div className="text-2xl font-bold text-purple-300">{activeModels}</div>
            <div className="text-[10px] text-purple-400 mt-1">Serving en GPU H100</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> PREDICCIONES
            </div>
            <div className="text-2xl font-bold text-emerald-400">{predictionsSec} <span className="text-xs text-slate-400">/s</span></div>
            <div className="text-[10px] text-emerald-300 mt-1">Latencia 1.8ms</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mb-1">
              <Activity className="w-3.5 h-3.5 text-blue-400" /> PRECISIÓN
            </div>
            <div className="text-2xl font-bold text-cyan-300">{overallAccuracy}%</div>
            <div className="text-[10px] text-cyan-400 mt-1">Recall: 99.1%</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md col-span-2 md:col-span-1">
            <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mb-1">
              <BarChart3 className="w-3.5 h-3.5 text-pink-400" /> DATOS PROCESADOS
            </div>
            <div className="text-2xl font-bold text-pink-300">{processedGb.toLocaleString()} <span className="text-xs text-slate-400">GB</span></div>
            <div className="text-[10px] text-pink-400 mt-1">Delta Lake Sync</div>
          </div>
        </div>

        {/* 4 Interactive Visual Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Line Chart (Throughput over time) */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Rendimiento Temporal de Inferencia (Tokens & Query/s)
                </h4>
                <p className="text-xs text-slate-400 font-mono">Monitoreo continuo de 8 ventanas temporales</p>
              </div>
              <span className="text-xs font-mono text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                PICO: 98.4%
              </span>
            </div>

            <div className="w-full h-52 bg-slate-950 rounded-xl p-3 border border-slate-800 relative flex items-end">
              <svg className="w-full h-full" viewBox="0 0 350 160" preserveAspectRatio="none">
                <line x1="0" y1="40" x2="350" y2="40" stroke="rgba(255,255,255,0.06)" />
                <line x1="0" y1="80" x2="350" y2="80" stroke="rgba(255,255,255,0.06)" />
                <line x1="0" y1="120" x2="350" y2="120" stroke="rgba(255,255,255,0.06)" />

                {/* Line Path */}
                {(() => {
                  let path = `M 0,${160 - (linePoints[0] / 100) * 140}`;
                  linePoints.forEach((val, idx) => {
                    const x = idx * (350 / (linePoints.length - 1));
                    const y = 160 - (val / 100) * 140;
                    path += ` L ${x},${y}`;
                  });
                  return (
                    <g>
                      <path d={path} fill="none" stroke="#00f0ff" strokeWidth="2.5" />
                      {linePoints.map((val, idx) => {
                        const x = idx * (350 / (linePoints.length - 1));
                        const y = 160 - (val / 100) * 140;
                        return (
                          <circle key={idx} cx={x} cy={y} r="4" fill="#00ff66" stroke="#0d1117" strokeWidth="1.5" />
                        );
                      })}
                    </g>
                  );
                })()}
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
              <span>T-70s</span>
              <span>T-50s</span>
              <span>T-30s</span>
              <span>T-10s</span>
              <span className="text-cyan-400 font-bold">AHORA</span>
            </div>
          </div>

          {/* Chart 2: Bar Chart (Model workload per category) */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Distribución de Carga por Tarea de IA
                </h4>
                <p className="text-xs text-slate-400 font-mono">Llamadas concurrentes por categoría</p>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs my-auto">
              {[
                { label: 'LLM & Inferencia de Texto', percent: 84, color: 'bg-cyan-400' },
                { label: 'Visión por Computadora (CV)', percent: 68, color: 'bg-emerald-400' },
                { label: 'Modelos Predictivos Tabulares', percent: 52, color: 'bg-blue-500' },
                { label: 'Detección de Anomalías de Red', percent: 79, color: 'bg-purple-400' },
                { label: 'Síntesis Neural de Audio', percent: 35, color: 'bg-pink-400' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-slate-300 text-[11px] mb-1">
                    <span>{item.label}</span>
                    <span className="text-white font-bold">{item.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${item.percent}%` }}
                      className={`h-full rounded-full ${item.color} shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-all duration-500`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800">
              Balanceo de carga dinámico: Servidores Kubernetes sin cuellos de botella
            </div>
          </div>

          {/* Chart 3: Circular / Donut Chart */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <PieChart className="w-4 h-4 text-purple-400" />
                Composición de Modelos en Producción
              </h4>
              <p className="text-xs text-slate-400 font-mono">Cuota de distribución por arquitectura</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 my-auto">
              {/* SVG Donut */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1e293b" strokeWidth="14" />
                  {/* Transformers 45% */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#00f0ff" strokeWidth="14" strokeDasharray="107 238" strokeDashoffset="0" />
                  {/* CNNs 25% */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#00ff66" strokeWidth="14" strokeDasharray="59 238" strokeDashoffset="-107" />
                  {/* Gradient Boost 20% */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#a855f7" strokeWidth="14" strokeDasharray="47 238" strokeDashoffset="-166" />
                  {/* RL Policies 10% */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#ec4899" strokeWidth="14" strokeDasharray="25 238" strokeDashoffset="-213" />
                </svg>
                <div className="absolute text-center font-mono">
                  <span className="text-xs text-slate-400">TOTAL</span>
                  <div className="text-sm font-bold text-white">84 Mod.</div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-300">Transformers: 45%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">CNNs & ViT: 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <span className="text-slate-300">GBDT / XGBoost: 20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                  <span className="text-slate-300">Políticas RL: 10%</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800 text-center">
              Compilados a runtime ONNX y TensorRT
            </div>
          </div>

          {/* Chart 4: 2D Dispersion (Scatter Plot) */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-pink-400" />
                Dispersión Multidimensional de Vectores (Embeddings t-SNE)
              </h4>
              <p className="text-xs text-slate-400 font-mono">Proyección 2D de representaciones semánticas</p>
            </div>

            <div className="w-full h-44 bg-slate-950 rounded-xl p-2 border border-slate-800 relative overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 150">
                {/* Cluster A */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <circle
                    key={`ca-${i}`}
                    cx={70 + Math.sin(i * 2.3) * 35}
                    cy={75 + Math.cos(i * 1.8) * 30}
                    r="2.5"
                    fill="#00f0ff"
                    opacity="0.8"
                  />
                ))}
                {/* Cluster B */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <circle
                    key={`cb-${i}`}
                    cx={170 + Math.sin(i * 1.9) * 30}
                    cy={50 + Math.cos(i * 2.5) * 25}
                    r="2.5"
                    fill="#00ff66"
                    opacity="0.8"
                  />
                ))}
                {/* Cluster C */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <circle
                    key={`cc-${i}`}
                    cx={230 + Math.sin(i * 3.1) * 32}
                    cy={100 + Math.cos(i * 1.4) * 28}
                    r="2.5"
                    fill="#ec4899"
                    opacity="0.8"
                  />
                ))}
              </svg>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-0.5 rounded">
                Cos-Similarity &gt; 0.88
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800 text-center">
              Separabilidad de clústeres validada por Silhouette Score = 0.82
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
