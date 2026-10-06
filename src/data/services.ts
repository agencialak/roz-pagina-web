export interface ServiceProof {
  value: string
  label: string
  /** slug de un post del blog que respalda la cifra */
  postSlug?: string
}

export interface ServicePageData {
  slug: string
  name: string
  /** h1 en dos partes: la segunda va en serif itálica */
  heading: [string, string]
  metaTitle: string
  metaDescription: string
  intro: string
  forWhom: { title: string; text: string }[]
  includes: string[]
  process: { title: string; text: string }[]
  proof: ServiceProof[]
  relatedPosts: string[]
}

export const services: ServicePageData[] = [
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    heading: ['Publicidad en Meta Ads', 'para negocios que necesitan vender'],
    metaTitle: 'Agencia de Meta Ads en Pereira y Colombia | ROZ Social Media',
    metaDescription:
      'Campañas de Facebook, Instagram y WhatsApp para clínicas, restaurantes, e-commerce y eventos. Más de $100M COP invertidos en Meta Ads con datos reales de resultados.',
    intro:
      'Diseñamos y manejamos campañas en Facebook, Instagram y WhatsApp pensadas para generar conversaciones y ventas, no solo alcance. Cada campaña arranca con investigación de mercado y se optimiza semana a semana con datos reales.',
    forWhom: [
      { title: 'Clínicas de estética y odontología', text: 'Campañas de interacción a WhatsApp para procedimientos de ticket bajo y alto, con agenda de citas como objetivo.' },
      { title: 'Restaurantes y negocios de comida', text: 'Pauta para domicilios, fechas comerciales y crecimiento de comunidad local.' },
      { title: 'E-commerce y tiendas', text: 'Campañas orientadas a ventas, con públicos de clientes actuales y similares.' },
      { title: 'Eventos y negocios B2B', text: 'Venta de entradas y captación de clientes con públicos de nicho, incluso fuera de Colombia.' },
    ],
    includes: [
      'Investigación de mercado antes de crear el primer anuncio',
      'Estrategia por objetivo: tráfico, interacción a WhatsApp o ventas',
      'Varios conjuntos de anuncios por campaña (Advantage+ y públicos definidos)',
      'Variedad de creativos para que el algoritmo encuentre el que vende',
      'Optimización continua semana a semana',
      'Reportes con costo por resultado real, no solo alcance',
      'Manual de atención por WhatsApp para cerrar las conversaciones',
    ],
    process: [
      { title: 'Investigación', text: 'Quién es tu cliente, qué le duele, qué objeciones tiene y qué dice de tu marca.' },
      { title: 'Estrategia', text: 'Objetivo, oferta, ángulos de comunicación y destino después del clic.' },
      { title: 'Lanzamiento', text: 'Campañas con varios conjuntos y creativos corriendo al mismo tiempo.' },
      { title: 'Optimización', text: 'Pausamos lo que no conecta y escalamos lo que sí, con el aprendizaje de cada semana.' },
      { title: 'Medición', text: 'Costo por resultado, conversaciones y ventas — cruzado con lo que pasa en tu negocio.' },
    ],
    proof: [
      { value: '$100M+', label: 'COP invertidos en Meta Ads' },
      { value: '7,58x', label: 'ROAS vendiendo entradas a un evento B2B en Chile', postSlug: 'vender-entradas-evento-b2b-chile-meta-ads' },
      { value: '$375', label: 'COP por conversación de WhatsApp en una promoción odontológica', postSlug: 'costo-por-conversacion-whatsapp' },
    ],
    relatedPosts: [
      'investigacion-de-mercado-antes-de-pautar',
      'conjuntos-de-anuncios-dos-vendedores',
      'dos-creativos-sin-margen-de-error',
    ],
  },
  {
    slug: 'gestion-redes-sociales',
    name: 'Gestión de redes sociales',
    heading: ['Gestión de redes sociales', 'con estrategia detrás'],
    metaTitle: 'Gestión de redes sociales en Pereira | ROZ Social Media',
    metaDescription:
      'Estrategia de contenido, diseño, publicación y crecimiento de seguidores reales en Instagram y Facebook, conectado con la pauta. Medimos costo por seguidor real, no solo visitas.',
    intro:
      'Gestionamos la presencia de tu marca en Instagram y Facebook: estrategia de contenido, calendario, diseño, publicación y crecimiento de comunidad. Todo conectado con la pauta, para que cada publicación trabaje para el mismo objetivo.',
    forWhom: [
      { title: 'Negocios locales', text: 'Restaurantes, clínicas, tiendas y servicios que necesitan verse activos y confiables en redes.' },
      { title: 'Profesionales de la salud', text: 'Médicos, odontólogos y especialistas que construyen autoridad con su marca personal.' },
      { title: 'Marcas que quieren crecer comunidad', text: 'Crecimiento de seguidores reales con campañas de tráfico a Instagram, medido por costo por seguidor.' },
    ],
    includes: [
      'Estrategia y calendario de contenido mensual',
      'Diseño de piezas gráficas y carruseles',
      'Redacción de copies',
      'Publicación y programación',
      'Campañas de tráfico a Instagram para crecer seguidores',
      'Medición de costo por seguidor real, no solo visitas al perfil',
    ],
    process: [
      { title: 'Diagnóstico', text: 'Revisamos tu perfil, tu competencia y lo que tu cliente espera ver.' },
      { title: 'Estrategia', text: 'Pilares de contenido, tono y calendario del mes.' },
      { title: 'Producción', text: 'Diseño, copies y, si hace falta, grabación con nuestro equipo.' },
      { title: 'Publicación', text: 'Programamos y publicamos según el calendario aprobado.' },
      { title: 'Crecimiento', text: 'Pauta de tráfico al perfil y seguimiento del costo por seguidor real.' },
    ],
    proof: [
      { value: '$264', label: 'COP por seguidor real en la mejor de 7 cuentas analizadas', postSlug: 'costo-por-seguidor-real' },
      { value: '~$143', label: 'COP promedio por visita a perfil de Instagram', postSlug: 'trafico-vs-interaccion-costos-distintos' },
      { value: '100+', label: 'marcas trabajadas' },
    ],
    relatedPosts: ['costo-por-seguidor-real', 'trafico-vs-interaccion-costos-distintos', 'facebook-vs-instagram-mismo-presupuesto'],
  },
  {
    slug: 'produccion-audiovisual',
    name: 'Producción audiovisual',
    heading: ['Producción audiovisual', 'para redes y pauta'],
    metaTitle: 'Producción audiovisual para redes sociales en Pereira | ROZ Social Media',
    metaDescription:
      'Grabación y edición de reels, videos para anuncios, testimonios y cubrimiento de eventos con equipo propio de producción en Pereira. Más de 120M de visualizaciones generadas.',
    intro:
      'Grabamos y editamos el contenido que tu marca necesita para redes y anuncios: reels, videos para pauta, testimonios y cubrimiento de eventos. Con equipo propio de producción — dirección, cámara y edición en la misma agencia.',
    forWhom: [
      { title: 'Clínicas y profesionales de la salud', text: 'Videos de procedimientos, testimonios de pacientes y contenido educativo.' },
      { title: 'Restaurantes y marcas de producto', text: 'Reels de producto, ambiente y experiencia para redes y anuncios.' },
      { title: 'Eventos', text: 'Cubrimiento audiovisual y piezas para promocionar la siguiente edición.' },
      { title: 'Marcas que pautan', text: 'Varias versiones de cada video para que la campaña tenga creativos de sobra.' },
    ],
    includes: [
      'Concepto y guion',
      'Grabación con equipo propio',
      'Edición y postproducción',
      'Formatos verticales para reels, historias y anuncios',
      'Varias versiones por video para pauta',
      'Testimonios de clientes',
    ],
    process: [
      { title: 'Idea', text: 'Aterrizamos lo que tienes en mente en un concepto y un guion.' },
      { title: 'Planeación', text: 'Locación, tomas, tiempos y lo que se necesita el día de grabación.' },
      { title: 'Grabación', text: 'Nuestro equipo graba con la paciencia de repetir cada toma las veces que haga falta.' },
      { title: 'Edición', text: 'Montaje, subtítulos y ritmo pensados para retener en redes.' },
      { title: 'Entrega', text: 'Versiones listas para publicar y para usar como creativos de pauta.' },
    ],
    proof: [
      { value: '120M+', label: 'visualizaciones generadas' },
      { value: '300+', label: 'proyectos realizados' },
      { value: '10', label: 'personas en el equipo, con producción propia' },
    ],
    relatedPosts: ['anuncios-herramientas-del-vendedor', 'dos-creativos-sin-margen-de-error', 'el-camino-real-antes-de-una-compra'],
  },
]
