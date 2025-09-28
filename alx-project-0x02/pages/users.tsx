import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import UserCard from '../components/common/UserCard'

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState<ApiUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>Users Page</h1>
        <p style={{ color: '#666' }}>Loading users...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>Users Page</h1>
        <p style={{ color: '#e74c3c' }}>Error: {error}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>Users Page</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Displaying {users.length} users from JSONPlaceholder API
      </p>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {users.map((user) => (
          <UserCard 
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  )
}

export default UsersPage