import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const BlogCta = ({ title, text }: { title: ReactNode; text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="relative mt-20 sm:mt-24 overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-ink px-6 sm:px-12 py-14 sm:py-16 text-center"
  >
    <div aria-hidden className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.35),transparent)] pointer-events-none" />
    <div aria-hidden className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(109,40,255,0.25),transparent)] pointer-events-none" />
    <div className="relative">
      <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-4 max-w-2xl mx-auto leading-tight">
        {title}
      </h2>
      <p className="text-white/60 mb-8 max-w-xl mx-auto">{text}</p>
      <a
        href="https://wa.me/573218515587"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-white text-ink font-medium hover:-translate-y-0.5 transition-transform"
      >
        Hablemos por WhatsApp
        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
          <ArrowRight size={17} />
        </span>
      </a>
    </div>
  </motion.div>
)

export default BlogCta
