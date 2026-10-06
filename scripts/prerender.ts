/**
 * Pre-renderizado del blog a HTML estático.
 *
 * Se ejecuta después de `vite build` y genera, dentro de dist/:
 *   - blog/index.html                  (lista de artículos)
 *   - blog/<slug>/index.html           (cada artículo)
 *
 * Cada archivo lleva su propio <title>, meta description, canonical,
 * Open Graph, JSON-LD y el contenido del artículo como HTML legible
 * dentro de #root — así los rastreadores que no ejecutan JavaScript
 * (la mayoría de los bots de IA) ven el contenido completo. Cuando el
 * navegador carga React, la app reemplaza ese contenido y funciona
 * como SPA normal.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { blogPosts, type BlogPost } from '../src/data/blogPosts'
import { services } from '../src/data/services'
import { googleReviews, GOOGLE_PROFILE_URL } from '../src/data/googleReviews'

const SITE_URL = 'https://rozagencia.com'
const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const inline = (s: string) =>
  escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')

// Convierte el contenido markdown-simple de los posts a HTML semántico
function contentToHtml(content: string): string {
  return content
    .trim()
    .split('\n\n')
    .map((block) => {
      const b = block.trim()
      // El título ya va como <h1> del artículo; repetirlo daría dos <h1>
      if (b.startsWith('# ')) return ''
      if (b.startsWith('## ')) return `<h2>${inline(b.slice(3))}</h2>`
      if (b.startsWith('---')) return '<hr />'
      if (b.startsWith('- ')) {
        const items = b
          .split('\n')
          .map((l) => `<li>${inline(l.replace(/^- /, ''))}</li>`)
          .join('')
        return `<ul>${items}</ul>`
      }
      return `<p>${inline(b)}</p>`
    })
    .join('\n')
}

function applyMeta(
  html: string,
  opts: { title: string; description: string; path: string; image: string }
) {
  const url = `${SITE_URL}${opts.path}`
  const image = `${SITE_URL}${opts.image}`
  const title = escapeHtml(opts.title)
  const description = escapeHtml(opts.description)

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`)
}

function injectJsonLd(html: string, jsonLd: object) {
  return html.replace(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script></head>`
  )
}

function injectRootContent(html: string, body: string) {
  return html.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`
  )
}

function postJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    inLanguage: 'es',
    author: {
      '@type': 'Person',
      name: post.author.split(' - ')[0],
      worksFor: { '@type': 'Organization', name: 'ROZ Social Media' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ROZ Social Media',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

// --- Página de inicio ---
// Duplica (no importa) el copy de Hero/Services/Philosophy/Team/Results/Testimonials:
// es el único contenido legible que ven los bots que no ejecutan JavaScript (la mayoría
// de rastreadores de IA), así que debe mantenerse alineado con esos componentes.
const homeServices = [
  ['Redes Sociales', 'Gestión estratégica de presencia en todas las plataformas de Meta.'],
  ['Producción de Contenido', 'Contenido que genera engagement y convierte audiencia.'],
  ['Meta Ads', 'Campañas publicitarias estratégicas con ROI medible.'],
  ['Branding', 'Identidad visual coherente y memorable para tu marca.'],
  ['Estrategia Creativa', 'Conceptos innovadores que diferencian tu marca del mercado.'],
  ['Posicionamiento', 'Autoridad digital y liderazgo en tu nicho de mercado.'],
]

const homePillars = [
  ['Estrategia', 'Cada decisión está fundamentada en data y análisis profundo del mercado.'],
  ['Posicionamiento', 'Construimos autoridad digital que diferencia tu marca en el mercado.'],
  ['Crecimiento', 'Resultados medibles: más seguidores, más ventas, más impacto.'],
  ['Escalabilidad', 'Sistemas que funcionan hoy y mañana, a cualquier escala.'],
  ['Acompañamiento', 'Somos consejeros constantes de tu marca. Te asesoramos en cada decisión para que inviertas estratégicamente, no solo gastes presupuesto.'],
]

const homeTeam = [
  ['Santiago Rosales C.', 'CEO - Estrategia y Productor'],
  ['Laura Rosales C.', 'Administradora & Directora de Producción Audiovisual'],
  ['Nikolas Garcia', 'Co-Fundador & Estratega Digital de Campañas Publicitarias'],
  ['Kevin Ríos', 'Camarógrafo / Filmmaker'],
  ['Paulina Villegas', 'Especialista en Edición de Video'],
  ['Erika Valencia', 'Diseñadora Gráfica - Especialista en Redes Sociales'],
  ['Juan Herrera', 'Asistente de Producción'],
  ['Camila Echeverri', 'Directora Creativa & Gestora de Negocio'],
  ['Lina Gómez', 'Socia Co-Fundadora - Operaciones USA'],
  ['Valentina Correa', 'Asistente Administrativo'],
]

const homeTestimonials = [
  ['Brian Lopez', '@troncos05', 'Gracias por el acompañamiento y crecimiento que hemos tenido juntos. Cracks'],
  ['Paula Posada', '@odentoco', '¡Ellos son mi agencia favorita! Estuve mucho tiempo buscándolos, pero ahora que los encontré, no los suelto. Los recomiendo al 100%.'],
  ['Camilo Arango', '@dr.camiloarango', 'Excelente equipo, producciones impecables con ellos.'],
  ['Sara Alzate', '@anamorapereira', 'Triplicando en ventas gracias al acompañamiento de todo el equipo.'],
  ['Katherine Muñoz', '@opticalet18perreira', 'Son los mejores, súper recomendados. Muchas gracias.'],
]

const homeBody = `
<main>
  <h1>Construimos marcas que venden</h1>
  <p>Estrategia digital que convierte atención en crecimiento real. Posicionamiento, autoridad y resultados medibles para tu marca. Agencia digital premium con operaciones en Colombia y USA.</p>

  <section id="servicios">
    <h2>Nuestros servicios</h2>
    <ul>
      ${homeServices.map(([title, desc]) => `<li><strong>${escapeHtml(title)}</strong> — ${escapeHtml(desc)}</li>`).join('\n      ')}
    </ul>
    <p>Más detalle: ${services.map((sv) => `<a href="/servicios/${sv.slug}">${escapeHtml(sv.name)}</a>`).join(' · ')}</p>
  </section>

  <section id="filosofia">
    <h2>¿Qué es ROZ?</h2>
    <p>Somos una agencia enfocada en construir marcas que dominan. No hacemos campañas genéricas ni tácticas de corto plazo.</p>
    <p>Trabajamos en estrategia profunda, posicionamiento sostenible y crecimiento escalable. Cada proyecto es una oportunidad para transformar una marca en líder de su industria. +5 años de experiencia, +100 marcas escaladas.</p>
    <ul>
      ${homePillars.map(([title, desc]) => `<li><strong>${escapeHtml(title)}</strong> — ${escapeHtml(desc)}</li>`).join('\n      ')}
    </ul>
  </section>

  <section id="equipo">
    <h2>Equipo</h2>
    <ul>
      ${homeTeam.map(([name, role]) => `<li>${escapeHtml(name)} — ${escapeHtml(role)}</li>`).join('\n      ')}
    </ul>
  </section>

  <section id="resultados">
    <h2>Resultados que hablan por sí solos</h2>
    <p>Números reales de proyectos reales. Cada métrica representa marcas que escalaron con ROZ.</p>
    <ul>
      <li>$100M+ COP invertidos en Meta Ads</li>
      <li>100+ marcas trabajadas</li>
      <li>+8 países de presencia y alcance</li>
      <li>4 meses de life time value promedio</li>
      <li>Resultados desde el primer mes</li>
      <li>Soporte 7/7</li>
    </ul>
  </section>

  <section id="testimonios">
    <h2>Testimonios de clientes</h2>
    <ul>
      ${homeTestimonials.map(([name, handle, content]) => `<li>&ldquo;${escapeHtml(content)}&rdquo; — ${escapeHtml(name)} (${escapeHtml(handle)})</li>`).join('\n      ')}
    </ul>
  </section>

  <section id="resenas-google">
    <h2>Reseñas en Google</h2>
    <ul>
      ${googleReviews.map((r) => `<li>&ldquo;${escapeHtml(r.text)}&rdquo; — ${escapeHtml(r.name)}</li>`).join('')}
    </ul>
    <p><a href="${GOOGLE_PROFILE_URL}">Ver todas las reseñas de Agencia Roz en Google</a></p>
  </section>

  <p>Contacto: <a href="mailto:rozagencia23@gmail.com">rozagencia23@gmail.com</a> · WhatsApp +57 321 851 5587 · Pereira, Risaralda, Colombia. También en <a href="/blog">el blog</a>.</p>
</main>`

const homeHtml = injectRootContent(template, homeBody)
writeFileSync(join(DIST, 'index.html'), homeHtml)
console.log('prerender: index.html')

// --- Página /blog (lista de artículos) ---
const listBody = `
<main>
  <h1>Blog &amp; Insights — ROZ Social Media</h1>
  <p>Datos reales de campañas de Meta Ads, estrategias que funcionan y aprendizajes de más de 300 proyectos en Colombia.</p>
  <ul>
    ${blogPosts
      .map(
        (p) => `<li>
      <a href="/blog/${p.slug}"><h2>${escapeHtml(p.title)}</h2></a>
      <p>${escapeHtml(p.excerpt)}</p>
    </li>`
      )
      .join('\n')}
  </ul>
</main>`

let listHtml = applyMeta(template, {
  title: 'Blog & Insights | ROZ Social Media - Datos reales de Meta Ads',
  description:
    'Datos reales de campañas de Meta Ads, estrategias que funcionan y análisis de costos por seguidor y conversación. Aprendizajes de más de 300 proyectos en Colombia.',
  path: '/blog',
  image: '/og-image.jpg',
})
listHtml = injectJsonLd(listHtml, {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog & Insights — ROZ Social Media',
  url: `${SITE_URL}/blog`,
  inLanguage: 'es',
  publisher: { '@type': 'Organization', name: 'ROZ Social Media' },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.date,
  })),
})
listHtml = injectRootContent(listHtml, listBody)

mkdirSync(join(DIST, 'blog'), { recursive: true })
writeFileSync(join(DIST, 'blog', 'index.html'), listHtml)
console.log('prerender: blog/index.html')

// --- Cada artículo /blog/<slug> ---
for (const post of blogPosts) {
  const galleryImages = post.images && post.images.length > 0 ? [post.image, ...post.images] : [post.image]
  const galleryHtml = galleryImages
    .map(
      (src, i) =>
        `<img src="${src}" alt="${escapeHtml(post.title)} - lámina ${i + 1} de ${galleryImages.length}" />`
    )
    .join('\n    ')

  const articleBody = `
<main>
  <article>
    <p><a href="/blog">Blog</a></p>
    <h1>${escapeHtml(post.title)}</h1>
    <p>Por ${escapeHtml(post.author)} — ${post.date}</p>
    ${galleryHtml}
    ${contentToHtml(post.content)}
    <p><a href="${SITE_URL}">ROZ Social Media — Agencia digital en Pereira, Colombia</a></p>
  </article>
</main>`

  let html = applyMeta(template, {
    title: `${post.title} | ROZ Social Media`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  })
  html = injectJsonLd(html, postJsonLd(post))
  html = injectRootContent(html, articleBody)

  mkdirSync(join(DIST, 'blog', post.slug), { recursive: true })
  writeFileSync(join(DIST, 'blog', post.slug, 'index.html'), html)
  console.log(`prerender: blog/${post.slug}/index.html`)
}

// --- Páginas de servicio /servicios/<slug> ---
for (const sv of services) {
  const related = sv.relatedPosts
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p))

  const body = `
<main>
  <nav><a href="/">Inicio</a> / Servicios / ${escapeHtml(sv.name)}</nav>
  <h1>${escapeHtml(sv.heading[0])} ${escapeHtml(sv.heading[1])}</h1>
  <p>${escapeHtml(sv.intro)}</p>
  <h2>Resultados</h2>
  <ul>${sv.proof.map((p) => `<li><strong>${escapeHtml(p.value)}</strong> ${escapeHtml(p.label)}${p.postSlug ? ` (<a href="/blog/${p.postSlug}">ver el caso</a>)` : ''}</li>`).join('')}</ul>
  <h2>Para quién es</h2>
  <ul>${sv.forWhom.map((f) => `<li><strong>${escapeHtml(f.title)}</strong> — ${escapeHtml(f.text)}</li>`).join('')}</ul>
  <h2>Qué incluye</h2>
  <ul>${sv.includes.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
  <h2>Cómo trabajamos</h2>
  <ol>${sv.process.map((p) => `<li><strong>${escapeHtml(p.title)}</strong> — ${escapeHtml(p.text)}</li>`).join('')}</ol>
  <h2>Del blog</h2>
  <ul>${related.map((p) => `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></li>`).join('')}</ul>
  <p><a href="https://wa.me/573218515587">Cotizar este servicio por WhatsApp</a> · <a href="${SITE_URL}">ROZ Social Media — Agencia digital en Pereira, Colombia</a></p>
</main>`

  let html = applyMeta(template, {
    title: sv.metaTitle,
    description: sv.metaDescription,
    path: `/servicios/${sv.slug}`,
    image: '/og-image.jpg',
  })
  html = injectJsonLd(html, {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: sv.name,
    serviceType: sv.name,
    description: sv.metaDescription,
    url: `${SITE_URL}/servicios/${sv.slug}`,
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'United States' },
    ],
    provider: { '@type': 'LocalBusiness', name: 'ROZ Social Media', url: SITE_URL, telephone: '+573218515587' },
  })
  html = injectJsonLd(html, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: sv.name, item: `${SITE_URL}/servicios/${sv.slug}` },
    ],
  })
  html = injectRootContent(html, body)

  mkdirSync(join(DIST, 'servicios', sv.slug), { recursive: true })
  writeFileSync(join(DIST, 'servicios', sv.slug, 'index.html'), html)
  console.log(`prerender: servicios/${sv.slug}/index.html`)
}
