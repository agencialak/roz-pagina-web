const SITE_URL = 'https://rozagencia.com'
const DEFAULT_TITLE =
  'ROZ Social Media - Agencia Digital Premium | Estrategia Digital y Posicionamiento'
const DEFAULT_DESCRIPTION =
  'ROZ Social Media - Agencia digital premium especializada en estrategia de redes sociales, pauta publicitaria y posicionamiento de marca. 120M+ visualizaciones, 300+ proyectos exitosos en Colombia y USA.'

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
