import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogCarouselProps {
  images: string[]
  title: string
}

const BlogCarousel = ({ images, title }: BlogCarouselProps) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  // El visor adopta la proporción de las láminas (cuadradas o 4:5) para no dejar franjas vacías
  const [ratio, setRatio] = useState(4 / 5)

  const goTo = (newIndex: number) => {
    setDirection(newIndex > index ? 'right' : 'left')
    setIndex((newIndex + images.length) % images.length)
  }

  return (
    <div className="mb-12">
      <div
        style={{ aspectRatio: ratio }}
        className="relative rounded-2xl overflow-hidden border border-ink/[0.06] bg-surface-muted shadow-[0_24px_60px_-35px_rgba(24,20,34,0.35)]"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} - lámina ${index + 1} de ${images.length}`}
            onLoad={index === 0 ? (e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight) : undefined}
            initial={{ opacity: 0, x: direction === 'right' ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'right' ? -60 : 60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-ink/10 shadow-sm flex items-center justify-center text-ink hover:bg-white transition-colors"
              aria-label="Lámina anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-ink/10 shadow-sm flex items-center justify-center text-ink hover:bg-white transition-colors"
              aria-label="Siguiente lámina"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 border border-ink/10 text-xs text-ink-muted font-medium tabular-nums">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-primary-600' : 'w-2 bg-ink/15 hover:bg-ink/30'
              }`}
              aria-label={`Ir a la lámina ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogCarousel
