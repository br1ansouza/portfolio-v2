import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { globalStyles } from '../../../styles/globalStyles'
import { animations, gsapConfig } from '../../../styles/animations'
import { theme } from '../../../styles/theme'
import AnimatedText from './AnimatedText'
import { allTechnologies } from './technologies'
import { aboutContent } from './content'

const About = () => {
  const techRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = 'Sobre mim'
    titleRef.current.innerHTML = text
      .split('')
      .map((char) => 
        char === ' ' 
          ? '<span class="letter" style="display: inline-block;">&nbsp;</span>'
          : `<span class="letter" style="display: inline-block;">${char}</span>`
      )
      .join('')

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

    const letters = titleRef.current.querySelectorAll('.letter')
    const config = gsapConfig.letterEffect
    
    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill()
          }
        })
        tl.timeScale(config.timeScale)

        tl.to(letter, {
          x: deltaX * config.movement.multiplier,
          y: deltaY * config.movement.multiplier,
          scale: config.scale,
          rotation: config.rotation.random(),
          duration: config.movement.duration,
          ease: config.movement.ease
        })
        tl.to(letter, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: config.return.duration,
          ease: config.return.ease
        })
      })
    })

    const titleElement = titleRef.current
    if (titleElement) {
      titleElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        titleElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    if (!techRef.current) return

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

    const icons = techRef.current.querySelectorAll('.tech-icon')
    
    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill()
          }
        })
        const config = gsapConfig.techIcons
        tl.timeScale(config.timeScale)

        const img = icon.querySelector('img')
        tl.to(img, {
          x: deltaX * config.movement.velocity,
          y: deltaY * config.movement.velocity,
          duration: 0.8,
          ease: 'power2.out'
        })
        tl.to(img, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        })
        tl.fromTo(img, {
          rotate: 0
        }, {
          duration: config.rotation.duration,
          rotate: config.rotation.random(),
          yoyo: config.rotation.yoyo,
          repeat: config.rotation.repeat,
          ease: config.rotation.ease
        }, '<')
      })
    })

    const techElement = techRef.current
    if (techElement) {
      techElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        techElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const techGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem 0.3rem',
    justifyItems: 'center'
  }

  const techItemStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    position: 'relative' as const,
    cursor: 'pointer'
  }

  const iconStyle = {
    width: '80px',
    height: '80px'
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
    <section style={globalStyles.sectionAlt}>
      <motion.div 
        id="about"
        style={globalStyles.container}
        {...animations.fadeIn}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 
            ref={titleRef}
            style={{
              ...globalStyles.title,
              fontFamily: "'Fredoka One', cursive",
              cursor: 'pointer'
            }}
            {...animations.titleFade}
          >
            Sobre mim
          </motion.h2>
          
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '2rem'
            }}
            {...animations.textFade}
          >
            <div style={{ textAlign: 'left' }}>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <AnimatedText 
                  key={index}
                  style={{ 
                    ...globalStyles.text, 
                    marginBottom: index < aboutContent.paragraphs.length - 1 ? '1.5rem' : '0',
                    fontSize: '1.2rem',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: '400',
                    lineHeight: '1.6'
                  }}
                >
                  {paragraph}
                </AnimatedText>
              ))}
            </div>

            <motion.div 
              ref={techRef}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div style={techGridStyle}>
                {allTechnologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="tech-icon"
                    style={techItemStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={tech.icon} alt={tech.name} style={iconStyle} />
                    <div className="tooltip" style={tooltipStyle}>{tech.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
