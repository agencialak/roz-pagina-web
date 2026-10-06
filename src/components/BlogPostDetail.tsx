import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts, AUTHOR_PROFILES, CATEGORY_LABELS } from '../data/blogPosts'
import { setPageSeo } from '../utils/seo'
import { formatPostDate } from '../utils/date'
import BlogLikeButton from './BlogLikeButton'
import BlogCarousel from './BlogCarousel'
import BlogCta from './BlogCta'

const EASE = [0.22, 1, 0.36, 1] as const

// Convierte *texto* en <em> dentro de un fragmento sin negrillas
const renderItalics = (text: string, keyPrefix: number) => {
  const parts = text.split(/\*(.+?)\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={`${keyPrefix}-${i}`} className="text-ink-subtle">
        {part}
      </em>
    ) : (
      part
    )
  )
}

// Convierte **texto** en <strong> y *texto* en <em> dentro de un párrafo o ítem de lista
const renderInline = (text: string) => {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-ink font-semibold">
        {part}
      </strong>
    ) : (
      renderItalics(part, i)
    )
  )
}

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-primary-600 to-primary-800"
    />
  )
}

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>()

  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (!post) return

    setPageSeo({
      title: `${post.title} | ROZ Social Media`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
    })

    // Datos estructurados Article (schema.org) para Google y AI Overviews
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: `https://rozagencia.com${post.image}`,
      datePublished: post.date,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: post.author.split(' - ')[0],
        ...AUTHOR_PROFILES[post.author.split(' - ')[0]],
        worksFor: { '@type': 'Organization', name: 'ROZ Social Media' },
      },
      publisher: {
        '@type': 'Organization',
        name: 'ROZ Social Media',
        logo: { '@type': 'ImageObject', url: 'https://rozagencia.com/logo.png' },
      },
      mainEntityOfPage: `https://rozagencia.com/blog/${post.slug}`,
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'article-jsonld'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      document.getElementById('article-jsonld')?.remove()
    }
  }, [post])
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ink mb-4">Post no encontrado</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
          >
            <ArrowLeft size={18} />
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  const authorName = post.author.split(' - ')[0]

  return (
    <div key={post.slug} className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ReadingProgress />
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 -top-40 w-[900px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.12),transparent)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group mb-10"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Volver al blog
        </Link>

        <header className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-5"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
              {CATEGORY_LABELS[post.category]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-[-0.035em] leading-[1.08] text-ink mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap items-center justify-between gap-4 border-y border-ink/[0.08] py-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center text-sm font-semibold">
                {authorName.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium text-ink">
                  {AUTHOR_PROFILES[authorName] ? (
                    <a
                      href={AUTHOR_PROFILES[authorName].sameAs[0]}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="hover:text-primary-700 transition-colors"
                    >
                      {authorName}
                    </a>
                  ) : (
                    authorName
                  )}
                </p>
                <p className="text-xs text-ink-subtle">
                  {formatPostDate(post.date)} · {post.readTime} min de lectura
                </p>
              </div>
            </div>
            <BlogLikeButton postId={post.id} />
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          {post.images && post.images.length > 0 ? (
            <BlogCarousel images={[post.image, ...post.images]} title={post.title} />
          ) : (
            <div className="mb-12 rounded-2xl overflow-hidden border border-ink/[0.06] shadow-[0_24px_60px_-35px_rgba(24,20,34,0.35)]">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )}
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-ink/80 text-[1.0625rem] sm:text-lg leading-[1.8] space-y-6">
            {post.content.trim().split('\n\n').map((paragraph, idx) => {
              // El contenido repite el título como "# ..."; ya se muestra en el encabezado
              if (paragraph.startsWith('# ')) return null
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.025em] leading-tight text-ink !mt-12 !mb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="space-y-3">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="relative pl-6">
                        <span aria-hidden className="absolute left-0 top-[0.8em] w-2 h-2 rounded-full bg-primary-600/70" />
                        {renderInline(item.replace('- ', ''))}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.startsWith('---')) {
                return <div key={idx} className="!my-10 border-t border-ink/10" />
              }
              return <p key={idx}>{renderInline(paragraph)}</p>
            })}
          </div>
        </motion.article>

        {(prevPost || nextPost) && (
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-10 border-t border-ink/[0.08]">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group rounded-2xl bg-surface-card border border-ink/[0.06] p-6 hover:border-primary-600/25 hover:shadow-[0_20px_50px_-28px_rgba(109,40,255,0.4)] transition-[border-color,box-shadow] duration-300"
              >
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink-subtle mb-3">
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                  Más reciente
                </span>
                <span className="block font-semibold tracking-tight text-ink group-hover:text-primary-700 transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}

            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group rounded-2xl bg-surface-card border border-ink/[0.06] p-6 md:text-right hover:border-primary-600/25 hover:shadow-[0_20px_50px_-28px_rgba(109,40,255,0.4)] transition-[border-color,box-shadow] duration-300"
              >
                <span className="flex items-center md:justify-end gap-2 text-xs uppercase tracking-[0.14em] text-ink-subtle mb-3">
                  Anterior
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="block font-semibold tracking-tight text-ink group-hover:text-primary-700 transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </nav>
        )}

        <BlogCta
          title={<>¿Necesitas una estrategia <span className="accent-serif gradient-text-light text-[1.1em]">como esta?</span></>}
          text="Llevamos más de 300 proyectos. Cuéntanos tu negocio y diseñamos una estrategia a medida."
        />
      </div>
    </div>
  )
}

export default BlogPostDetail
