import type { NextPage } from 'next'
import { useState } from 'react'
import Card from '../components/common/Card'
import PostModal from '../components/common/PostModal'

interface PostData {
  id: number;
  title: string;
  content: string;
}

const HomePage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<PostData[]>([])

  const handleAddPost = (title: string, content: string) => {
    const newPost: PostData = {
      id: posts.length + 1,
      title,
      content
    }
    setPosts([...posts, newPost])
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>Home Page</h1>
      
      {/* Static Cards Container */}
      <div style={{ marginBottom: '2rem' }}>
        <Card 
          title="Welcome Card" 
          content="This is the welcome card content showing our reusable component in action." 
        />
        <Card 
          title="Features" 
          content="Discover the amazing features of our Next.js application with TypeScript and Tailwind CSS." 
        />
        <Card 
          title="Getting Started" 
          content="Start building your application with reusable components and modern tools." 
        />
      </div>

      {/* Button to open modal */}
      <button 
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}
      >
        Add New Post
      </button>

      {/* Dynamic Posts from Modal */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
          <Card 
            key={post.id}
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>

      {/* Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  )
}

export default HomePage