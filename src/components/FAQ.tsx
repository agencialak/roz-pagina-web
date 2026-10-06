import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import RevealHeading from './RevealHeading'

const EASE = [0.22, 1, 0.36, 1] as const
const VISIBLE = 3

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? faqs : faqs.slice(0, VISIBLE)

  return (
    <section id="preguntas-frecuentes" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Preguntas frecuentes</p>
          <RevealHeading
            className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] text-ink mb-6"
            lines={['Lo que más', <span className="accent-serif gradient-text-purple text-[1.1em]">nos preguntan</span>]}
          />
          <p className="text-ink-muted leading-relaxed mb-8 max-w-sm">
            ¿Tienes otra pregunta? Escríbenos por WhatsApp.
          </p>
          <a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-primary-700 hover:border-primary-700 transition-colors"
          >
            Hacer una pregunta
          </a>
        </div>

        <div className="border-t border-ink/10">
          {shown.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-ink/10">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className={`text-lg font-medium tracking-tight transition-colors ${isOpen ? 'text-ink' : 'text-ink/80 group-hover:text-ink'}`}>
                      {item.q}
                    </span>
                    <span
                      className={`mt-0.5 w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-ink border-ink text-white rotate-45' : 'border-ink/15 text-ink-muted group-hover:border-ink/30'
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-ink-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}

          {!showAll && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group mt-8 mx-auto flex flex-col items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              Ver las {faqs.length - VISIBLE} preguntas restantes
              <span className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:border-ink/30 group-hover:translate-y-0.5 transition-all">
                <ChevronDown size={18} className="animate-bounce [animation-duration:2s]" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default FAQ
