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
      if (b.startsWith('# ')) return `<h1>${inline(b.slice(2))}</h1>`
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
  const articleBody = `
<main>
  <article>
    <p><a href="/blog">Blog</a></p>
    <h1>${escapeHtml(post.title)}</h1>
    <p>Por ${escapeHtml(post.author)} — ${post.date}</p>
    <img src="${post.image}" alt="${escapeHtml(post.title)}" />
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
