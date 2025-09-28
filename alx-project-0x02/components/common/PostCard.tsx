import { PostProps } from '../../interfaces'

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1.5rem', 
      marginBottom: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h2>
      <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>{content}</p>
      <div style={{ 
        color: '#888', 
        fontSize: '0.875rem',
        borderTop: '1px solid #eee',
        paddingTop: '0.5rem'
      }}>
        User ID: {userId}
      </div>
    </div>
  )
}

export default PostCard