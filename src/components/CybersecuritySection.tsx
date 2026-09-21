import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, AlertTriangle, ArrowRight, Activity, Terminal, Radio, Lock, Eye } from 'lucide-react';
import { ThreatPacket } from '../types';

export const CybersecuritySection: React.FC = () => {
  const [sensitivityThreshold, setSensitivityThreshold] = useState<number>(75);
  const [isFirewallActive, setIsFirewallActive] = useState<boolean>(true);
  const [packets, setPackets] = useState<ThreatPacket[]>([
    { id: 'PKT-902', timestamp: '17:14:02', sourceIp: '192.168.1.104', destinationPort: 443, protocol: 'HTTPS', anomalyScore: 12, status: 'NORMAL' },
    { id: 'PKT-903', timestamp: '17:14:05', sourceIp: '45.142.120.8', destinationPort: 22, protocol: 'TCP', anomalyScore: 89, status: 'AMENAZA_BLOQUEADA', threatType: 'SSH_BRUTE_FORCE' },
    { id: 'PKT-904', timestamp: '17:14:07', sourceIp: '10.0.0.15', destinationPort: 80, protocol: 'TCP', anomalyScore: 24, status: 'NORMAL' },
    { id: 'PKT-905', timestamp: '17:14:11', sourceIp: '185.220.101.5', destinationPort: 53, protocol: 'DNS', anomalyScore: 82, status: 'AMENAZA_BLOQUEADA', threatType: 'DNS_TUNNEL_EXFIL' },
    { id: 'PKT-906', timestamp: '17:14:14', sourceIp: '172.16.0.44', destinationPort: 443, protocol: 'HTTPS', anomalyScore: 31, status: 'NORMAL' },
  ]);

  // Live packet simulator
  useEffect(() => {
    const threatTypes = ['SYN_FLOOD_DDOS', 'SQL_INJECTION', 'ZERO_DAY_PAYLOAD', 'PORT_SCAN_RECON'];
    const ips = ['198.51.100.22', '203.0.113.84', '185.190.141.2', '10.0.4.99'];
    const protocols: ('TCP' | 'UDP' | 'HTTPS' | 'DNS')[] = ['TCP', 'UDP', 'HTTPS', 'DNS'];

    const interval = setInterval(() => {
      const isThreat = Math.random() > 0.6;
      const score = isThreat ? Math.floor(76 + Math.random() * 23) : Math.floor(5 + Math.random() * 55);
      const isBlocked = score >= sensitivityThreshold;

      const newPkt: ThreatPacket = {
        id: `PKT-${Math.floor(1000 + Math.random() * 9000)}`,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        sourceIp: ips[Math.floor(Math.random() * ips.length)],
        destinationPort: [80, 443, 22, 53, 8080][Math.floor(Math.random() * 5)],
        protocol: protocols[Math.floor(Math.random() * protocols.length)],
        anomalyScore: score,
        status: isBlocked ? 'AMENAZA_BLOQUEADA' : score > 50 ? 'SOSPECHOSO' : 'NORMAL',
        threatType: isBlocked ? threatTypes[Math.floor(Math.random() * threatTypes.length)] : undefined,
      };

      setPackets(prev => [newPkt, ...prev.slice(0, 5)]);
    }, 2800);

    return () => clearInterval(interval);
  }, [sensitivityThreshold]);

  return (
    <section id="ciberseguridad" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            MÓDULO 08 // CIBERDEFENSA COGNITIVA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            IA & <span className="text-red-400 glow-cyan">CIBERSEGURIDAD DEFENSIVA</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            Modelos de Deep Learning y Redes de Grafos para neutralizar vectores de ataque Zero-Day en microsegundos.
          </p>
        </div>

        {/* 6 Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {[
            { title: 'Detección de Anomalías', desc: 'Autoencoders que aprenden el comportamiento basal normal y aíslan desviaciones sutiles sin firmas previas.' },
            { title: 'Detección de Malware Polimórfico', desc: 'Análisis de opcodes ensamblador y árboles de llamadas API mediante redes neuronales convolucionales.' },
            { title: 'Análisis de Tráfico Masivo', desc: 'Inspección profunda de cabeceras de paquetes a 100 Gbps para frustrar ataques DDoS volumétricos.' },
            { title: 'Detección de Intrusiones (NIDS)', desc: 'Clasificadores multiclase que detectan reconocimiento de puertos, escalada de privilegios y movimientos laterales.' },
            { title: 'Identificación de Patrones Sospechosos', desc: 'Correlación de eventos multi-fuente en tiempo real (SIEM aumentado por LLMs y grafos de conocimiento).' },
            { title: 'Análisis Comportamental (UEBA)', desc: 'Monitoreo de horas de acceso, volúmenes de descarga y credenciales comprometidas de empleados.' },
          ].map((cap, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-red-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-red-400 font-bold px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30">
                    VECT. 0{i + 1}
                  </span>
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>
                <h4 className="text-base font-bold text-white font-mono mb-2">{cap.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Pipeline: TRÁFICO DE RED → ANÁLISIS IA → DETECCIÓN → ALERTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-red-500/30 backdrop-blur-md">
          <div className="mb-6">
            <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider mb-2">
              FLUJO DE CONTENCIÓN AUTÓNOMO EN TIEMPO REAL
            </div>
            
            {/* Visual 4-Stage Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center gap-2">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>1. TRÁFICO DE RED</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-purple-500/30 text-purple-300 font-bold flex items-center justify-center gap-2">
                <Activity className="w-4 h-4" />
                <span>2. ANÁLISIS IA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 font-bold flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                <span>3. DETECCIÓN</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-red-500/30 text-red-400 font-bold flex items-center justify-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>4. ALERTA / CORTE</span>
              </div>
            </div>
          </div>

          {/* Interactive Controls & Live Packet Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Controls (4 cols) */}
            <div className="lg:col-span-4 space-y-4 font-mono text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1.5">
                  <span>Umbral de Bloqueo (Score Anomalía):</span>
                  <span className="text-red-400 font-bold">&gt; {sensitivityThreshold} pts</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="95"
                  step="5"
                  value={sensitivityThreshold}
                  onChange={(e) => setSensitivityThreshold(Number(e.target.value))}
                  className="w-full accent-red-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Auto-Aislamiento SOAR:</div>
                  <div className="text-[10px] text-slate-400">Reglas iptables en milisegundos</div>
                </div>
                <button
                  onClick={() => setIsFirewallActive(!isFirewallActive)}
                  className={`px-3 py-1 rounded font-bold cursor-pointer transition-all ${
                    isFirewallActive ? 'bg-emerald-500 text-black' : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {isFirewallActive ? 'ACTIVO' : 'BYPASS'}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-red-500/30">
                <div className="text-[10px] text-slate-400 uppercase">ESTADO DE DEFENSA GLOBAL</div>
                <div className="text-emerald-400 font-bold text-sm mt-0.5 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 0 INFECCIONES ACTIVAS
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  12,840 paquetes inspeccionados por segundo
                </div>
              </div>
            </div>

            {/* Live Packet Table (8 cols) */}
            <div className="lg:col-span-8 bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-x-auto">
              <div className="text-[10px] text-slate-500 uppercase pb-2 border-b border-slate-800 flex justify-between">
                <span>INSPECCIÓN EN VIVO DE PAQUETES (STREAMING TELEMETRY)</span>
                <span className="text-emerald-400">STATUS: CAPTURING</span>
              </div>
              <div className="divide-y divide-slate-800/80 min-w-[500px]">
                {packets.map((pkt) => (
                  <div key={pkt.id} className="py-2 flex items-center justify-between gap-3 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">{pkt.timestamp}</span>
                      <span className="text-cyan-400 font-semibold">{pkt.id}</span>
                      <span className="text-slate-300">{pkt.sourceIp}:{pkt.destinationPort}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400">{pkt.protocol}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Score: {pkt.anomalyScore}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          pkt.status === 'AMENAZA_BLOQUEADA'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                            : pkt.status === 'SOSPECHOSO'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        {pkt.status === 'AMENAZA_BLOQUEADA' ? `BLOQUEADO: ${pkt.threatType}` : pkt.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
