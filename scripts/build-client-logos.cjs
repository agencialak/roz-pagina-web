// Versiones web de los logos de clientes: recorta el espacio transparente alrededor
// (así todos se ven del mismo tamaño) y los reduce a un peso razonable.
// Los originales en public/clients/ no se modifican.
// Uso: npm install --no-save sharp && node scripts/build-client-logos.cjs && npm uninstall sharp
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, '..', 'public', 'clients')
const OUT = path.join(SRC, 'web')

async function build() {
  fs.mkdirSync(OUT, { recursive: true })
  const files = fs.readdirSync(SRC).filter((f) => /\.png$/i.test(f))
  for (const f of files) {
    const outName = f.replace(/\.png$/i, '.png')
    const buf = await sharp(path.join(SRC, f))
      .trim({ threshold: 10 })
      .resize({ width: 480, height: 240, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toBuffer()
    fs.writeFileSync(path.join(OUT, outName), buf)
    const meta = await sharp(buf).metadata()
    console.log(`${outName}  ${meta.width}x${meta.height}  ${Math.round(buf.length / 1024)}KB`)
  }
}

build()
