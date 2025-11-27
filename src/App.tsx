import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import { Header } from './components/layout'
import { Hero, About, Projects, Certificates, Resume, Contact } from './components/sections'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header smoother={smoother} />
      <div id="smooth-wrapper" ref={main}>
        <div 
          id="smooth-content"
          style={{ 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            background: 'linear-gradient(135deg, #fffdf1ff 0%, #D0F2E7 90%, #4A6B9A 100%)',
            minHeight: '100vh'
          }}
        >
          <Hero />
          <About />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
