import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react'
import { blogPosts, type BlogPost } from '../data/blogPosts'
import { containerVariants, itemVariants } from '../utils/animations'
import { setPageSeo } from '../utils/seo'

const CATEGORY_LABELS: Record<BlogPost['category'], string> = {
  educativo: 'Educativo',
  casos: 'Casos',
  estrategia: 'Estrategia',
  tendencia: 'Tendencia',
}

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

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver a la página principal
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Datos reales, estrategias que funcionan, y todo lo que hemos aprendido manejando campañas para más de 300 negocios
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => selectCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors border ${
              !activeCategory
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary-400/40 hover:text-primary-400'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors border ${
                activeCategory === category
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary-400/40 hover:text-primary-400'
              }`}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          key={activeCategory ?? 'all'}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-primary-400/30 transition-all duration-300 hover:bg-white/10"
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-64 overflow-hidden bg-black/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime} min lectura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span className="line-clamp-1">{post.author.split(' - ')[0]}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-gray-600 mb-4">
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm group/link"
                >
                  Leer artículo
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              {blogPosts.length === 0
                ? 'Próximamente más artículos...'
                : 'Todavía no hay artículos en esta categoría.'}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600/20 to-purple-600/20 border border-primary-400/20 rounded-lg p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quieres resultados como estos para tu negocio?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Llevamos más de 300 proyectos exitosos. Cuéntanos tu negocio y diseñamos una estrategia a medida con datos reales, no promesas.
          </p>
          <a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Hablemos por WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogList
