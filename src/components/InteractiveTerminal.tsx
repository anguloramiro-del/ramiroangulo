import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string;
}

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '1', type: 'system', text: 'CYBERMATRIX AI VIRTUAL TERMINAL v4.28 [UNIX EMULATION]' },
    { id: '2', type: 'system', text: 'Escribe "help" para ver la lista de comandos disponibles.' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', text: `$ ${raw}` }
    ];

    setCommandHistory(prev => [raw, ...prev]);
    setHistoryIndex(-1);

    switch (cmd) {
      case 'help':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `Comandos soportados por CyberMatrix CLI:
  • help           - Muestra este manual de comandos
  • ai.status      - Estado del núcleo de inferencia y latencia
  • ml.models      - Lista los modelos activos en producción
  • data.analyze   - Ejecuta un análisis estadístico en lote
  • neural.network - Resumen de la topología tensorial en GPU
  • security.scan  - Auditoría de intrusiones y telemetría de red
  • system.info    - Arquitectura de cómputo y especificaciones
  • clear          - Limpia la pantalla de la consola`
        });
        break;

      case 'ai.status':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `[ESTADO DEL NÚCLEO]
  ● Runtime: ONNX Runtime + TensorRT v10.2
  ● Disponibilidad: 99.998%
  ● Inferencia Media: 1.42 ms / lote
  ● Memoria VRAM Asignada: 74.2 / 80 GB (H100 SXM5)
  ● Estado: ÓPTIMO (Zero Anomalies)`
        });
        break;

      case 'ml.models':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `[MODELOS SERVIDOS EN PARALELO]
  1. Transformer-Decoder-7B    | Estado: SERVING | QPS: 840
  2. ViT-Segmenter-Large       | Estado: SERVING | QPS: 320
  3. XGBoost-Credit-v3         | Estado: SERVING | QPS: 1200
  4. Autoencoder-NIDS-Secure   | Estado: SERVING | QPS: 5400`
        });
        break;

      case 'data.analyze':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `Ejecutando pipeline EDA rápido sobre /datasets/telemetry.parquet...
  [+] 1,482,900 registros cargados en memoria
  [+] Valores nulos (NaN) imputados: 0.00%
  [+] Test Shapiro-Wilk: p = 0.042 (Distribución casi-normal)
  [+] Correlación máxima: Pearson r(Feature_4, Feature_9) = 0.89`
        });
        break;

      case 'neural.network':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `TOPOLOGÍA DE RED NEURONAL ACTIVA:
  Capa de Entrada: 3 tensores normalizados
  Capa Oculta 1:   64 perceptrones (Activación: ReLU)
  Capa Oculta 2:   32 perceptrones (Activación: GeLU + Dropout 0.1)
  Capa de Salida:  2 clases probabilísticas (Softmax)
  Optimizador:     AdamW (lr=1e-4, weight_decay=0.01)`
        });
        break;

      case 'security.scan':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `INICIANDO ESCANEO DE SEGURIDAD EN RED...
  [OK] Reglas SOAR: 1,420 activas
  [OK] Detección de intrusiones (IDS): 0 brechas
  [OK] Cifrado TLS 1.3: Verificado de extremo a extremo
  [!] 1 intento de fuerza bruta SSH bloqueado desde 45.142.120.8`
        });
        break;

      case 'system.info':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `ESPECIFICACIONES DEL SISTEMA:
  • Sistema Operativo: CyberMatrix Linux Core v6.8.0
  • Aceleración: 8x NVIDIA H100 Tensor Core GPU
  • Motor Front-end: HTML5 / Modern Responsive / WebGL & Canvas 2D
  • Entorno: Aislado, Seguro y 100% Autónomo (Simulación Local)`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: `Comando no reconocido: "${raw}". Escribe "help" para ver la lista de comandos.`
        });
        break;
    }

    setHistory(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const demoCommands = ['help', 'ai.status', 'ml.models', 'data.analyze', 'neural.network', 'security.scan', 'system.info', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full bg-[#090d13] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[96vh] max-w-[96vw]' : 'h-[620px] max-w-4xl'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-cyan-300 font-bold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              terminal@cybermatrix-ai:~$
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
              title={isMaximized ? 'Restaurar' : 'Maximizar'}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-red-400 hover:bg-slate-800 rounded transition-colors"
              title="Cerrar terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick demo pills */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 shrink-0">Comandos rápidos:</span>
          {demoCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 border border-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Screen */}
        <div className="flex-1 p-4 font-mono text-xs text-slate-300 overflow-y-auto space-y-2 select-text">
          {history.map((line) => (
            <div
              key={line.id}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'input'
                  ? 'text-cyan-300 font-semibold'
                  : line.type === 'error'
                  ? 'text-red-400'
                  : line.type === 'success'
                  ? 'text-emerald-400'
                  : line.type === 'system'
                  ? 'text-amber-400/90'
                  : 'text-slate-300'
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un comando (ej: help, ai.status, ml.models, security.scan)..."
            className="flex-1 bg-transparent text-cyan-200 outline-none placeholder-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer"
            title="Ejecutar"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
