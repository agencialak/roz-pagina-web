import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { blogPosts, CATEGORY_LABELS, type BlogPost } from '../data/blogPosts'
import { containerVariants, itemVariants } from '../utils/animations'
import { setPageSeo } from '../utils/seo'
import { formatPostDate } from '../utils/date'
import BlogLikeButton from './BlogLikeButton'
import RevealHeading from './RevealHeading'
import BlogCta from './BlogCta'

const PostMeta = ({ post, light = false }: { post: BlogPost; light?: boolean }) => (
  <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${light ? 'text-white/60' : 'text-ink-subtle'}`}>
    <span className={`px-2.5 py-1 rounded-full font-medium ${light ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary-700'}`}>
      {CATEGORY_LABELS[post.category]}
    </span>
    <span>{post.readTime} min de lectura</span>
    <span aria-hidden>·</span>
    <span>{formatPostDate(post.date, 'short')}</span>
  </div>
)

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    className="group mb-10 sm:mb-14 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[1.75rem] bg-surface-card border border-ink/[0.06] hover:border-primary-600/25 hover:shadow-[0_30px_70px_-35px_rgba(109,40,255,0.45)] transition-[border-color,box-shadow] duration-300"
  >
    <Link to={`/blog/${post.slug}`} className="block overflow-hidden bg-surface-muted">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full max-h-[460px] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />
    </Link>
    <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
      <p className="text-[11px] uppercase tracking-[0.18em] text-primary-700 font-medium mb-5">Lo más reciente</p>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-[1.15] text-ink mb-4 group-hover:text-primary-700 transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-ink-muted leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
      <PostMeta post={post} />
      <div className="mt-8 flex items-center justify-between gap-4">
        <Link
          to={`/blog/${post.slug}`}
          className="group/cta inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-ink text-white text-sm font-medium"
        >
          Leer artículo
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover/cta:translate-x-0.5 transition-transform">
            <ArrowRight size={15} />
          </span>
        </Link>
        <BlogLikeButton postId={post.id} size="sm" />
      </div>
    </div>
  </motion.article>
)

const PostCard = ({ post }: { post: BlogPost }) => (
  <motion.article
    variants={itemVariants}
    className="group flex flex-col rounded-2xl bg-surface-card border border-ink/[0.06] overflow-hidden hover:-translate-y-1 hover:border-primary-600/25 hover:shadow-[0_24px_60px_-30px_rgba(109,40,255,0.45)] transition-[transform,border-color,box-shadow] duration-300"
  >
    <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] overflow-hidden bg-surface-muted">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
      />
    </Link>
    <div className="p-6 flex flex-col flex-1">
      <PostMeta post={post} />
      <Link to={`/blog/${post.slug}`} className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug text-ink group-hover:text-primary-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
      <p className="mt-3 text-ink-muted text-sm leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
      <div className="mt-6 pt-4 border-t border-ink/[0.06] flex items-center justify-between gap-3">
        <BlogLikeButton postId={post.id} size="sm" />
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-700 transition-colors group/link"
        >
          Leer
          <ArrowRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.article>
)

const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categoria')

  const categories = useMemo(
    () => Array.from(new Set(blogPosts.map((p) => p.category))),
    []
  )

  const filteredPosts = useMemo(
    () =>
      activeCategory
        ? blogPosts.filter((p) => p.category === activeCategory)
        : blogPosts,
    [activeCategory]
  )

  // Sin filtro, el más reciente va destacado arriba; con filtro, todo va en la cuadrícula
  const featured = !activeCategory ? filteredPosts[0] : null
  const gridPosts = featured ? filteredPosts.slice(1) : filteredPosts

  const selectCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ categoria: category })
    } else {
      setSearchParams({})
    }
  }

  useEffect(() => {
    const label = activeCategory ? CATEGORY_LABELS[activeCategory as BlogPost['category']] : null
    setPageSeo({
      title: label
        ? `${label} | Blog ROZ Social Media`
        : 'Blog & Insights | ROZ Social Media - Datos reales de Meta Ads',
      description:
        'Datos reales de campañas de Meta Ads, estrategias que funcionan y análisis de costos por seguidor y conversación. Aprendizajes de más de 300 proyectos en Colombia.',
      // Todas las vistas filtradas canonicalizan a /blog: es la misma lista,
      // solo reordenada, para no crear contenido duplicado a ojos de Google.
      path: '/blog',
    })
  }, [activeCategory])

  const chip = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
      active
        ? 'bg-ink text-white border-ink'
        : 'bg-surface-card text-ink-muted border-ink/10 hover:border-ink/25 hover:text-ink'
    }`

  return (
    <div className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 -top-40 w-[900px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.14),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group mb-10"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Blog</p>
          <RevealHeading
            as="h1"
            immediate
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-ink mb-6"
            lines={[<>Blog & <span className="accent-serif gradient-text-purple text-[1.1em]">insights</span></>]}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto"
          >
            Datos reales, estrategias que funcionan, y todo lo que hemos aprendido manejando campañas para más de 300 negocios.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <button onClick={() => selectCategory(null)} className={chip(!activeCategory)}>
            Todos
          </button>
          {categories.map((category) => (
            <button key={category} onClick={() => selectCategory(category)} className={chip(activeCategory === category)}>
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>

        {featured && <FeaturedPost post={featured} />}

        <motion.div
          key={activeCategory ?? 'all'}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {gridPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <p className="text-center py-20 text-ink-muted text-lg">
            {blogPosts.length === 0
              ? 'Próximamente más artículos...'
              : 'Todavía no hay artículos en esta categoría.'}
          </p>
        )}

        <BlogCta
          title={<>¿Quieres resultados como estos <span className="accent-serif gradient-text-light text-[1.1em]">para tu negocio?</span></>}
          text="Llevamos más de 300 proyectos. Cuéntanos tu negocio y diseñamos una estrategia a medida con datos reales, no promesas."
        />
      </div>
    </div>
  )
}

export default BlogList
