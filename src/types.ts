export interface AICard {
  id: string;
  iconName: string;
  title: string;
  category: string;
  description: string;
  example: string;
  details: string[];
}

export interface MetricCounter {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  impact: string;
}

export interface SectorApplication {
  id: string;
  sector: string;
  icon: string;
  title: string;
  description: string;
  practicalExample: string;
  tags: string[];
}

export interface TechTool {
  name: string;
  category: 'Lenguaje' | 'Framework' | 'Librería' | 'Entorno' | 'Infraestructura';
  description: string;
  useCase: string;
  badgeColor: string;
}

export interface ThreatPacket {
  id: string;
  timestamp: string;
  sourceIp: string;
  destinationPort: number;
  protocol: 'TCP' | 'UDP' | 'HTTPS' | 'DNS';
  anomalyScore: number;
  status: 'NORMAL' | 'SOSPECHOSO' | 'AMENAZA_BLOQUEADA';
  threatType?: string;
}
