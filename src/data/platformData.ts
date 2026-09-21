import { AICard, TimelineMilestone, SectorApplication, TechTool } from '../types';

export const AI_CONCEPTS_DATA: AICard[] = [
  {
    id: 'ai-core',
    iconName: 'Cpu',
    title: '¿Qué es la Inteligencia Artificial?',
    category: 'Fundamentos',
    description: 'Capacidad de sistemas computacionales para emular funciones cognitivas humanas tales como aprendizaje, razonamiento abstracto, resolución de problemas y auto-corrección.',
    example: 'Algoritmos de optimización de rutas globales y motores de búsqueda semánticos.',
    details: ['Simulación de procesos cognitivos', 'Sistemas simbólicos vs conexionistas', 'Automatización de decisiones de alta dimensionalidad']
  },
  {
    id: 'weak-vs-gen',
    iconName: 'Layers',
    title: 'IA Estrecha vs IA Generativa',
    category: 'Arquitectura',
    description: 'La IA Débil/Estrecha (ANI) domina una tarea delimitada (clasificación, filtrado de spam), mientras que la IA Generativa sintetiza nuevo contenido probabilístico (código, audio, imágenes, texto).',
    example: 'Clasificador de radiografías (ANI) vs Claude/GPT generando análisis clínico multimodal.',
    details: ['Espacio latente probabilístico', 'Modelos autorregresivos', 'Fronteras de generalización sintética']
  },
  {
    id: 'machine-learning',
    iconName: 'Activity',
    title: 'Aprendizaje Automático (ML)',
    category: 'Paradigmas',
    description: 'Subcampo que confiere a las máquinas la facultad de aprender patrones intrínsecos a partir de distribuciones empíricas sin programación determinista explícita.',
    example: 'Modelos de scoring crediticio y filtros anti-fraude bancario en tiempo real.',
    details: ['Ajuste de parámetros por gradiente', 'Validación cruzada y sesgo-varianza', 'Extracción de características (Feature Engineering)']
  },
  {
    id: 'neural-nets',
    iconName: 'Network',
    title: 'Redes Neuronales Artificiales',
    category: 'Deep Learning',
    description: 'Grafos ponderados inspirados en la arquitectura cortical. Capas de neuronas artificiales transforman tensores mediante multiplicaciones matriciales y activaciones no lineales.',
    example: 'Perceptrón multicapa y Transformers procesando millones de secuencias en paralelo.',
    details: ['Backpropagation (propagación hacia atrás)', 'Descenso de gradiente estocástico (SGD)', 'Funciones de activación: ReLU, GeLU, Sigmoid']
  },
  {
    id: 'nlp',
    iconName: 'MessageSquareCode',
    title: 'Procesamiento de Lenguaje Natural',
    category: 'Percepción',
    description: 'Intersección entre lingüística y ciencia computacional para dotar a las máquinas de comprensión semántica, sintaxis, análisis de sentimientos y generación de habla.',
    example: 'Modelos de traducción automática instantánea y agentes conversacionales autónomos.',
    details: ['Tokenización BPE / WordPiece', 'Mecanismo de auto-atención (Self-Attention)', 'Embeddings vectoriales de alta dimensión']
  },
  {
    id: 'computer-vision',
    iconName: 'Eye',
    title: 'Visión por Computadora (CV)',
    category: 'Percepción',
    description: 'Procesamiento de señales fotónicas y video. Descompone matrices de píxeles para reconocer bordes, segmentar instancias espaciales y clasificar objetos tridimensionales.',
    example: 'Sistemas ADAS de conducción autónoma y diagnóstico dermatológico por imágenes.',
    details: ['Redes Convolucionales (CNNs)', 'Segmentación semántica (YOLO, Mask R-CNN)', 'Extracción de mapas de características']
  },
  {
    id: 'generative-ai',
    iconName: 'Sparkles',
    title: 'IA Generativa & Modelos de Difusión',
    category: 'Creación',
    description: 'Modelos probabilísticos que aprenden a remover ruido gaussiano en espacios latentes o predecir el próximo token probabilístico para generar nuevos artefactos digitales.',
    example: 'Stable Diffusion, Midjourney, sintetizadores de voz neural y asistentes de código.',
    details: ['Procesos de difusión latente', 'Transformers decodificadores (Autoregressive)', 'Condicionamiento por texto (Cross-Attention)']
  },
  {
    id: 'intelligent-agents',
    iconName: 'Bot',
    title: 'Agentes Inteligentes Autónomos',
    category: 'Autonomía',
    description: 'Entidades computacionales dotadas de sensores, memoria a largo plazo (RAG), bucle de razonamiento (ReAct) y actuadores para ejecutar planes complejos con herramientas externas.',
    example: 'Agentes de programación autónomos que ejecutan pruebas, corrigen errores y despliegan código.',
    details: ['Bucle Percepción-Planificación-Acción', 'Uso de herramientas y llamada a funciones', 'Memoria vectorial y persistencia']
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '1950',
    title: 'Test de Turing & Máquinas Pensantes',
    description: 'Alan Turing formula la pregunta fundamental "¿Pueden pensar las máquinas?" y propone el test de imitación conductual.',
    impact: 'Base conceptual de la ciencia computacional moderna.'
  },
  {
    year: '1956',
    title: 'Conferencia de Dartmouth',
    description: 'John McCarthy, Marvin Minsky y Claude Shannon acuñan oficialmente el término "Inteligencia Artificial".',
    impact: 'Nacimiento disciplinar formal de la IA.'
  },
  {
    year: '1986',
    title: 'Renacimiento del Backpropagation',
    description: 'Rumelhart, Hinton y Williams popularizan la retropropagación para entrenar perceptrones multicapa con optimización de gradiente.',
    impact: 'Superación del primer "invierno de la IA".'
  },
  {
    year: '2012',
    title: 'AlexNet & La Revolución Deep Learning',
    description: 'Alex Krizhevsky gana ImageNet con una CNN acelerada en GPUs de consumo masivo, reduciendo el error a la mitad.',
    impact: 'Explosión de redes neuronales profundas en la industria.'
  },
  {
    year: '2017',
    title: 'Arquitectura Transformer ("Attention Is All You Need")',
    description: 'Google Brain y Google Research introducen el mecanismo de auto-atención paralelizable, reemplazando a las RNNs y LSTMs.',
    impact: 'Pilar estructural de LLMs, GPT, Gemini y la IA generativa moderna.'
  },
  {
    year: '2022-2026',
    title: 'Modelos de Fundación Multimodales & Agentes Autónomos',
    description: 'Convergencia de visión, audio, razonamiento formal y ejecución autónoma con modelos multimodales nativos y arquitecturas agenticas.',
    impact: 'Integración ubicua de la IA en la infraestructura global.'
  }
];

export const SECTOR_APPLICATIONS: SectorApplication[] = [
  {
    id: 'medicina',
    sector: 'Medicina y Salud',
    icon: 'HeartPulse',
    title: 'Diagnóstico Temprano y Descubrimiento Farmacéutico',
    description: 'Modelos de aprendizaje profundo analizan resonancias magnéticas, tomografías y secuencias genómicas para predecir patologías antes de la manifestación de síntomas clínicos.',
    practicalExample: 'AlphaFold predice la estructura 3D de más de 200 millones de proteínas, acelerando el desarrollo de antibióticos y terapias oncológicas.',
    tags: ['Bioinformática', 'Oncología', 'Radiología Asistida']
  },
  {
    id: 'educacion',
    sector: 'Educación',
    icon: 'GraduationCap',
    title: 'Sistemas de Tutoría Adaptativa',
    description: 'Evaluación del ritmo cognitivo de cada estudiante para generar rutas de aprendizaje personalizadas, retroalimentación socrática y nivelación pedagógica.',
    practicalExample: 'Plataformas que detectan lagunas conceptuales en cálculo y recomiendan ejercicios interactivos ajustados al perfil mental del alumno.',
    tags: ['Personalización', 'Evaluación Continua', 'Tutoría Socrática']
  },
  {
    id: 'finanzas',
    sector: 'Finanzas y Banca',
    icon: 'Coins',
    title: 'Detección de Fraude y Trading Algorítmico',
    description: 'Análisis de series temporales a nivel de microsegundos para identificar anomalías en transacciones interbancarias y optimizar portafolios de inversión bajo riesgo controlado.',
    practicalExample: 'Sistemas que auditan millones de transacciones de tarjetas por segundo, bloqueando pagos anómalos con precisión del 99.8%.',
    tags: ['Detección de Anomalías', 'Scoring Crediticio', 'Modelos Estocásticos']
  },
  {
    id: 'industria',
    sector: 'Industria 4.0',
    icon: 'Factory',
    title: 'Mantenimiento Predictivo y Gemelos Digitales',
    description: 'Lectura de telemetría IoT (vibración, temperatura, acústica) para anticipar fallas en turbinas y brazos robóticos antes de averías catastróficas.',
    practicalExample: 'Líneas de ensamble automotriz que reducen tiempo de inactividad no planificado en un 40% mediante gemelos digitales.',
    tags: ['Telemetría IoT', 'Mantenimiento Predictivo', 'Visión Industrial']
  },
  {
    id: 'agricultura',
    sector: 'Agricultura de Precisión',
    icon: 'Sprout',
    title: 'Riego Automatizado y Monitoreo Satelital',
    description: 'Drones con sensores multiespectrales alimentan modelos de visión para dosificar fertilizantes, detectar plagas y calcular el rendimiento óptimo de cosecha.',
    practicalExample: 'Drones agrícolas autónomos que rocían herbicida únicamente sobre malezas detectadas, reduciendo el uso químico en 85%.',
    tags: ['Imágenes Satelitales', 'Sostenibilidad', 'Monitoreo de Suelos']
  },
  {
    id: 'transporte',
    sector: 'Transporte y Movilidad',
    icon: 'Car',
    title: 'Conducción Autónoma y Redes Logísticas',
    description: 'Fusión de sensores (LiDAR, cámaras, radar) y modelos de planificación espacial para vehículos no tripulados y ruteo dinámico de flotas.',
    practicalExample: 'Vehículos comerciales que navegan intersecciones urbanas complejas interpretando semáforos, peatones y cambios meteorológicos.',
    tags: ['LiDAR / Radar', 'Sensor Fusion', 'Ruteo Dinámico']
  },
  {
    id: 'ciberseguridad',
    sector: 'Ciberseguridad Defensiva',
    icon: 'ShieldCheck',
    title: 'Detección de Amenazas Zero-Day en Red',
    description: 'Inspección de paquetes a escala petabyte e identificación de patrones de exfiltración sigilosa antes del compromiso perimetral.',
    practicalExample: 'Sistemas SIEM/SOAR aumentados por IA que correlacionan millones de registros para neutralizar ataques DDoS en menos de 200ms.',
    tags: ['Zero-Day Defense', 'Análisis Comportamental', 'Aislamiento Automático']
  },
  {
    id: 'robotica',
    sector: 'Robótica Inteligente',
    icon: 'Cpu',
    title: 'Robots Manipuladores y Humanoides Adaptativos',
    description: 'Políticas de control motor entrenadas por Reinforcement Learning en simulación (Sim-to-Real) para agarre de objetos de geometría variable.',
    practicalExample: 'Brazos robóticos en almacenes logísticos que identifican y embalan 1,200 paquetes heterogéneos por hora sin calibración previa.',
    tags: ['Sim-to-Real', 'Control Motor', 'Visión Háptica']
  },
  {
    id: 'marketing',
    sector: 'Marketing y Comercio',
    icon: 'Target',
    title: 'Hiperpersonalización y Motores de Recomendación',
    description: 'Filtrado colaborativo y redes neuronales de grafos que modelan la intención de compra para optimizar conversiones y retención de usuarios.',
    practicalExample: 'Motores de streaming multimedia que personalizan miniaturas y catálogos en función del comportamiento histórico de visualización.',
    tags: ['Filtrado Colaborativo', 'Modelado de Afinidad', 'LTV Predictivo']
  },
  {
    id: 'investigacion',
    sector: 'Investigación Científica',
    icon: 'Microscope',
    title: 'Simulación Física y Descubrimiento de Materiales',
    description: 'Sustitución de simulaciones moleculares de mecánica cuántica tradicionales mediante redes neuronales que aproximan soluciones a la ecuación de Schrödinger.',
    practicalExample: 'Identificación de nuevas composiciones cristalinas para electrolitos de baterías de estado sólido en cuestión de días en lugar de décadas.',
    tags: ['Mecánica Cuántica', 'Baterías Avanzadas', 'Simulación Molecular']
  }
];

export const TECH_STACK_DATA: TechTool[] = [
  { name: 'Python', category: 'Lenguaje', description: 'Lingua franca de la IA moderna y Data Science gracias a su ecosistema masivo de librerías científicas y soporte de tensores.', useCase: 'Desarrollo de pipelines de ML, scripting de investigación y prototipado rápido.', badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
  { name: 'PyTorch', category: 'Framework', description: 'Framework insignia desarrollado por Meta AI con grafo computacional dinámico, preferido para investigación de frontera.', useCase: 'Entrenamiento de redes neuronales profundas, LLMs y modelos generativos.', badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40' },
  { name: 'TensorFlow', category: 'Framework', description: 'Plataforma integral de Google con optimización para producción industrial, TPU clusters y edge devices (TF Lite).', useCase: 'Despliegues a escala masiva, serving distribuido y pipelines de producción.', badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
  { name: 'Scikit-Learn', category: 'Librería', description: 'Biblioteca de referencia para aprendizaje supervisado y no supervisado clásico sobre algoritmos eficientes en C/Cython.', useCase: 'Random Forest, SVM, Regresión Logística, PCA y métricas de validación.', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { name: 'Pandas', category: 'Librería', description: 'Estructuras de datos DataFrame de alto rendimiento para ingestión, limpieza, transformación y agregación de datos tabulares.', useCase: 'Preprocesamiento de datos masivos, manejo de nulos y manipulación de series temporales.', badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  { name: 'NumPy', category: 'Librería', description: 'Computación numérica vectorial con arrays N-dimensionales optimizados sobre rutinas BLAS/LAPACK.', useCase: 'Operaciones de álgebra lineal matricial, transformadas de Fourier y generación de ruido.', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { name: 'Jupyter', category: 'Entorno', description: 'Entorno de desarrollo computacional interactivo tipo cuaderno para experimentación, visualización y reproducibilidad.', useCase: 'Exploración científica de datos, narrativa técnica con Markdown y gráficos interactivos.', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { name: 'SQL & Data Lakes', category: 'Infraestructura', description: 'Lenguaje declarativo para consultas analíticas sobre almacenes estructurados y almacenes masivos (BigQuery, Snowflake).', useCase: 'Extracción ETL, agregaciones analíticas y preparación de lotes de entrenamiento.', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  { name: 'Docker & K8s', category: 'Infraestructura', description: 'Contenedorización estándar y orquestación de clústeres para reproducibilidad estricta de entornos de inferencia.', useCase: 'Contenedores de inferencia escalable en GPU y orquestación con Kubernetes.', badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
  { name: 'APIs & Serving', category: 'Infraestructura', description: 'Protocolos de serving de baja latencia como FastAPI, vLLM, Triton Inference Server y gRPC.', useCase: 'Exposición de microservicios de predicción con streaming de tokens en tiempo real.', badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
  { name: 'Cloud AI Platform', category: 'Infraestructura', description: 'Infraestructura elástica de cómputo en la nube (GCP Vertex AI, AWS SageMaker, Azure ML) con clústeres de GPUs H100 y TPUs.', useCase: 'Entrenamiento distribuido a gran escala y gestión de ciclo de vida MLOps.', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' }
];
