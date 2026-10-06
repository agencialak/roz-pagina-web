// Imágenes de vista previa (Open Graph, 1200x630) por página.
// Uso: npm install --no-save sharp && node scripts/build-page-og-images.cjs && npm uninstall sharp
const sharp = require('sharp')
const path = require('path')

const W = 1200
const H = 630
const INK = '#181422'
const INK_MUTED = '#5B5568'
const PURPLE = '#6D28FF'
const PURPLE_LIGHT = '#8B5CFF'

const pages = [
  {
    file: 'og-blog.jpg',
    eyebrow: 'BLOG',
    title: 'Blog &amp; insights',
    accent: 'datos reales de Meta Ads',
    stats: [
      ['Casos', 'con cifras reales'],
      ['Costos', 'por resultado'],
      ['Estrategia', 'que sí funciona'],
    ],
  },
  {
    file: 'og-meta-ads.jpg',
    eyebrow: 'SERVICIO · META ADS',
    title: 'Publicidad en Meta Ads',
    accent: 'para negocios que necesitan vender',
    stats: [
      ['$100M+', 'COP invertidos'],
      ['7,58x', 'ROAS en un caso real'],
      ['$375', 'COP por conversación'],
    ],
  },
  {
    file: 'og-redes-sociales.jpg',
    eyebrow: 'SERVICIO · REDES SOCIALES',
    title: 'Gestión de redes sociales',
    accent: 'con estrategia detrás',
    stats: [
      ['$264', 'COP por seguidor real'],
      ['100+', 'marcas trabajadas'],
      ['Instagram', 'y Facebook'],
    ],
  },
  {
    file: 'og-produccion-audiovisual.jpg',
    eyebrow: 'SERVICIO · PRODUCCIÓN',
    title: 'Producción audiovisual',
    accent: 'para redes y pauta',
    stats: [
      ['120M+', 'visualizaciones'],
      ['300+', 'proyectos'],
      ['Equipo', 'de producción propio'],
    ],
  },
]

const svgFor = (p) => `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDFCFF" />
      <stop offset="100%" stop-color="#F1ECFB" />
    </linearGradient>
    <linearGradient id="purpleText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${PURPLE}" />
      <stop offset="100%" stop-color="${PURPLE_LIGHT}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${PURPLE_LIGHT}" stop-opacity="0.22" />
      <stop offset="100%" stop-color="${PURPLE_LIGHT}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" />
  <circle cx="1060" cy="40" r="340" fill="url(#glow)" />
  <circle cx="40" cy="640" r="240" fill="url(#glow)" />

  <g stroke="${INK}" stroke-opacity="0.045">
    ${Array.from({ length: 22 }).map((_, i) => `<line x1="${i * 56}" y1="0" x2="${i * 56}" y2="${H}" />`).join('')}
    ${Array.from({ length: 12 }).map((_, i) => `<line x1="0" y1="${i * 56}" x2="${W}" y2="${i * 56}" />`).join('')}
  </g>

  <text x="80" y="176" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="${INK_MUTED}" letter-spacing="3">${p.eyebrow}</text>

  <text x="76" y="268" font-family="Arial, sans-serif" font-size="74" font-weight="700" fill="${INK}" letter-spacing="-2">${p.title}</text>
  <text x="78" y="352" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="66" fill="url(#purpleText)">${p.accent}</text>

  <g font-family="Arial, sans-serif">
    <line x1="80" y1="430" x2="1120" y2="430" stroke="${INK}" stroke-opacity="0.1" />
    <line x1="80" y1="548" x2="1120" y2="548" stroke="${INK}" stroke-opacity="0.1" />
    ${p.stats
      .map(
        ([value, label], i) => `
      ${i > 0 ? `<line x1="${80 + i * 347}" y1="444" x2="${80 + i * 347}" y2="534" stroke="${INK}" stroke-opacity="0.1" />` : ''}
      <text x="${80 + i * 347 + (i > 0 ? 28 : 0)}" y="492" font-size="40" font-weight="700" fill="${INK}" letter-spacing="-1">${value}</text>
      <text x="${80 + i * 347 + (i > 0 ? 28 : 0)}" y="524" font-size="18" fill="${INK_MUTED}">${label}</text>`
      )
      .join('')}
  </g>

  <text x="1120" y="596" font-family="Arial, sans-serif" font-size="19" font-weight="700" fill="${INK}" text-anchor="end">rozagencia.com</text>
</svg>`

async function build() {
  const logo = await sharp(path.join(__dirname, '..', 'public', 'logo-dark.png')).resize({ height: 58 }).toBuffer()
  for (const p of pages) {
    const out = path.join(__dirname, '..', 'public', p.file)
    await sharp(Buffer.from(svgFor(p)))
      .composite([{ input: logo, top: 58, left: 80 }])
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(out)
    console.log('generado', p.file)
  }
}

build()
