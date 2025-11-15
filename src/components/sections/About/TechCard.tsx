import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { gsapConfig } from '../../../styles/animations'
import { theme } from '../../../styles/theme'

interface Tech {
  name: string
  icon: string
}

interface TechCardProps {
  title: string
  technologies: Tech[]
}

const TechCard = ({ title, technologies }: TechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    let oldX = 0
    let oldY = 0
    let deltaX = 0
    let deltaY = 0

    const handleMouseMove = (e: MouseEvent) => {
      deltaX = e.clientX - oldX
      deltaY = e.clientY - oldY
      oldX = e.clientX
      oldY = e.clientY
    }

    const icons = cardRef.current.querySelectorAll('.tech-icon')
    const config = gsapConfig.letterEffect
    
    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill()
          }
        })
        tl.timeScale(config.timeScale)

        tl.to(icon, {
          x: deltaX * config.movement.multiplier,
          y: deltaY * config.movement.multiplier,
          scale: config.scale,
          rotation: config.rotation.random(),
          duration: config.movement.duration,
          ease: config.movement.ease
        })
        tl.to(icon, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: config.return.duration,
          ease: config.return.ease
        })
      })
    })

    const cardElement = cardRef.current
    if (cardElement) {
      cardElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        cardElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const cardStyle = {
    background: 'rgba(208, 242, 231, 0.05)',
    padding: '2rem',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.primary.main}`,
    textAlign: 'center' as const
  }

  const techGridStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem'
  }

  const techItemStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    position: 'relative' as const
  }

  const iconStyle = {
    width: '64px',
    height: '64px',
    cursor: 'pointer'
  }

  const tooltipStyle = {
    position: 'absolute' as const,
    bottom: '-35px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: theme.palette.text.primary,
    color: 'white',
    padding: '6px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    whiteSpace: 'nowrap' as const,
    opacity: 0,
    pointerEvents: 'none' as const,
    transition: 'opacity 0.3s ease',
    zIndex: 10
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement
    if (tooltip) tooltip.style.opacity = '1'
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement
    if (tooltip) tooltip.style.opacity = '0'
  }

  return (
    <div ref={cardRef} className="tech-card" style={cardStyle}>
      <h3 style={{ color: theme.palette.text.primary, marginBottom: '0.5rem', fontSize: '1.3rem' }}>
        {title}
      </h3>
      <div style={techGridStyle}>
        {technologies.map((tech) => (
          <motion.div 
            key={tech.name} 
            className="tech-icon"
            style={techItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={tech.icon} alt={tech.name} style={iconStyle} />
            <div className="tooltip" style={tooltipStyle}>{tech.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechCard
