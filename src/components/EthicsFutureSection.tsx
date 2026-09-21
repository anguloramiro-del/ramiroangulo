import React, { useState } from 'react';
import { Scale, Lock, EyeOff, ShieldCheck, FileCheck, Users, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export const EthicsFutureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ethics' | 'future'>('ethics');

  const ethicsTopics = [
    {
      title: 'Sesgos Algorítmicos & Imparcialidad',
      icon: Scale,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      summary: 'Los modelos reproducen e intensifican prejuicios históricos presentes en los datos de entrenamiento.',
      solution: 'Auditorías de disparidad demográfica, métricas de paridad estadística y des-sesgado en embeddings.'
    },
    {
      title: 'Privacidad & Anonimización',
      icon: Lock,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      summary: 'Riesgo de extracción de datos personales o memorización no intencionada en modelos de lenguaje.',
      solution: 'Privacidad Diferencial (DP-SGD), Aprendizaje Federado y hashing criptográfico irreversible.'
    },
    {
      title: 'Transparencia & Explicabilidad (XAI)',
      icon: EyeOff,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      summary: 'El problema de la "caja negra" en redes neuronales profundas dificulta auditorías en sectores críticos.',
      solution: 'Técnicas SHAP, valores de Shapley, mapas de saliencia (Grad-CAM) y árboles de decisión subrogados.'
    },
    {
      title: 'Seguridad & Alineamiento (Safety)',
      icon: ShieldCheck,
      color: 'text-red-400',
      border: 'border-red-500/30',
      summary: 'Vulnerabilidades frente a jailbreaks, inyecciones de prompt y ataques de evasión adversarial.',
      solution: 'Alineamiento RLHF / DPO, clasificadores de moderación perimetrales y pruebas de penetración Red Teaming.'
    },
    {
      title: 'Gobernanza & Uso Responsable',
      icon: FileCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      summary: 'Necesidad de marcos regulatorios globales como el EU AI Act y directrices de la UNESCO.',
      solution: 'Fichas de modelo (Model Cards), tarjetas de datos (Datasheets) y trazabilidad de procedencia sintética.'
    },
    {
      title: 'Impacto Laboral & Transición Económica',
      icon: Briefcase,
      color: 'text-blue-400',
      border: 'border-blue-500/30',
      summary: 'Automatización de tareas rutinarias cognitivas y redefinición radical de profesiones técnicas.',
      solution: 'Políticas de recalificación activa (reskilling), aumento colaborativo humano-máquina y educación continua.'
    }
  ];

  return (
    <section id="etica-futuro" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              MÓDULO 11 // RESPONSABILIDAD & HORIZONTE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              ÉTICA, GOBERNANZA & <span className="text-amber-400 glow-cyan">FUTURO DE LA IA</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
              Un enfoque analítico y equilibrado sobre la seguridad algorítmica, los derechos humanos y el camino hacia la Inteligencia General Artificial (AGI).
            </p>
          </div>

          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800 mt-4 md:mt-0 font-mono text-xs">
            <button
              onClick={() => setActiveTab('ethics')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'ethics' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Pilares Éticos
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'future' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Horizonte & AGI
            </button>
          </div>
        </div>

        {activeTab === 'ethics' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicsTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-slate-900/60 border ${topic.border} backdrop-blur-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${topic.color}`} />
                      </div>
                      <h3 className="text-base font-bold text-white font-mono">{topic.title}</h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                      {topic.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] font-mono">
                    <span className="text-emerald-400 font-bold block mb-0.5">Mitigación Técnica:</span>
                    <span className="text-slate-400 italic font-sans">{topic.solution}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Future of AI & AGI View */
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-amber-500/30 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              El Camino hacia la Inteligencia General Artificial (AGI)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              La transición de modelos de lenguaje especializados hacia sistemas capaces de razonamiento formal, 
              planificación recursiva, verificación matemática autónoma y síntesis de hipótesis científicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-amber-400 font-bold mb-1">FASE ACTUAL: AGENTES & SYSTEM 2</div>
                <p className="text-slate-400 font-sans text-xs">
                  Modelos con cadenas de razonamiento reflexivo (Chain-of-Thought) que validan código y verifican resultados antes de responder.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">HORIZONTE PRÓXIMO: DESCUBRIMIENTO CIENTÍFICO</div>
                <p className="text-slate-400 font-sans text-xs">
                  Sistemas capaces de formular hipótesis en mecánica cuántica, sintetizar moléculas farmacéuticas y diseñar superconductores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-purple-400 font-bold mb-1">DESAFÍO CRÍTICO: ALINEAMIENTO DE VALORES</div>
                <p className="text-slate-400 font-sans text-xs">
                  Garantizar formalmente que objetivos superinteligentes permanezcan matemáticamente alineados con el bienestar humano.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
