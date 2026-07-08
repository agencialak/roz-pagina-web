import { motion } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const post = blogPosts.find((p) => p.slug === slug)
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post no encontrado</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al blog
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-semibold rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="text-sm">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span className="text-sm">{post.readTime} min de lectura</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-lg overflow-hidden border border-white/10"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none mb-16"
        >
          <div className="text-gray-300 space-y-6 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-3xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="space-y-2 ml-6">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="list-disc list-inside">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.startsWith('---')) {
                return (
                  <div
                    key={idx}
                    className="my-8 border-t border-white/10"
                  />
                )
              }
              return (
                <p key={idx} className="text-base">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.article>

        {/* Navigation to Other Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/10"
        >
          {/* Previous Post */}
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary-400/30 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-2 text-primary-400 mb-3 group-hover:gap-3 transition-all">
                <ArrowLeft size={18} />
                <span className="text-sm font-semibold">Post anterior</span>
              </div>
              <h3 className="text-white font-bold group-hover:text-primary-400 transition-colors line-clamp-2">
                {prevPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Post */}
          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary-400/30 hover:bg-white/10 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-primary-400 mb-3 group-hover:gap-3 transition-all">
                <span className="text-sm font-semibold">Siguiente post</span>
                <ArrowLeft size={18} className="rotate-180" />
              </div>
              <h3 className="text-white font-bold group-hover:text-primary-400 transition-colors line-clamp-2">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600/20 to-purple-600/20 border border-primary-400/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas una estrategia digital como estas?
          </h3>
          <p className="text-gray-400 mb-6">
            Llevamos más de 300 proyectos exitosos. Cuéntanos tu negocio y diseñamos una estrategia a medida.
          </p>
          <a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Hablemos por WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPostDetail
