import { useEffect, useState } from 'react'
import { database } from '../config/firebase'
import { ref, onValue, update, increment } from 'firebase/database'

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

    const likesRef = ref(database, `blogLikes/${postId}/count`)
    const unsubscribe = onValue(likesRef, (snapshot) => {
      setCount(snapshot.val() || 0)
    })

    return () => unsubscribe()
  }, [postId])

  const toggleLike = () => {
    const likesRef = ref(database, `blogLikes/${postId}`)
    const likedPosts = getLikedPosts()

    if (liked) {
      update(likesRef, { count: increment(-1) })
      localStorage.setItem(
        LIKED_POSTS_KEY,
        JSON.stringify(likedPosts.filter((id) => id !== postId))
      )
      setLiked(false)
    } else {
      update(likesRef, { count: increment(1) })
      localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([...likedPosts, postId]))
      setLiked(true)
    }
  }

  return { count, liked, toggleLike }
}
