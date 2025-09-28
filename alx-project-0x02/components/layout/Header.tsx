import Link from 'next/link'

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>
            ALX Project
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/home" style={{ textDecoration: 'none', color: '#555', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Home
          </Link>
          <Link href="/about" style={{ textDecoration: 'none', color: '#555', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            About
          </Link>
          <Link href="/posts" style={{ textDecoration: 'none', color: '#555', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Posts
          </Link>
          <Link href="/users" style={{ textDecoration: 'none', color: '#555', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Users
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header