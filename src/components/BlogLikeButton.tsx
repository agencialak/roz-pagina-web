import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useBlogLikes } from '../hooks/useBlogLikes'

interface BlogLikeButtonProps {
  postId: string
  size?: 'sm' | 'md'
}

const BlogLikeButton = ({ postId, size = 'md' }: BlogLikeButtonProps) => {
  const { count, liked, toggleLike } = useBlogLikes(postId)
  const iconSize = size === 'sm' ? 16 : 20

  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleLike()
      }}
      whileTap={{ scale: 0.9 }}
      className={`inline-flex items-center gap-2 rounded-full transition-colors ${
        size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
      } ${
        liked
          ? 'bg-primary-600/20 text-primary-400 border border-primary-500/40'
          : 'bg-white/5 text-gray-400 border border-white/10 hover:border-primary-400/40 hover:text-primary-400'
      }`}
      aria-label={liked ? 'Quitar like' : 'Dar like'}
    >
      <motion.span animate={liked ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
        <Heart size={iconSize} className={liked ? 'fill-primary-400' : ''} />
      </motion.span>
      <span className="font-semibold">{count}</span>
    </motion.button>
  )
}

export default BlogLikeButton
