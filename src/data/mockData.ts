import type { ProgramCategory, Course, Testimonial } from '../types';

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: 'capacitacion',
    title: 'Capacitación y Diplomados',
    subtitle: 'Especialización Ejecutiva y Alta Dirección',
    description: 'Programas intensivos 100% virtuales diseñados para profesionales y ejecutivos que buscan dominar normativas, gestión de obras y herramientas tecnológicas de vanguardia.',
    badge: 'Alta Demanda Laboral',
    image: '/assets/category_diplomados.jpg',
    coursesCount: 18,
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
    badge: '100% Virtual Práctico',
    image: '/assets/category_tecnicos.jpg',
    coursesCount: 12,
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
    badge: 'Respaldo Universitario',
    image: '/assets/category_ingenieria.jpg',
    coursesCount: 24,
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
    modality: 'Virtual En Vivo + Sesiones Grabadas 24/7',
    rating: 4.9,
    students: 1420,
    description: 'Aprende a dirigir proyectos de infraestructura pública y privada cumpliendo los estándares de la Ley de Contrataciones del Estado y BIM.',
    syllabus: [
      'Módulo 1: Planificación y Control de Obras Civiles',
      'Módulo 2: Valorizaciones y Reajustes Polinómicos',
      'Módulo 3: Calidad y Seguridad SST en Obras',
      'Módulo 4: Liquidación y Cierre de Contratos'
    ]
  },
  {
    id: 'c2',
    title: 'Especialista en Topografía Automatizada y Fotogrametría con Drones',
    category: 'tecnico',
    duration: '4 Meses (180 Horas lectivas)',
    modality: '100% Virtual En Vivo + Clases Grabadas',
    rating: 4.95,
    students: 980,
    description: 'Domina Estación Total, receptores GNSS RTK y procesamiento fotogramétrico con Pix4D y Agisoft Metashape.',
    syllabus: [
      'Módulo 1: Levantamientos Geodésicos Satelitales',
      'Módulo 2: Operación de Estación Total Digital',
      'Módulo 3: Planificación de Vuelos Fotogramétricos',
      'Módulo 4: Generación de Modelos 3D y Nubes de Puntos'
    ]
  },
  {
    id: 'c3',
    title: 'Diseño Estructural Avanzado de Edificaciones y Puentes',
    category: 'ingenieria',
    duration: '5 Meses (200 Horas lectivas)',
    modality: '100% Virtual En Vivo + Campus 24/7',
    rating: 4.88,
    students: 1150,
    description: 'Análisis sismorresistente, modelado estructural en ETABS, SAP2000 y aplicación de la E.030 / E.060.',
    syllabus: [
      'Módulo 1: Criterios de Estructuración Sismorresistente',
      'Módulo 2: Modelado Dinámico en ETABS',
      'Módulo 3: Diseño de Elementos de Concreto Armado',
      'Módulo 4: Puentes y Cimentaciones Profundas'
    ]
  },
  {
    id: 'c4',
    title: 'Modelado BIM con Revit (Architecture, Structure & MEP)',
    category: 'diplomado',
    duration: '3 Meses (120 Horas lectivas)',
    modality: 'Virtual En Vivo',
    rating: 4.92,
    students: 1680,
    description: 'Desarrolla proyectos integrales en entorno BIM coordinado, detección de interferencias en Navisworks y cómputos métricos.',
    syllabus: [
      'Módulo 1: Revit Arquitectura e Interfaz de Proyecto',
      'Módulo 2: Revit Estructuras y Armado de Acero',
      'Módulo 3: Instalaciones MEP (Sanitarias y Eléctricas)',
      'Módulo 4: Navisworks Manage y Detección de Interferencias'
    ]
  },
  {
    id: 'c5',
    title: 'Técnico en Control de Calidad: Suelos, Concreto y Asfalto',
    category: 'tecnico',
    duration: '4 Meses (160 Horas lectivas)',
    modality: '100% Virtual En Vivo + Campus 24/7',
    rating: 4.96,
    students: 850,
    description: 'Ensayos de laboratorio bajo normas ASTM y MTC para obras viales y edificaciones de gran envergadura.',
    syllabus: [
      'Módulo 1: Granulometría y Límites de Atterberg',
      'Módulo 2: Ensayos Proctor Modificado y CBR',
      'Módulo 3: Resistencia a la Compresión de Probetas',
      'Módulo 4: Diseño de Mezclas Asfálticas y Ensayos Marshall'
    ]
  },
  {
    id: 'c6',
    title: 'Ingeniería Vial y Modelado de Carreteras con AutoCAD Civil 3D',
    category: 'ingenieria',
    duration: '4 Meses (160 Horas lectivas)',
    modality: 'Virtual En Vivo',
    rating: 4.91,
    students: 1340,
    description: 'Diseño geométrico de carreteras según manual DG-2018 del MTC, movimiento de tierras y obras de arte.',
    syllabus: [
      'Módulo 1: Puntos, Superficies y Alineamiento Horizontal',
      'Módulo 2: Perfil Longitudinal y Ensamblajes de Sección',
      'Módulo 3: Obras de Arte y Obras de Drenaje',
      'Módulo 4: Cálculo de Cúmulo de Canteras y Diagrama de Masas'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ing. Carlos Mendoza R.',
    role: 'Residente de Obras',
    company: 'Consorcio Vial',
    program: 'Diplomado en Gestión y Residencia de Obras',
    comment: 'Gracias a las clases virtuales en vivo de Grupo INSUR logré capacitarme sin interrumpir mis labores en obra. La calidad docente y la plataforma 24/7 me dieron las herramientas para asumir la residencia.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Tech. Lucía Huamán S.',
    role: 'Especialista en Topografía',
    company: 'Constructora & Minera del Sur',
    program: 'Carrera Técnica en Topografía y Drones',
    comment: 'El modelo de aprendizaje virtual con proyectos aplicados me permitió dominar la Estación Total y los programas fotogramétricos desde casa. Al culminar, activé mi certificado oficial.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Ing. Miguel Ángel Paredes',
    role: 'Consultor de Proyectos BIM',
    company: 'Independent Engineering',
    program: 'Diplomado BIM Management & Modelado 3D',
    comment: 'La modalidad 100% virtual con horarios flexibles y el campus 24/7 me facilitaron estudiar desde cualquier provincia. El certificado con respaldo universitario impulsó mi consultoría.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    question: '¿Los certificados emitidos por Grupo INSUR tienen validez oficial?',
    answer: 'Sí. Todos nuestros diplomados y programas virtuales cuentan con certificación oficial emitida en convenio con prestigiosas universidades del Perú y otorgan créditos académicos válidos para licitaciones y concursos públicos.'
  },
  {
    question: '¿Cómo funciona la modalidad 100% virtual y el acceso a clases?',
    answer: 'Las clases se dictan en vivo vía Zoom HD interactivo con docentes especialistas y quedan grabadas de inmediato en el Campus Virtual INSUR 24/7 con acceso permanente a materiales, plantillas en Excel/CAD/Revit y foros de consulta.'
  },
  {
    question: '¿Cómo accedo al descuento exclusivo de esta convocatoria?',
    answer: 'Al registrar tus datos en el formulario oficial de esta página, obtendrás automáticamente tu cupón institucional con un 10% de descuento en la matrícula de tu primer programa.'
  },
  {
    question: '¿Puedo estudiar desde cualquier departamento del Perú?',
    answer: 'Sí. Todos nuestros programas están diseñados para estudiantes de todo el país en Modalidad 100% Virtual En Vivo, con envío de certificado oficial físico a tu provincia o emisión digital con firma con código QR (nuestra sede central administrativa se ubica en Ayacucho).'
  },
  {
    question: '¿Cuentan con facilidades de pago o fraccionamiento?',
    answer: 'Ofrecemos planes de pago en cuotas fijas sin intereses durante la duración de tu programa, además de facilidades mediante transferencia bancaria, Yape, Plin y tarjetas de crédito/débito.'
  }
];
