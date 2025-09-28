import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1.5rem', 
      marginBottom: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>{title}</h2>
      <p style={{ color: '#666', lineHeight: '1.5' }}>{content}</p>
    </div>
  )
}

export default Card