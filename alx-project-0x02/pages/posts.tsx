import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import PostCard from '../components/common/PostCard'

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostsPage: NextPage = () => {
  const [posts, setPosts] = useState<ApiPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        
        const data = await response.json()
        setPosts(data.slice(0, 10)) // Get first 10 posts for demonstration
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>Posts Page</h1>
        <p style={{ color: '#666' }}>Loading posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>Posts Page</h1>
        <p style={{ color: '#e74c3c' }}>Error: {error}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>Posts Page</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Displaying {posts.length} posts from JSONPlaceholder API
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  )
}

export default PostsPage