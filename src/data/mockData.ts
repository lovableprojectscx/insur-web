import type { ProgramCategory, Course, Testimonial, Instructor, Alliance } from '../types';

export const INSTITUTIONAL_ALLIANCES: Alliance[] = [
  {
    id: 'cip',
    name: 'Colegio de Ingenieros del Perú (CIP)',
    type: 'Respaldo Profesional',
    badge: 'Acreditación Oficial CIP',
    logo: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'unsm',
    name: 'Universidad Nacional San Cristóbal de Huamanga',
    type: 'Convenio Académico',
    badge: 'Validez Universitaria 100%',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'osce',
    name: 'OSCE - Registro Nacional de Proveedores (RNP)',
    type: 'Validez para Licitaciones',
    badge: 'Apto Contrataciones del Estado',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'caap',
    name: 'Ilustre Colegio de Abogados del Perú',
    type: 'Respaldo Jurídico y Legal',
    badge: 'Acreditación Legal',
    logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200&q=80'
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'inst1',
    name: 'Ing. Roberto Carlos Vega',
    cipNumber: 'CIP N° 182490',
    role: 'Especialista Senior en Residencia & BIM',
    specialty: 'Residencia de Obras Civiles y Modelado BIM',
    experience: '+14 años en Infraestructura Vial y Edificaciones',
    degree: 'Magíster en Gerencia de la Construcción',
    avatar: '/assets/instructor_roberto.jpg'
  },
  {
    id: 'inst2',
    name: 'Dra. Ing. Vanessa Alarcón S.',
    cipNumber: 'CIP N° 194820',
    role: 'Doctora en Ingeniería Hidráulica & Estructuras',
    specialty: 'Cálculo Sismorresistente SAP2000 & ETABS',
    experience: '+12 años en Consultoría y Proyectos Hidráulicos',
    degree: 'Ph.D. en Ingeniería Estructural',
    avatar: '/assets/instructor_vanessa.jpg'
  },
  {
    id: 'inst3',
    name: 'Ing. Marco Antonio Ramos',
    cipNumber: 'CIP N° 162901',
    role: 'Consultor Senior en Carreteras & Civil 3D',
    specialty: 'Diseño Geométrico MTC y Movimiento de Tierras',
    experience: '+16 años en Megaproyectos Viales Nacionales',
    degree: 'Especialista en Ingeniería de Transportes',
    avatar: '/assets/instructor_marco.jpg'
  },
  {
    id: 'inst4',
    name: 'Mg. Abog. Gabriel Flores T.',
    cipNumber: 'CAL N° 45892 / CIP',
    role: 'Especialista en Licitaciones OSCE & Derecho de la Construcción',
    specialty: 'Arbitraje de Obras, Valorizaciones y Liquidaciones',
    experience: '+12 años en Gestión Pública y Asesoría Legal',
    degree: 'Magíster en Derecho de la Construcción y Arbitraje',
    avatar: '/assets/instructor_gabriel.jpg'
  }
];

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: 'capacitacion',
    title: 'Capacitación y Diplomados',
    subtitle: 'Especialización Ejecutiva y Alta Dirección',
    description: 'Programas intensivos 100% virtuales diseñados para profesionales y ejecutivos que buscan dominar normativas, gestión de obras y herramientas tecnológicas de vanguardia.',
    badge: 'MÁS SOLICITADO',
    image: '/assets/category_diplomados.jpg',
    coursesCount: 18,
    iconName: 'Building2',
    colorAccent: 'from-blue-600 to-indigo-700',
    featuredPrograms: [
      'Diplomado en Gestión y Residencia de Obras',
      'Gerencia de Proyectos bajo el Enfoque PMBOK',
      'Diplomado BIM Management & Modelado 3D',
      'Seguridad y Salud Ocupacional en Minería y Construcción (SST)'
    ]
  },
  {
    id: 'tecnica',
    title: 'Carreras Técnicas',
    subtitle: 'Formación Práctica de Rápida Inserción',
    description: 'Carreras cortas virtuales con enfoque 80% práctico orientado a la aplicación real en proyectos de ingeniería y topografía.',
    badge: '100% VIRTUAL PRÁCTICO',
    image: '/assets/category_tecnicos.jpg',
    coursesCount: 12,
    iconName: 'Wrench',
    colorAccent: 'from-[#00A3E0] to-[#00529B]',
    featuredPrograms: [
      'Técnico en Topografía y Geodesia Satelital',
      'Control de Calidad en Suelos, Concreto y Asfalto',
      'Operación y Mantenimiento de Maquinaria Pesada',
      'Técnico en Edificaciones y Lectura de Planos'
    ]
  },
  {
    id: 'ingenieria',
    title: 'Ingeniería y Construcción',
    subtitle: 'Supervisión, Consultoría y Obras Civiles',
    description: 'Programas de especialización online en cálculo estructural, hidrología, liquidación de obras e infraestructura pública y privada.',
    badge: 'VALIDEZ UNIVERSITARIA',
    image: '/assets/category_ingenieria.jpg',
    coursesCount: 24,
    iconName: 'HardHat',
    colorAccent: 'from-[#0A2540] to-[#00A3E0]',
    featuredPrograms: [
      'Supervisión e Inspección Técnica de Obras Civiles',
      'Diseño y Cálculo Estructural con SAP2000 y ETABS',
      'Ingeniería Vial y Diseño de Carreteras con Civil 3D',
      'Valorizaciones, Liquidación y Arbitraje de Contratos'
    ]
  }
];

export const FEATURED_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Diplomado en Gestión, Residencia y Supervisión de Obras Civiles',
    category: 'diplomado',
    duration: '6 Meses (240 Horas lectivas)',
    hours: 240,
    modality: 'Virtual En Vivo + Sesiones Grabadas 24/7',
    rating: 4.9,
    students: 1420,
    price: 450,
    originalPrice: 500,
    badgeTag: 'MÁS VENDIDO 2026',
    instructorName: 'Ing. Roberto Carlos Vega (CIP N° 182490)',
    startDate: 'Inicio: 15 de Septiembre 2026',
    image: '/assets/course_residencia.jpg',
    description: 'Aprende a dirigir proyectos de infraestructura pública y privada cumpliendo los estándares de la Ley de Contrataciones del Estado y BIM.',
    syllabus: [
      'Módulo 1: Planificación y Control de Obras Civiles (MS Project & Primavera P6)',
      'Módulo 2: Valorizaciones, Reajustes Polinómicos y Fórmulas MTC',
      'Módulo 3: Calidad y Seguridad SST en Obras (Ley 29783)',
      'Módulo 4: Liquidación, Cierre de Contratos y Arbitraje de Estado'
    ]
  },
  {
    id: 'c2',
    title: 'Especialista en Topografía Automatizada y Fotogrametría con Drones',
    category: 'tecnico',
    duration: '4 Meses (180 Horas lectivas)',
    hours: 180,
    modality: '100% Virtual En Vivo + Clases Grabadas',
    rating: 4.95,
    students: 980,
    price: 380,
    originalPrice: 420,
    badgeTag: 'NUEVA CONVOCATORIA',
    instructorName: 'Ing. Marco Antonio Ramos (CIP N° 162901)',
    startDate: 'Inicio: 20 de Septiembre 2026',
    image: '/assets/course_topografia.jpg',
    description: 'Domina Estación Total, receptores GNSS RTK y procesamiento fotogramétrico con Pix4D y Agisoft Metashape.',
    syllabus: [
      'Módulo 1: Levantamientos Geodésicos Satelitales y Coordenadas UTM',
      'Módulo 2: Operación de Estación Total Digital y Transferencia de Datos',
      'Módulo 3: Planificación de Vuelos Fotogramétricos con RTK/PPK',
      'Módulo 4: Generación de Modelos 3D, Ortomosaicos y Nubes de Puntos'
    ]
  },
  {
    id: 'c3',
    title: 'Diseño Estructural Avanzado de Edificaciones y Puentes con SAP2000 y ETABS',
    category: 'ingenieria',
    duration: '5 Meses (200 Horas lectivas)',
    hours: 200,
    modality: '100% Virtual En Vivo + Campus 24/7',
    rating: 4.88,
    students: 1150,
    price: 490,
    originalPrice: 540,
    badgeTag: 'ACREDITADO CIP',
    instructorName: 'Dra. Ing. Vanessa Alarcón (CIP N° 194820)',
    startDate: 'Inicio: 18 de Septiembre 2026',
    image: '/assets/course_estructuras.jpg',
    description: 'Análisis sismorresistente, modelado estructural en ETABS, SAP2000 y aplicación rigurosa de las normas E.030 y E.060.',
    syllabus: [
      'Módulo 1: Criterios de Estructuración Sismorresistente Norma E.030',
      'Módulo 2: Modelado Dinámico Espectral en ETABS 2026',
      'Módulo 3: Diseño de Elementos de Concreto Armado y Acero Structural',
      'Módulo 4: Puentes AASHTO LRFD y Cimentaciones Profundas'
    ]
  },
  {
    id: 'c4',
    title: 'Modelado BIM con Revit (Architecture, Structure & MEP) + Navisworks',
    category: 'diplomado',
    duration: '3 Meses (120 Horas lectivas)',
    hours: 120,
    modality: 'Virtual En Vivo',
    rating: 4.92,
    students: 1680,
    price: 360,
    originalPrice: 400,
    badgeTag: 'BIM 4D & 5D',
    instructorName: 'Ing. Roberto Carlos Vega (CIP N° 182490)',
    startDate: 'Inicio: 22 de Septiembre 2026',
    image: '/assets/course_bim.jpg',
    description: 'Desarrolla proyectos integrales en entorno BIM coordinado, detección de interferencias en Navisworks y cómputos métricos automáticos.',
    syllabus: [
      'Módulo 1: Revit Arquitectura e Interfaz de Proyecto Paramétrico',
      'Módulo 2: Revit Estructuras y Armado de Acero de Refuerzo',
      'Módulo 3: Instalaciones MEP (Sanitarias, Eléctricas y Climatización)',
      'Módulo 4: Navisworks Manage, Detección de Interferencias y Metrados 5D'
    ]
  },
  {
    id: 'c5',
    title: 'Técnico en Control de Calidad: Suelos, Concreto y Asfalto',
    category: 'tecnico',
    duration: '4 Meses (160 Horas lectivas)',
    hours: 160,
    modality: '100% Virtual En Vivo + Campus 24/7',
    rating: 4.96,
    students: 850,
    price: 390,
    originalPrice: 430,
    badgeTag: 'ENSAYOS ASTM & MTC',
    instructorName: 'Mg. Ing. Gabriel Flores T. (CIP N° 210452)',
    startDate: 'Inicio: 25 de Septiembre 2026',
    image: '/assets/course_calidad.jpg',
    description: 'Ensayos de laboratorio bajo normas ASTM, AASHTO y MTC para obras viales y edificaciones de gran envergadura.',
    syllabus: [
      'Módulo 1: Granulometría, Clasificación SUCS y Límites de Atterberg',
      'Módulo 2: Ensayos Proctor Modificado, Densidad de Campo y CBR',
      'Módulo 3: Resistencia a la Compresión de Probetas de Concreto',
      'Módulo 4: Diseño de Mezclas Asfálticas y Ensayos Marshall'
    ]
  },
  {
    id: 'c6',
    title: 'Ingeniería Vial y Modelado de Carreteras con AutoCAD Civil 3D',
    category: 'ingenieria',
    duration: '4 Meses (160 Horas lectivas)',
    hours: 160,
    modality: 'Virtual En Vivo',
    rating: 4.91,
    students: 1340,
    price: 420,
    originalPrice: 460,
    badgeTag: 'MANUAL DG-2018 MTC',
    instructorName: 'Ing. Marco Antonio Ramos (CIP N° 162901)',
    startDate: 'Inicio: 28 de Septiembre 2026',
    image: '/assets/course_carreteras.jpg',
    description: 'Diseño geométrico de carreteras según manual DG-2018 del MTC, movimiento de tierras y obras de arte viales.',
    syllabus: [
      'Módulo 1: Puntos, Superficies y Alineamiento Horizontal Normado',
      'Módulo 2: Perfil Longitudinal, Peraltes y Ensamblajes de Sección',
      'Módulo 3: Obras de Arte, Alcantarillas y Cunetas Viales',
      'Módulo 4: Cálculo de Cúmulo de Canteras, Diagrama de Masas y Metrados'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ing. Carlos Mendoza R.',
    role: 'Residente de Obras',
    company: 'Consorcio Vial del Perú',
    program: 'Diplomado en Gestión y Residencia de Obras Civiles',
    comment: 'Gracias a las clases virtuales en vivo de Grupo INSUR logré capacitarme sin interrumpir mis labores en obra. La calidad docente y la plataforma 24/7 me dieron las herramientas para asumir la residencia con éxito.',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Tech. Lucía Huamán S.',
    role: 'Especialista en Topografía',
    company: 'Constructora & Minera del Sur',
    program: 'Carrera Técnica en Topografía y Drones',
    comment: 'El modelo de aprendizaje virtual con proyectos aplicados me permitió dominar la Estación Total y los programas fotogramétricos desde casa. Al culminar, recibí mi certificado oficial verificado con código QR.',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Ing. Miguel Ángel Paredes',
    role: 'Consultor de Proyectos BIM',
    company: 'Independent Engineering SAC',
    program: 'Diplomado BIM Management & Modelado 3D',
    comment: 'La modalidad 100% virtual con horarios flexibles y el campus 24/7 me facilitaron estudiar desde cualquier provincia. El certificado con respaldo universitario impulsó mi consultoría privada.',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    question: '¿Los certificados emitidos por Grupo INSUR tienen validez oficial?',
    answer: 'Sí. Todos nuestros diplomados y programas virtuales cuentan con certificación oficial emitida en convenio con prestigiosas universidades del Perú y otorgan créditos académicos válidos para licitaciones, convocatorias del Estado y concursos públicos.'
  },
  {
    question: '¿Cómo funciona la modalidad 100% virtual y el acceso a clases?',
    answer: 'Las clases se dictan en vivo vía Zoom HD interactivo con docentes especialistas del sector y quedan grabadas de inmediato en el Campus Virtual INSUR 24/7 con acceso permanente a materiales, plantillas en Excel/CAD/Revit y foros de consulta.'
  },
  {
    question: '¿Cómo accedo al descuento exclusivo de esta convocatoria?',
    answer: 'Al registrar tus datos en el formulario oficial de esta página, obtendrás automáticamente tu cupón institucional con un 10% de descuento en la matrícula de tu primer programa académico.'
  },
  {
    question: '¿Puedo estudiar desde cualquier departamento del Perú?',
    answer: 'Sí. Todos nuestros programas están diseñados para estudiantes de todo el país en Modalidad 100% Virtual En Vivo, con envío de certificado oficial físico a tu provincia o emisión digital con firma digital veriable con código QR (nuestra sede central administrativa se ubica en Ayacucho).'
  },
  {
    question: '¿Cuentan con facilidades de pago o fraccionamiento?',
    answer: 'Ofrecemos planes de pago en cuotas fijas sin intereses durante la duración de tu programa, además de facilidades mediante transferencia bancaria, Yape, Plin y tarjetas de crédito/débito.'
  }
];
