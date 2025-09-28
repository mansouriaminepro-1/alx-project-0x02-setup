import type { NextPage } from 'next'
import Button from '../components/common/Button'

const AboutPage: NextPage = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>About Page</h1>
      
      <div>
        <h2 style={{ color: '#444', marginBottom: '1rem' }}>Button Examples</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#555', marginBottom: '0.5rem' }}>Different Sizes:</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Button size="small" shape="rounded-md">Small Button</Button>
            <Button size="medium" shape="rounded-md">Medium Button</Button>
            <Button size="large" shape="rounded-md">Large Button</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#555', marginBottom: '0.5rem' }}>Different Shapes:</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Button size="medium" shape="rounded-sm">Rounded Small</Button>
            <Button size="medium" shape="rounded-md">Rounded Medium</Button>
            <Button size="medium" shape="rounded-full">Rounded Full</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#555', marginBottom: '0.5rem' }}>Combinations:</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Button size="small" shape="rounded-full">Small & Round</Button>
            <Button size="large" shape="rounded-sm">Large & Square</Button>
            <Button size="medium" shape="rounded-full">Medium & Round</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage