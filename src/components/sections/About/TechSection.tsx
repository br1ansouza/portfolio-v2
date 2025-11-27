import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { theme } from '../../../styles/theme'
import { gsapConfig } from '../../../styles/animations'
import { allTechnologies } from './technologies'

const TechSection = () => {
  const techRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!techRef.current) return

    let oldX = 0, oldY = 0, deltaX = 0, deltaY = 0

    const handleMouseMove = (e: MouseEvent) => {
      deltaX = e.clientX - oldX
      deltaY = e.clientY - oldY
      oldX = e.clientX
      oldY = e.clientY
    }

    const icons = techRef.current.querySelectorAll('.tech-icon')
    const config = gsapConfig.techIcons

    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({ onComplete: () => { tl.kill() } })
        tl.timeScale(config.timeScale)

        const img = icon.querySelector('img')
        tl.to(img, {
          x: deltaX * config.movement.velocity,
          y: deltaY * config.movement.velocity,
          duration: 0.8,
          ease: 'power2.out'
        })
        tl.to(img, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
        tl.fromTo(img, { rotate: 0 }, {
          duration: config.rotation.duration,
          rotate: config.rotation.random(),
          yoyo: config.rotation.yoyo,
          repeat: config.rotation.repeat,
          ease: config.rotation.ease
        }, '<')
      })
    })

    const techElement = techRef.current
    techElement?.addEventListener('mousemove', handleMouseMove)
    return () => techElement?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'start' }}>
      <div>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: theme.palette.text.secondary, marginBottom: '1.5rem' }}>
          Desenvolvedor Frontend especializado em criar experiências digitais 
          modernas e funcionais. Trabalho com React e TypeScript, transformando 
          ideias em interfaces intuitivas e responsivas.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: theme.palette.text.secondary }}>
          Minha abordagem combina design centrado no usuário com código limpo 
          e escalável. Tenho experiência tanto no desenvolvimento frontend 
          quanto backend, permitindo uma visão completa do produto digital.
        </p>
      </div>

      <div ref={techRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem 0', justifyItems: 'center' }}>
        {allTechnologies.map((tech) => (
          <div key={tech.name} className="tech-icon" style={{ cursor: 'pointer' }} title={tech.name}>
            <img src={tech.icon} alt={tech.name} style={{ width: '65px', height: '65px' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechSection
