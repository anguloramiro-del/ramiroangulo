import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Zap, Sliders, Info, ShieldCheck } from 'lucide-react';

export const NeuralNetworkVisualizer: React.FC = () => {
  // Visualizer configuration state
  const [hiddenLayersCount, setHiddenLayersCount] = useState<number>(2);
  const [neuronsPerHidden, setNeuronsPerHidden] = useState<number>(4);
  const [activationFunction, setActivationFunction] = useState<'relu' | 'sigmoid' | 'tanh'>('relu');
  const [weightMultiplier, setWeightMultiplier] = useState<number>(1.2);
  const [isPropagating, setIsPropagating] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(-1); // for sequential signal propagation animation
  const [predictionOutput, setPredictionOutput] = useState<{ classA: number; classB: number }>({ classA: 87.4, classB: 12.6 });

  // Input neurons (e.g. 3 inputs: x1, x2, bias) and Output neurons (e.g. 2 outputs: Clase A, Clase B)
  const inputCount = 3;
  const outputCount = 2;

  // Build layer architecture: [3, neuronsPerHidden, ..., 2]
  const layerStructure = [
    inputCount,
    ...Array(hiddenLayersCount).fill(neuronsPerHidden),
    outputCount,
  ];

  const totalLayers = layerStructure.length;

  const handlePropagate = () => {
    if (isPropagating) return;
    setIsPropagating(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < totalLayers) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsPropagating(false);
        setActiveStep(-1);
        // Randomize output based on parameters
        const valA = Math.min(99.4, Math.max(10, +(70 + Math.random() * 25 * (weightMultiplier / 1.5)).toFixed(1)));
        const valB = +(100 - valA).toFixed(1);
        setPredictionOutput({ classA: valA, classB: valB });
      }
    }, 450);
  };

  return (
    <section id="redes-neuronales" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            MÓDULO 04 // DEEP LEARNING ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            SIMULADOR VISUAL DE <span className="text-purple-400 glow-cyan">REDES NEURONALES</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            Entrada → Capas Ocultas → Salida. Observa la multiplicación tensorial ponderada y la propagación de señales en tiempo real.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-purple-500/30 backdrop-blur-md">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-6 mb-8 border-b border-slate-800 text-xs font-mono">
            {/* Number of Hidden Layers */}
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Capas Ocultas:</span>
                <span className="text-purple-400 font-bold">{hiddenLayersCount}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHiddenLayersCount(num)}
                    className={`py-1.5 rounded border ${
                      hiddenLayersCount === num
                        ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {num} Capa{num > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Neurons per hidden layer */}
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Neuronas por Capa:</span>
                <span className="text-cyan-400 font-bold">{neuronsPerHidden}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setNeuronsPerHidden(num)}
                    className={`py-1.5 rounded border text-center ${
                      neuronsPerHidden === num
                        ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Activation Function */}
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Función de Activación:</span>
                <span className="text-emerald-400 font-bold uppercase">{activationFunction}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {(['relu', 'sigmoid', 'tanh'] as const).map((fn) => (
                  <button
                    key={fn}
                    onClick={() => setActivationFunction(fn)}
                    className={`py-1.5 rounded border text-center uppercase ${
                      activationFunction === fn
                        ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </div>
            </div>

            {/* Weights Scale / Trigger Forward Pass */}
            <div className="flex flex-col justify-end">
              <button
                id="propagate-signal-btn"
                onClick={handlePropagate}
                disabled={isPropagating}
                className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-black shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 transition-all"
              >
                <Zap className={`w-4 h-4 ${isPropagating ? 'animate-bounce' : ''}`} />
                <span>{isPropagating ? 'PROPAGANDO SEÑAL...' : 'PROPAGAR SEÑAL (FORWARD PASS)'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Neural SVG Graph */}
          <div className="relative w-full h-[360px] sm:h-[400px] bg-slate-950/90 rounded-2xl border border-slate-800 p-4 overflow-hidden flex items-center justify-center">
            {/* SVG graph */}
            <svg className="w-full h-full" viewBox="0 0 800 380">
              {/* Draw Synaptic Weights / Lines between layers */}
              {layerStructure.map((count, layerIdx) => {
                if (layerIdx === layerStructure.length - 1) return null;
                const nextCount = layerStructure[layerIdx + 1];

                const x1 = 120 + (layerIdx * (560 / (layerStructure.length - 1)));
                const x2 = 120 + ((layerIdx + 1) * (560 / (layerStructure.length - 1)));

                return Array.from({ length: count }).map((_, n1) => {
                  const y1 = 190 + (n1 - (count - 1) / 2) * 55;

                  return Array.from({ length: nextCount }).map((_, n2) => {
                    const y2 = 190 + (n2 - (nextCount - 1) / 2) * 55;

                    const isLayerActive = activeStep === layerIdx;
                    const strokeColor = isLayerActive 
                      ? '#00f0ff' 
                      : (n1 + n2) % 2 === 0 ? 'rgba(168,85,247,0.22)' : 'rgba(56,189,248,0.2)';

                    return (
                      <g key={`link-${layerIdx}-${n1}-${n2}`}>
                        <line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={strokeColor}
                          strokeWidth={isLayerActive ? 2.5 : 1}
                        />
                        {/* Animated signal pulse if active */}
                        {isLayerActive && (
                          <circle r="3.5" fill="#00ff66">
                            <animate
                              attributeName="cx"
                              from={x1}
                              to={x2}
                              dur="0.45s"
                              repeatCount="1"
                            />
                            <animate
                              attributeName="cy"
                              from={y1}
                              to={y2}
                              dur="0.45s"
                              repeatCount="1"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  });
                });
              })}

              {/* Draw Neurons */}
              {layerStructure.map((count, layerIdx) => {
                const x = 120 + (layerIdx * (560 / (layerStructure.length - 1)));
                const isLayerActive = activeStep === layerIdx;
                const isInput = layerIdx === 0;
                const isOutput = layerIdx === layerStructure.length - 1;

                return Array.from({ length: count }).map((_, nIdx) => {
                  const y = 190 + (nIdx - (count - 1) / 2) * 55;
                  const nodeColor = isLayerActive 
                    ? '#00ff66' 
                    : isInput 
                    ? '#38bdf8' 
                    : isOutput 
                    ? '#ec4899' 
                    : '#a855f7';

                  return (
                    <g key={`node-${layerIdx}-${nIdx}`} className="cursor-pointer">
                      {/* Glow halo */}
                      {isLayerActive && (
                        <circle
                          cx={x}
                          cy={y}
                          r="22"
                          fill="none"
                          stroke="#00ff66"
                          strokeWidth="2"
                          className="animate-ping"
                        />
                      )}
                      {/* Base neuron */}
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="#0d1117"
                        stroke={nodeColor}
                        strokeWidth="2.5"
                      />
                      {/* Inner core */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isLayerActive ? "9" : "6"}
                        fill={nodeColor}
                        opacity={isLayerActive ? 1 : 0.75}
                      />
                      {/* Label */}
                      <text
                        x={x}
                        y={y + 30}
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {isInput ? `x${nIdx + 1}` : isOutput ? `ŷ${nIdx + 1}` : `h${layerIdx}.${nIdx + 1}`}
                      </text>
                    </g>
                  );
                });
              })}

              {/* Layer Title Headers */}
              {layerStructure.map((_, layerIdx) => {
                const x = 120 + (layerIdx * (560 / (layerStructure.length - 1)));
                const label = layerIdx === 0 
                  ? 'ENTRADA' 
                  : layerIdx === layerStructure.length - 1 
                  ? 'SALIDA' 
                  : `OCULTA ${layerIdx}`;
                return (
                  <text
                    key={`header-${layerIdx}`}
                    x={x}
                    y={35}
                    textAnchor="middle"
                    fill={activeStep === layerIdx ? '#00f0ff' : '#64748b'}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {label}
                  </text>
                );
              })}
            </svg>

            {/* Live Outputs Overlay */}
            <div className="absolute bottom-3 right-4 bg-slate-900/90 border border-pink-500/30 px-4 py-2.5 rounded-xl font-mono text-xs">
              <div className="text-[10px] text-pink-300 font-bold mb-1">PROBABILIDAD SOFTMAX:</div>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-slate-400">Clase A: </span>
                  <span className="text-emerald-400 font-bold">{predictionOutput.classA}%</span>
                </div>
                <div>
                  <span className="text-slate-400">Clase B: </span>
                  <span className="text-cyan-400 font-bold">{predictionOutput.classB}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
            <div>Fórmula tensorial: <span className="text-purple-300">Z = σ(W · X + b)</span></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Optimización: Retropropagación con Adam (η=0.001)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
