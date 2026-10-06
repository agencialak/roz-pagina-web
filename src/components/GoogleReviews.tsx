import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'
import { containerVariants, itemVariants } from '../utils/animations'
import { GOOGLE_PROFILE_URL, GOOGLE_RATING, googleReviews } from '../data/googleReviews'

const GoogleMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" aria-hidden className={className}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
)

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={15} className="fill-[#FBBC04] text-[#FBBC04]" />
    ))}
  </div>
)

const GoogleReviews = () => (
  <section className="relative pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 rounded-2xl bg-surface-card border border-ink/[0.06] px-6 py-5">
        <div className="flex items-center gap-4">
          <GoogleMark className="w-9 h-9 shrink-0" />
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-ink tabular-nums">{GOOGLE_RATING}</span>
              <Stars />
            </div>
            <p className="text-sm text-ink-muted">Calificación de nuestros clientes en Google</p>
          </div>
        </div>
        <a
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-primary-700 transition-colors"
        >
          Ver todas las reseñas en Google
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {googleReviews.map((review) => (
          <motion.figure
            key={review.name}
            variants={itemVariants}
            className="flex flex-col rounded-2xl bg-surface-card border border-ink/[0.06] p-6 hover:border-primary-600/25 hover:shadow-[0_20px_50px_-28px_rgba(109,40,255,0.4)] transition-[border-color,box-shadow] duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <Stars />
              <GoogleMark className="w-5 h-5" />
            </div>
            <blockquote className="text-ink/80 leading-relaxed flex-1">“{review.text}”</blockquote>
            <figcaption className="mt-5 pt-4 border-t border-ink/[0.06] text-sm font-medium text-ink">
              {review.name}
              <span className="block text-xs font-normal text-ink-subtle">Reseña en Google</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
)

export default GoogleReviews
