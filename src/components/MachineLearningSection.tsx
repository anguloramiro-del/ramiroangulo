import React, { useState, useMemo } from 'react';
import { Sliders, RefreshCw, ArrowRight, Brain, Zap, Target, GitBranch, Shuffle } from 'lucide-react';

export const MachineLearningSection: React.FC = () => {
  // Interactive Simulation State
  const [featureX, setFeatureX] = useState<number>(65); // e.g. input feature (experience / size)
  const [learningRate, setLearningRate] = useState<number>(0.05);
  const [noiseLevel, setNoiseLevel] = useState<number>(10);
  const [modelType, setModelType] = useState<'linear' | 'polynomial'>('linear');
  const [seed, setSeed] = useState<number>(42);

  // Compute simulated regression prediction and dataset
  const { simulatedPrediction, confidence, dataPoints } = useMemo(() => {
    // Generate 12 sample points based on noise and model
    const points = [];
    for (let i = 1; i <= 10; i++) {
      const xVal = i * 10;
      const base = modelType === 'linear' ? xVal * 1.8 + 20 : Math.pow(xVal / 10, 2) * 1.8 + xVal * 0.5 + 15;
      const pseudoNoise = ((Math.sin(i * seed) * 10000) % noiseLevel) - (noiseLevel / 2);
      points.push({ x: xVal, y: Math.max(5, Math.round(base + pseudoNoise)) });
    }

    // Prediction for user featureX
    let pred = 0;
    if (modelType === 'linear') {
      pred = featureX * 1.8 + 20;
    } else {
      pred = Math.pow(featureX / 10, 2) * 1.8 + featureX * 0.5 + 15;
    }
    pred = Math.round(pred * (1 + (learningRate - 0.05) * 0.4));
    const conf = Math.max(70, Math.min(99.6, +(99.6 - noiseLevel * 0.9).toFixed(1)));

    return { simulatedPrediction: Math.max(10, pred), confidence: conf, dataPoints: points };
  }, [featureX, learningRate, noiseLevel, modelType, seed]);

  return (
    <section id="machine-learning" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MÓDULO 02 // PARADIGMAS DE APRENDIZAJE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            MACHINE LEARNING <span className="text-emerald-400 glow-green">// ALGORITMOS NUCLEARES</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            Modelos que descubren funciones matemáticas latentes a partir de la experiencia empírica. 
            Supervisado, no supervisado y por refuerzo.
          </p>
        </div>

        {/* 3 Paradigms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* 1. Supervised */}
          <div className="rounded-2xl p-6 bg-slate-900/50 border border-emerald-500/30 hover:border-emerald-400/60 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  TIPO 01
                </span>
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">
                Aprendizaje Supervisado
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Entrenamiento con pares de entrada-salida etiquetados (X, Y). El algoritmo minimiza una función de coste mediante gradiente para predecir etiquetas desconocidas.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-emerald-300 font-semibold mb-0.5">● Regresión:</div>
                  <div className="text-slate-400 text-[11px]">Predicción de variables continuas (valor inmobiliario, temperatura).</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-cyan-300 font-semibold mb-0.5">● Clasificación:</div>
                  <div className="text-slate-400 text-[11px]">Separación en categorías discretas (detección de tumores, spam vs legítimo).</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-blue-300 font-semibold mb-0.5">● Predicción:</div>
                  <div className="text-slate-400 text-[11px]">Inferencia de series temporales y demanda futura.</div>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400/90 pt-3 border-t border-slate-800">
              Objetivo: f(X) ≈ Y con mínimo residuo cuadrático.
            </div>
          </div>

          {/* 2. Unsupervised */}
          <div className="rounded-2xl p-6 bg-slate-900/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  TIPO 02
                </span>
                <GitBranch className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">
                Aprendizaje No Supervisado
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Extracción de patrones y estructuras intrínsecas a partir de datos crudos sin etiquetas previas. Agrupa densidades y reduce dimensionalidad.
              </p>

              <div className="space-y-2 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-cyan-300 font-semibold mb-0.5">● Clustering (K-Means / DBSCAN):</div>
                  <div className="text-slate-400 text-[11px]">Segmentación de clientes y perfiles psicográficos.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-purple-300 font-semibold mb-0.5">● Reducción de Dimensionalidad (PCA / t-SNE):</div>
                  <div className="text-slate-400 text-[11px]">Compresión de hiperplanos de alta dimensión a 2D/3D.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-mono">
                  <div className="text-amber-300 font-semibold mb-0.5">● Detección de Patrones & Anomalías:</div>
                  <div className="text-slate-400 text-[11px]">Aislamiento de outliers en transacciones y telecomunicaciones.</div>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-cyan-400/90 pt-3 border-t border-slate-800">
              Objetivo: P(X) modelado y distancia euclidiana entre clusters.
            </div>
          </div>

          {/* 3. Reinforcement Learning */}
          <div className="rounded-2xl p-6 bg-slate-900/50 border border-purple-500/30 hover:border-purple-400/60 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  TIPO 03
                </span>
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">
                Aprendizaje por Refuerzo
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Un agente interactúa activamente con un entorno dinámico para maximizar una función de recompensa acumulativa a largo plazo mediante ensayo y error.
              </p>

              {/* Diagram Agente -> Accion -> Entorno -> Recompensa */}
              <div className="p-3 rounded-xl bg-slate-800/90 border border-purple-500/30 text-xs font-mono my-3 space-y-2">
                <div className="text-[10px] text-purple-300 font-bold uppercase tracking-wider text-center">
                  CICLO MARKOV DE DECISIÓN (MDP)
                </div>
                <div className="flex items-center justify-between text-center gap-1">
                  <div className="px-2 py-1.5 rounded bg-purple-950/80 border border-purple-400/40 text-purple-300 font-semibold text-[11px]">
                    Agente
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <div className="px-2 py-1.5 rounded bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-semibold text-[11px]">
                    Acción
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <div className="px-2 py-1.5 rounded bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 font-semibold text-[11px]">
                    Entorno
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <div className="px-2 py-1.5 rounded bg-amber-950/80 border border-amber-400/40 text-amber-300 font-semibold text-[11px]">
                    Recompensa
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 text-center italic mt-1">
                  Política óptima π*(a|s) mediante Q-Learning / PPO
                </div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-purple-400/90 pt-3 border-t border-slate-800">
              Aplicaciones: AlphaGo, robótica bípeda y trading de derivados.
            </div>
          </div>
        </div>

        {/* Interactive ML Simulator Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-mono font-bold">
                <Zap className="w-4 h-4 text-cyan-400" />
                SIMULADOR INTERACTIVO DE PREDICCIÓN EN TIEMPO REAL
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">
                Ajuste de Parámetros e Inferencia Inmediata
              </h3>
            </div>

            <button
              onClick={() => setSeed(s => s + 1)}
              className="self-start lg:self-auto px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 hover:text-white flex items-center gap-2 cursor-pointer transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Regenerar Muestra Aleatoria</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Slider 1: Feature X */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Característica X (Variable de Entrada):</span>
                  <span className="text-cyan-400 font-bold">{featureX} unidades</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={featureX}
                  onChange={(e) => setFeatureX(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Slider 2: Noise */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Nivel de Ruido en Datos (Varianza σ):</span>
                  <span className="text-amber-400 font-bold">{noiseLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  step="1"
                  value={noiseLevel}
                  onChange={(e) => setNoiseLevel(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Slider 3: Learning Rate */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Tasa de Aprendizaje (α Learning Rate):</span>
                  <span className="text-emerald-400 font-bold">{learningRate.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0.005"
                  max="0.1"
                  step="0.005"
                  value={learningRate}
                  onChange={(e) => setLearningRate(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Model Complexity Toggle */}
              <div>
                <div className="text-xs font-mono text-slate-300 mb-2">Hipótesis de Ajuste:</div>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <button
                    onClick={() => setModelType('linear')}
                    className={`py-2 rounded-lg border text-center transition-all ${
                      modelType === 'linear'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Regresión Lineal
                  </button>
                  <button
                    onClick={() => setModelType('polynomial')}
                    className={`py-2 rounded-lg border text-center transition-all ${
                      modelType === 'polynomial'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Polinomial (Grado 2)
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Chart & Live Result (7 cols) */}
            <div className="lg:col-span-7 bg-slate-950/70 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
              {/* Live Metric Badges */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30">
                  <div className="text-[10px] font-mono text-slate-400">PREDICCIÓN INFERIDA ŷ</div>
                  <div className="text-2xl font-mono font-bold text-cyan-300">
                    {simulatedPrediction} <span className="text-xs font-normal text-slate-400">pts</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/30">
                  <div className="text-[10px] font-mono text-slate-400">CONFIANZA ESTADÍSTICA</div>
                  <div className="text-2xl font-mono font-bold text-emerald-400">
                    {confidence}%
                  </div>
                </div>
              </div>

              {/* SVG 2D Regression Plot */}
              <div className="relative w-full h-48 bg-slate-900/90 rounded-lg border border-slate-800/90 p-2 overflow-hidden flex items-end">
                <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="45" x2="400" y2="45" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="0" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  
                  {/* Scatter Data points */}
                  {dataPoints.map((pt, i) => {
                    const cx = (pt.x / 100) * 380 + 10;
                    const cy = 170 - (pt.y / 240) * 155;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={Math.max(10, Math.min(170, cy))}
                        r="4"
                        fill="#38bdf8"
                        opacity="0.8"
                      />
                    );
                  })}

                  {/* Regression Fit Line / Curve */}
                  {modelType === 'linear' ? (
                    <line
                      x1="10"
                      y1={170 - (38 / 240) * 155}
                      x2="390"
                      y2={170 - (200 / 240) * 155}
                      stroke="#00ff66"
                      strokeWidth="2.5"
                    />
                  ) : (
                    <path
                      d="M 10,160 Q 200,120 390,20"
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Current Active Inferred Point */}
                  {(() => {
                    const curX = (featureX / 100) * 380 + 10;
                    const curY = Math.max(10, Math.min(170, 170 - (simulatedPrediction / 240) * 155));
                    return (
                      <g>
                        <line x1={curX} y1="0" x2={curX} y2="180" stroke="#f43f5e" strokeDasharray="2 2" strokeWidth="1" />
                        <circle cx={curX} cy={curY} r="7" fill="#f43f5e" />
                        <circle cx={curX} cy={curY} r="12" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-ping" />
                      </g>
                    );
                  })()}
                </svg>

                <div className="absolute top-2 right-2 flex items-center gap-3 text-[10px] font-mono">
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400" /> Muestras empíricas
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="w-3 h-0.5 bg-emerald-400" /> Ajuste de modelo
                  </div>
                  <div className="flex items-center gap-1 text-rose-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Predicción ŷ
                  </div>
                </div>
              </div>

              <div className="mt-3 text-[11px] font-mono text-slate-400 text-center">
                Métrica evaluada: Error Cuadrático Medio (MSE) ≈ {(noiseLevel * 0.42).toFixed(2)} | Residuos estables
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
