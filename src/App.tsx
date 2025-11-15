import { Header } from './components/layout'
import { Hero, About, Projects, Certificates, Resume, Contact } from './components/sections'

function App() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      background: 'linear-gradient(135deg, #FCF9EA 0%, #D0F2E7 70%, #4A6B9A 100%)',
      minHeight: '100vh'
    }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
