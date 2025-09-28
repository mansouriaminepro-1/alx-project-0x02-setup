import { UserProps } from '../../interfaces'

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1.5rem', 
      marginBottom: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{name}</h2>
      <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '0.5rem' }}>
        <strong>Email:</strong> {email}
      </p>
      <div style={{ 
        color: '#666',
        borderTop: '1px solid #eee',
        paddingTop: '0.5rem'
      }}>
        <strong>Address:</strong><br />
        {address.street}, {address.city}, {address.zipcode}
      </div>
    </div>
  )
}

export default UserCard