import { useEffect, useState } from 'react'
import { loadDatabase } from '../config/firebase'

const LIKED_POSTS_KEY = 'roz_liked_posts'

const getLikedPosts = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]')
  } catch {
    return []
  }
}

export function useBlogLikes(postId: string) {
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(getLikedPosts().includes(postId))

    let unsubscribe: (() => void) | undefined
    let cancelled = false
    loadDatabase().then(({ database, fb }) => {
      if (cancelled) return
      unsubscribe = fb.onValue(fb.ref(database, `blogLikes/${postId}/count`), (snapshot) => {
        setCount(snapshot.val() || 0)
      })
    })

    return () => {
      cancelled = true
      unsubscribe?.()
    }
  }, [postId])

  const toggleLike = () => {
    const likedPosts = getLikedPosts()
    const change = (delta: number) =>
      loadDatabase().then(({ database, fb }) =>
        fb.update(fb.ref(database, `blogLikes/${postId}`), { count: fb.increment(delta) })
      )

    if (liked) {
      change(-1)
      localStorage.setItem(
        LIKED_POSTS_KEY,
        JSON.stringify(likedPosts.filter((id) => id !== postId))
      )
      setLiked(false)
    } else {
      change(1)
      localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([...likedPosts, postId]))
      setLiked(true)
    }
  }

  return { count, liked, toggleLike }
}
