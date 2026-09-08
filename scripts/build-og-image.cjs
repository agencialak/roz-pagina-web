const sharp = require('sharp')
const path = require('path')

const W = 1200
const H = 630
const INK = '#181422'
const INK_MUTED = '#5B5568'
const PURPLE = '#6D28FF'
const PURPLE_LIGHT = '#8B5CFF'
const SURFACE = '#FAF9FD'

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDFCFF" />
      <stop offset="100%" stop-color="#F3EFFB" />
    </linearGradient>
    <linearGradient id="purpleText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${PURPLE}" />
      <stop offset="100%" stop-color="${PURPLE_LIGHT}" />
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${PURPLE}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${PURPLE}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" />

  <!-- Decorative glows -->
  <circle cx="1080" cy="80" r="260" fill="url(#glow1)" />
  <circle cx="60" cy="600" r="220" fill="url(#glow1)" />

  <!-- Subtle grid dots -->
  <g fill="${INK}" opacity="0.05">
    ${Array.from({ length: 14 })
      .map((_, col) =>
        Array.from({ length: 8 })
          .map((_, row) => `<circle cx="${60 + col * 84}" cy="${60 + row * 76}" r="1.6" />`)
          .join('')
      )
      .join('')}
  </g>

  <!-- Eyebrow badge -->
  <rect x="80" y="96" width="280" height="44" rx="22" fill="#FFFFFF" stroke="${PURPLE}" stroke-opacity="0.3" />
  <text x="220" y="124" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="${PURPLE}" text-anchor="middle" letter-spacing="0.5">AGENCIA DIGITAL PREMIUM</text>

  <!-- Headline -->
  <text x="76" y="270" font-family="Arial, sans-serif" font-size="82" font-weight="900" fill="${INK}" letter-spacing="-1">CONSTRUIMOS MARCAS</text>
  <text x="76" y="360" font-family="Arial, sans-serif" font-size="82" font-weight="900" fill="url(#purpleText)" letter-spacing="-1">QUE VENDEN</text>

  <!-- Subtext -->
  <text x="80" y="420" font-family="Arial, sans-serif" font-size="26" font-weight="400" fill="${INK_MUTED}">Estrategia digital que convierte atención en crecimiento real.</text>

  <!-- Stat badges -->
  <g font-family="Arial, sans-serif">
    <rect x="80" y="470" width="230" height="92" rx="16" fill="#FFFFFF" stroke="${INK}" stroke-opacity="0.08" />
    <text x="105" y="515" font-size="34" font-weight="900" fill="url(#purpleText)">120M+</text>
    <text x="105" y="542" font-size="16" font-weight="500" fill="${INK_MUTED}">Visualizaciones</text>

    <rect x="330" y="470" width="230" height="92" rx="16" fill="#FFFFFF" stroke="${INK}" stroke-opacity="0.08" />
    <text x="355" y="515" font-size="34" font-weight="900" fill="url(#purpleText)">300+</text>
    <text x="355" y="542" font-size="16" font-weight="500" fill="${INK_MUTED}">Proyectos</text>

    <rect x="580" y="470" width="230" height="92" rx="16" fill="#FFFFFF" stroke="${INK}" stroke-opacity="0.08" />
    <text x="605" y="515" font-size="34" font-weight="900" fill="url(#purpleText)">9 cifras</text>
    <text x="605" y="542" font-size="16" font-weight="500" fill="${INK_MUTED}">Generadas</text>
  </g>

  <!-- Domain tag -->
  <text x="1120" y="590" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${INK}" text-anchor="end">rozagencia.com</text>
</svg>
`

const logoPath = path.join(__dirname, '..', 'public', 'logo-dark.png')
const outPath = path.join(__dirname, '..', 'public', 'og-image.jpg')

async function build() {
  const logo = await sharp(logoPath).resize({ height: 70 }).toBuffer()

  await sharp(Buffer.from(svg))
    .composite([{ input: logo, top: 40, left: 80 }])
    .jpeg({ quality: 92 })
    .toFile(outPath)

  console.log('og-image.jpg generado en', outPath)
}

build()
