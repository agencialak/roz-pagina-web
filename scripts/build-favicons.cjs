// Favicons a partir del isotipo de ROZ (PNG transparente en alta resolución).
// Uso: npm install --no-save sharp && node scripts/build-favicons.cjs "<ruta al isotipo>" && npm uninstall sharp
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SRC = process.argv[2]
const PUBLIC = path.join(__dirname, '..', 'public')

// Isotipo recortado y centrado en un cuadrado con un margen pequeño
async function icon(size, { padding, background }) {
  const inner = Math.round(size * (1 - padding * 2))
  const mark = await sharp(SRC)
    .trim()
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: mark, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

// .ico con imágenes PNG embebidas (formato soportado por todos los navegadores actuales)
function toIco(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  let offset = 6 + 16 * pngs.length
  const entries = pngs.map(({ size, buf }) => {
    const e = Buffer.alloc(16)
    e.writeUInt8(size >= 256 ? 0 : size, 0)
    e.writeUInt8(size >= 256 ? 0 : size, 1)
    e.writeUInt16LE(1, 4)
    e.writeUInt16LE(32, 6)
    e.writeUInt32LE(buf.length, 8)
    e.writeUInt32LE(offset, 12)
    offset += buf.length
    return e
  })
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)])
}

async function build() {
  const transparent = { r: 0, g: 0, b: 0, alpha: 0 }
  const ico = []
  for (const size of [16, 32, 48]) {
    const buf = await icon(size, { padding: 0.02, background: transparent })
    fs.writeFileSync(path.join(PUBLIC, `favicon-${size}x${size}.png`), buf)
    ico.push({ size, buf })
  }
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), toIco(ico))

  // iOS no respeta la transparencia: fondo claro de la marca y más margen
  const apple = await icon(180, { padding: 0.16, background: { r: 250, g: 249, b: 253, alpha: 1 } })
  fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), apple)

  for (const size of [192, 512]) {
    const buf = await icon(size, { padding: 0.16, background: { r: 250, g: 249, b: 253, alpha: 1 } })
    fs.writeFileSync(path.join(PUBLIC, `icon-${size}.png`), buf)
  }
  console.log('favicons generados')
}

build()
