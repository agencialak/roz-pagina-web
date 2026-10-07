const SITE_URL = 'https://rozagencia.com'
const DEFAULT_TITLE =
  'Agencia Roz | Agencia de publicidad y marketing digital en Pereira'
const DEFAULT_DESCRIPTION =
  'Agencia de publicidad y marketing digital en Pereira. Publicidad en Facebook e Instagram, manejo de redes sociales y producción audiovisual con resultados reales.'

function setMeta(selector: string, attribute: string, value: string) {
  const el = document.querySelector<HTMLElement>(selector)
  if (el) el.setAttribute(attribute, value)
}

export function setPageSeo(options: {
  title?: string
  description?: string
  path?: string
  image?: string
}) {
  const title = options.title ?? DEFAULT_TITLE
  const description = options.description ?? DEFAULT_DESCRIPTION
  const url = `${SITE_URL}${options.path ?? '/'}`
  const image = options.image
    ? `${SITE_URL}${options.image}`
    : `${SITE_URL}/og-image.jpg`

  document.title = title
  setMeta('meta[name="description"]', 'content', description)
  setMeta('link[rel="canonical"]', 'href', url)
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[property="og:image"]', 'content', image)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[name="twitter:image"]', 'content', image)
}
