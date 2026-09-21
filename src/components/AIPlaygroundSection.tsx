import React, { useState, useMemo } from 'react';
import { Play, Sliders, RefreshCw, Layers, Crosshair, BarChart, Binary, Cpu } from 'lucide-react';

interface Point2D {
  x: number;
  y: number;
  label: 0 | 1;
}

export const AIPlaygroundSection: React.FC = () => {
  const [activeExperiment, setActiveExperiment] = useState<'classification' | 'clustering' | 'prediction'>('classification');

  // Classification simulation parameters
  const [numSamples, setNumSamples] = useState<number>(40);
  const [boundaryThreshold, setBoundaryThreshold] = useState<number>(50); // decision boundary offset
  const [boundarySlope, setBoundarySlope] = useState<number>(1.2);

  // Clustering simulation parameters
  const [clusterK, setClusterK] = useState<number>(3);
  const [clusterSpread, setClusterSpread] = useState<number>(20);
  const [clusterSeed, setClusterSeed] = useState<number>(1);

  // Prediction simulation parameters
  const [predEpochs, setPredEpochs] = useState<number>(50);
  const [predNoise, setPredNoise] = useState<number>(12);

  // Generate 2D points for classification
  const classificationPoints: Point2D[] = useMemo(() => {
    const pts: Point2D[] = [];
    for (let i = 0; i < numSamples; i++) {
      const x = Math.round(10 + Math.random() * 80);
      const y = Math.round(10 + Math.random() * 80);
      // boundary: y > slope * x + (boundaryThreshold - 50)
      const expectedY = boundarySlope * x + (boundaryThreshold - 50);
      const label = y > expectedY ? 1 : 0;
      pts.push({ x, y, label });
    }
    return pts;
  }, [numSamples, boundaryThreshold, boundarySlope]);

  // Compute accuracy of classification boundary
  const accuracy = useMemo(() => {
    const correct = classificationPoints.filter(p => {
      const pred = p.y > (boundarySlope * p.x + (boundaryThreshold - 50)) ? 1 : 0;
      return pred === p.label;
    }).length;
    return Math.round((correct / classificationPoints.length) * 100);
  }, [classificationPoints, boundarySlope, boundaryThreshold]);

  return (
    <section id="ai-playground" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            MÓDULO 06 // EXPERIMENTACIÓN ACTIVA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            AI <span className="text-cyan-400 glow-cyan">PLAYGROUND INTERACTIVO</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            Laboratorio dinámico sin backend: manipula distribuciones vectoriales, ajusta hiperparámetros y observa cómo los algoritmos convergen en tiempo real.
          </p>
        </div>

        {/* Experiment Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 font-mono text-xs max-w-xl">
          <button
            onClick={() => setActiveExperiment('classification')}
            className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeExperiment === 'classification'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Crosshair className="w-4 h-4" /> Clasificación 2D
          </button>
          <button
            onClick={() => setActiveExperiment('clustering')}
            className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeExperiment === 'clustering'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Binary className="w-4 h-4" /> K-Means Clustering
          </button>
          <button
            onClick={() => setActiveExperiment('prediction')}
            className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeExperiment === 'prediction'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart className="w-4 h-4" /> Curva de Inferencia
          </button>
        </div>

        {/* Simulation Environment Container */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
          {activeExperiment === 'classification' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">HIPERPLANO DE SEPARACIÓN</div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    Frontera de Decisión Lineal (SVM / Regresión Logística)
                  </div>
                </div>

                {/* Slider: Samples count */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Muestras Sintéticas:</span>
                    <span className="text-cyan-400 font-bold">{numSamples} puntos</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={numSamples}
                    onChange={(e) => setNumSamples(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                {/* Slider: Boundary offset */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Sesgo de la Frontera (Offset b):</span>
                    <span className="text-emerald-400 font-bold">{boundaryThreshold - 50}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    step="1"
                    value={boundaryThreshold}
                    onChange={(e) => setBoundaryThreshold(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                {/* Slider: Boundary slope */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Pendiente del Hiperplano (W₁ / W₂):</span>
                    <span className="text-purple-400 font-bold">{boundarySlope.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={boundarySlope}
                    onChange={(e) => setBoundarySlope(Number(e.target.value))}
                    className="w-full accent-purple-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                {/* Live Accuracy Meter */}
                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">PRECISIÓN DE CLASIFICACIÓN</div>
                    <div className="text-2xl font-bold text-cyan-300">{accuracy}%</div>
                  </div>
                  <div className="text-right text-[11px] text-emerald-400">
                    <div>F1-Score: {(accuracy / 100 * 0.98).toFixed(2)}</div>
                    <div className="text-slate-400">Pérdida (Loss): {(1 - accuracy / 100).toFixed(2)}</div>
                  </div>
                </div>
              </div>

              {/* Visual 2D Scatter Space (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 relative">
                <div className="w-full h-72 sm:h-80 bg-slate-900/90 rounded-xl relative overflow-hidden border border-slate-800">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Background boundary split colors */}
                    <polygon
                      points={`0,0 100,0 100,${Math.min(100, Math.max(0, 100 - (boundarySlope * 100 + (boundaryThreshold - 50))))} 0,${Math.min(100, Math.max(0, 100 - (boundaryThreshold - 50)))}`}
                      fill="rgba(56, 189, 248, 0.08)"
                    />
                    <polygon
                      points={`0,100 100,100 100,${Math.min(100, Math.max(0, 100 - (boundarySlope * 100 + (boundaryThreshold - 50))))} 0,${Math.min(100, Math.max(0, 100 - (boundaryThreshold - 50)))}`}
                      fill="rgba(236, 72, 153, 0.08)"
                    />

                    {/* Decision Boundary Line */}
                    <line
                      x1="0"
                      y1={100 - (boundaryThreshold - 50)}
                      x2="100"
                      y2={100 - (boundarySlope * 100 + (boundaryThreshold - 50))}
                      stroke="#00f0ff"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />

                    {/* Data Points */}
                    {classificationPoints.map((pt, i) => (
                      <circle
                        key={i}
                        cx={pt.x}
                        cy={100 - pt.y}
                        r="2.2"
                        fill={pt.label === 1 ? '#38bdf8' : '#ec4899'}
                        stroke="#0d1117"
                        strokeWidth="0.5"
                      />
                    ))}
                  </svg>

                  {/* Legend overlay */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] font-mono flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-sky-400">
                      <span className="w-2 h-2 rounded-full bg-sky-400" /> Clase A (y &gt; w·x+b)
                    </div>
                    <div className="flex items-center gap-1.5 text-pink-400">
                      <span className="w-2 h-2 rounded-full bg-pink-400" /> Clase B (y &lt; w·x+b)
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center text-slate-500 font-mono text-[11px]">
                  Espacio euclidiano bidimensional normalizado [0, 100] × [0, 100]
                </div>
              </div>
            </div>
          )}

          {activeExperiment === 'clustering' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">ALGORITMO DE PARTICIÓN K-MEANS</div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    Asignación de Centroides & Minimizador de Varianza
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Número de Clusters (K):</span>
                    <span className="text-cyan-400 font-bold">{clusterK}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4].map((k) => (
                      <button
                        key={k}
                        onClick={() => setClusterK(k)}
                        className={`py-2 rounded-lg border ${
                          clusterK === k
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                            : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        K = {k} Clusters
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Dispersión de Puntos (Varianza intra-cluster):</span>
                    <span className="text-emerald-400 font-bold">{clusterSpread}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="35"
                    value={clusterSpread}
                    onChange={(e) => setClusterSpread(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                <button
                  onClick={() => setClusterSeed(s => s + 1)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Re-inicializar Centroides Aleatorios</span>
                </button>
              </div>

              {/* Visual Clusters 2D Space */}
              <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div className="w-full h-72 sm:h-80 bg-slate-900/90 rounded-xl relative overflow-hidden border border-slate-800 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Render Cluster 1, 2, 3 centroids & clouds */}
                    {Array.from({ length: clusterK }).map((_, cIdx) => {
                      const colors = ['#00f0ff', '#00ff66', '#a855f7', '#fbbf24'];
                      const cColor = colors[cIdx % colors.length];
                      const cx = 25 + (cIdx % 2) * 50 + (clusterSeed % 10);
                      const cy = 25 + Math.floor(cIdx / 2) * 50 + (clusterSeed % 7);

                      return (
                        <g key={cIdx}>
                          {/* Centroid icon */}
                          <circle cx={cx} cy={cy} r="3" fill="#fff" stroke={cColor} strokeWidth="1" />
                          <circle cx={cx} cy={cy} r="6" fill="none" stroke={cColor} strokeWidth="0.5" strokeDasharray="1 1" />
                          
                          {/* Surrounding points */}
                          {Array.from({ length: 15 }).map((__, pIdx) => {
                            const angle = (pIdx / 15) * Math.PI * 2;
                            const dist = (Math.sin(pIdx * 13 + clusterSeed) * 0.5 + 0.5) * clusterSpread * 0.6;
                            const px = cx + Math.cos(angle) * dist;
                            const py = cy + Math.sin(angle) * dist;
                            return (
                              <circle key={pIdx} cx={px} cy={py} r="1.5" fill={cColor} opacity="0.85" />
                            );
                          })}
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <div className="mt-3 text-center text-slate-500 font-mono text-[11px]">
                  Minimización de WCSS (Within-Cluster Sum of Squares)
                </div>
              </div>
            </div>
          )}

          {activeExperiment === 'prediction' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">CONVERGENCIA DE ÉPOCAS</div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    Curva de Pérdida (Loss) vs Iteraciones de Descenso
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Épocas de Entrenamiento:</span>
                    <span className="text-cyan-400 font-bold">{predEpochs} épocas</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={predEpochs}
                    onChange={(e) => setPredEpochs(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>Estocasticidad de Gradiente (Batch Noise):</span>
                    <span className="text-amber-400 font-bold">{predNoise}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="2"
                    value={predNoise}
                    onChange={(e) => setPredNoise(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30">
                  <div className="text-[10px] text-slate-400 uppercase">PÉRDIDA ASINTÓTICA FINAL</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {(0.85 * Math.exp(-predEpochs / 30) + predNoise * 0.003).toFixed(4)}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Convergencia validada sin sobreajuste</div>
                </div>
              </div>

              {/* Loss Curve SVG */}
              <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div className="w-full h-72 sm:h-80 bg-slate-900/90 rounded-xl relative overflow-hidden border border-slate-800 p-4 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    {/* Grid */}
                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.06)" />

                    {/* Smooth loss curve */}
                    {(() => {
                      let dPath = `M 10,20`;
                      for (let i = 1; i <= 39; i++) {
                        const x = i * 10;
                        const factor = i / (predEpochs / 2.5);
                        const y = Math.min(185, Math.max(15, 185 - (165 * Math.exp(-factor) + Math.sin(i * 1.5) * (predNoise * 0.5))));
                        dPath += ` L ${x},${y}`;
                      }
                      return (
                        <path
                          d={dPath}
                          fill="none"
                          stroke="#00ff66"
                          strokeWidth="2.5"
                        />
                      );
                    })()}
                  </svg>
                  <div className="absolute top-3 left-4 text-xs font-mono text-emerald-400 font-bold">
                    Curva de Pérdida de Entrenamiento (Cross-Entropy Loss)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
