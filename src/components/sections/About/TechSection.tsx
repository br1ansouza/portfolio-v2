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
      const label = icon.querySelector('.tech-label') as HTMLElement
      const chars = label?.querySelectorAll('span')
      const img = icon.querySelector('img')

      icon.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({ onComplete: () => { tl.kill() } })
        tl.timeScale(config.timeScale)

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

        gsap.to(img, { filter: 'blur(3px)', duration: 0.2 })
        if (chars) {
          gsap.fromTo(chars, 
            { opacity: 0, y: 5 },
            { opacity: 1, y: 0, stagger: 0.03, duration: 0.1, ease: 'power2.out' }
          )
        }
      })

      icon.addEventListener('mouseleave', () => {
        gsap.to(img, { filter: 'blur(0px)', duration: 0.2 })
        if (chars) {
          gsap.to(chars, { opacity: 0, duration: 0.15 })
        }
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
          <div key={tech.name} className="tech-icon" style={{ cursor: 'pointer', position: 'relative', width: '65px', height: '65px' }}>
            <img src={tech.icon} alt={tech.name} style={{ width: '65px', height: '65px' }} />
            <span className="tech-label" style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              fontSize: '0.7rem', 
              fontWeight: 700,
              color: theme.palette.text.primary,
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}>
              {tech.name.split('').map((char, i) => (
                <span key={i} style={{ opacity: 0, display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechSection
