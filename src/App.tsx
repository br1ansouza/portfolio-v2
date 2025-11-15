import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import { Header } from './components/layout'
import { Hero, About, Projects, Certificates, Resume, Contact } from './components/sections'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

function App() {
  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<any>(null)

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
      })
    },
    { scope: main }
  )

  return (
    <div id="smooth-wrapper" ref={main}>
      <div 
        id="smooth-content"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          background: 'linear-gradient(135deg, #FCF9EA 0%, #D0F2E7 70%, #4A6B9A 100%)',
          minHeight: '100vh'
        }}
      >
        <Header smoother={smoother} />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default App
