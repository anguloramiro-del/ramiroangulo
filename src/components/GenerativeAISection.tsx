import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Code2, Image as ImageIcon, Music, Cpu, Play, RefreshCw, Volume2 } from 'lucide-react';

export const GenerativeAISection: React.FC = () => {
  const [activeModality, setActiveModality] = useState<'text' | 'code' | 'image' | 'audio'>('text');
  const [promptInput, setPromptInput] = useState<string>('Explicar cómo funciona la auto-atención en Transformers');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [streamedOutput, setStreamedOutput] = useState<string>('');
  const [diffusionStep, setDiffusionStep] = useState<number>(100); // 100 to 0 noise

  const samplePrompts = {
    text: [
      'Explicar cómo funciona la auto-atención en Transformers',
      'Resumir el Teorema del Límite Central en computación',
      'Describir el impacto del aprendizaje por refuerzo en robótica'
    ],
    code: [
      'Implementar una función de activación LeakyReLU en Python/NumPy',
      'Algoritmo de cálculo de entropía cruzada binaria',
      'Pipeline de preprocesamiento de tensores normalizados'
    ],
    image: [
      'Ciberciudad futurista con rascacielos holográficos y lluvia de neón',
      'Procesador cuántico neuronal brillando en el vacío cósmico',
      'Célula biológica sintetizada por nanobots inteligentes'
    ],
    audio: [
      'Secuencia polifónica generativa en escala pentatónica menor',
      'Pulso de bajo sintetizado Cyberpunk a 120 BPM',
      'Ambiente sonoro espacial con resonancia modular'
    ]
  };

  const simulatedOutputs = {
    text: `[TOKEN_STREAM_START]
El mecanismo de Auto-Atención (Self-Attention) permite que cada token en una secuencia pondere dinámicamente la relevancia de todos los demás tokens contextuales.

1. Proyecciones Matriciales:
   Cada vector de entrada xᵢ se proyecta en tres espacios vectoriales:
   • Query (Q) = W_Q · xᵢ
   • Key   (K) = W_K · xᵢ
   • Value (V) = W_V · xᵢ

2. Ponderación de Escalares:
   Attention(Q, K, V) = softmax( (Q · Kᵀ) / √d_k ) · V

3. Ventaja Fundamental:
   A diferencia de las RNNs secuenciales (O(n) pasos temporales), la auto-atención se computa en una única multiplicación tensorial paralelizada en GPU O(1).
[FIN DE GENERACIÓN // TOKENS: 142 // LATENCIA: 28ms]`,

    code: `# Implementación Vectorizada en Python / NumPy
import numpy as np

def leaky_relu(x: np.ndarray, alpha: float = 0.01) -> np.ndarray:
    """
    Calcula f(x) = max(alpha * x, x)
    Preserva gradientes evitando el problema de neuronas 'muertas'.
    """
    return np.where(x > 0, x, x * alpha)

# Inferencia simulada de tensores
tensor_in = np.array([-2.4, -0.8, 0.0, 1.5, 4.2])
activations = leaky_relu(tensor_in, alpha=0.05)
print("Salida activada:", activations)
# Salida: [-0.12, -0.04, 0.0, 1.5, 4.2]`,

    image: 'Simulación de Difusión en Espacio Latente Completada.',
    audio: 'Frecuencias armónicas generadas exitosamente.'
  };

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setStreamedOutput('');

    if (activeModality === 'image') {
      let step = 100;
      const interval = setInterval(() => {
        step -= 20;
        setDiffusionStep(step);
        if (step <= 0) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 350);
      return;
    }

    if (activeModality === 'audio') {
      // Synthesize actual tone using Web Audio API safely
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);
          osc.frequency.exponentialRampToValueAtTime(330, ctx.currentTime + 0.6);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.9);
        }
      } catch {
        // audio fallback
      }
      setTimeout(() => {
        setStreamedOutput('Onda sintetizada: Frecuencias fundamentales [220Hz -> 440Hz -> 330Hz] con decaimiento ADSR completado.');
        setIsGenerating(false);
      }, 1000);
      return;
    }

    // Text & code streaming simulation
    const fullText = simulatedOutputs[activeModality];
    let currentIndex = 0;
    const chunkSize = 5;

    const timer = setInterval(() => {
      currentIndex += chunkSize;
      setStreamedOutput(fullText.slice(0, currentIndex));
      if (currentIndex >= fullText.length) {
        clearInterval(timer);
        setIsGenerating(false);
      }
    }, 25);
  };

  return (
    <section id="ia-generativa" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-950/60 border border-pink-500/30 text-pink-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            MÓDULO 05 // SÍNTESIS DE ALTA DIMENSIÓN
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            IA GENERATIVA & <span className="text-pink-400 glow-cyan">MODELOS DE FUNDACIÓN</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            De LLMs autoregresivos a modelos de difusión latente y arquitecturas multimodales nativas.
          </p>
        </div>

        {/* 6 Core Dimensions Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { id: 'text', title: 'Texto & LLMs', icon: FileText, desc: 'Modelos de lenguaje autorregresivos (Transformers decodificadores).' },
            { id: 'code', title: 'Código & Lógica', icon: Code2, desc: 'Traducción de lenguaje natural a AST y sintaxis ejecutable.' },
            { id: 'image', title: 'Difusión de Imagen', icon: ImageIcon, desc: 'Desruidado iterativo (Denoising) en espacio latente continuo.' },
            { id: 'audio', title: 'Voz & Audio Neural', icon: Music, desc: 'Sintetizadores de espectrogramas y audio end-to-end.' },
            { id: 'llm', title: 'Razonamiento LLM', icon: Cpu, desc: 'Chain-of-Thought, alineamiento RLHF y verificación formal.' },
            { id: 'multimodal', title: 'Multimodal Nativo', icon: Sparkles, desc: 'Integración unificada de tensores de texto, visión y habla.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Simulated Generative System */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-pink-500/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="text-pink-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                SIMULADOR DE MOTOR GENERATIVO LOCAL (SIN LLAVES EXTERNAS)
              </div>
              <h3 className="text-xl font-bold text-white font-mono mt-1">
                Laboratorio de Inferencia Multimodal Sintética
              </h3>
            </div>

            {/* Modality Selector */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
              <button
                onClick={() => { setActiveModality('text'); setPromptInput(samplePrompts.text[0]); }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeModality === 'text' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Texto
              </button>
              <button
                onClick={() => { setActiveModality('code'); setPromptInput(samplePrompts.code[0]); }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeModality === 'code' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" /> Código
              </button>
              <button
                onClick={() => { setActiveModality('image'); setPromptInput(samplePrompts.image[0]); }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeModality === 'image' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" /> Imagen
              </button>
              <button
                onClick={() => { setActiveModality('audio'); setPromptInput(samplePrompts.audio[0]); }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeModality === 'audio' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Music className="w-3.5 h-3.5" /> Audio
              </button>
            </div>
          </div>

          {/* Prompt input and generation settings */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Ingresa tu prompt para simular la generación..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm font-mono text-cyan-200 focus:outline-none focus:border-pink-400"
              />
              <button
                id="genai-generate-btn"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-pink-500 hover:bg-pink-400 text-black shadow-[0_0_20px_rgba(236,72,153,0.4)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 transition-all"
              >
                {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-black" />}
                <span>{isGenerating ? 'GENERANDO...' : 'SINTETIZAR RESULTADO'}</span>
              </button>
            </div>

            {/* Quick sample chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">Ejemplos:</span>
              {samplePrompts[activeModality].map((sample, i) => (
                <button
                  key={i}
                  onClick={() => setPromptInput(sample)}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] truncate max-w-[280px]"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Simulation Output Canvas / Box */}
          <div className="min-h-[220px] rounded-xl bg-slate-950 p-5 border border-slate-800 font-mono text-xs relative overflow-hidden flex flex-col justify-between">
            {activeModality === 'image' ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-64 h-64 rounded-xl border-2 border-pink-500/40 overflow-hidden flex items-center justify-center bg-slate-900">
                  {/* Procedural pixelated cyber landscape visualizer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, #ec4899 0%, #3b82f6 50%, #0d1117 100%)`,
                      filter: `blur(${diffusionStep * 0.15}px) contrast(${100 + (100 - diffusionStep)}%)`,
                    }}
                  />
                  <div className="relative z-10 text-center p-3 bg-black/60 backdrop-blur-md rounded-lg border border-pink-500/30">
                    <div className="text-[11px] text-pink-300 font-bold">DESRUIDADO LATENTE</div>
                    <div className="text-sm text-white">Paso de Difusión: {100 - diffusionStep}%</div>
                    <div className="text-[9px] text-slate-400 mt-1">Resolución simulada: 1024x1024</div>
                  </div>
                </div>
                <div className="mt-4 text-slate-400 text-[11px]">
                  {diffusionStep === 0 ? '✓ Inferencia de difusión gaussiana completada sin artefactos.' : 'Simulando descenso estocástico en espacio latente...'}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-500 text-[10px]">
                  <span>MODALIDAD: {activeModality.toUpperCase()} // TEMPERATURA: {temperature}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MOTOR VIRTUAL ACTIVO
                  </span>
                </div>
                <pre className="text-slate-200 mt-3 whitespace-pre-wrap font-mono leading-relaxed">
                  {streamedOutput || 'Haz clic en "Sintetizar Resultado" para ejecutar el streaming generativo simulado.'}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
