import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { globalStyles } from '../../../styles/globalStyles'
import { animations, gsapConfig } from '../../../styles/animations'
import { theme } from '../../../styles/theme'
import AnimatedText from './AnimatedText'

const About = () => {
  const techRef = useRef<HTMLDivElement>(null)

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

  const allTechnologies = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'TypeORM', icon: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
  ]

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
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Sobre mim
          </motion.h2>
          
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '2rem'
            }}
            {...animations.textFade}
          >
            <div style={{ textAlign: 'left' }}>
              <AnimatedText style={{ ...globalStyles.text, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Desenvolvedor Frontend especializado em criar experiências digitais modernas e funcionais. 
                Trabalho com React e TypeScript, transformando ideias em interfaces intuitivas e responsivas.
              </AnimatedText>
              
              <AnimatedText style={{ ...globalStyles.text, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Minha abordagem combina design centrado no usuário com código limpo e escalável. 
                Tenho experiência tanto no desenvolvimento frontend quanto backend, permitindo uma 
                visão completa do produto digital.
              </AnimatedText>
              
              <AnimatedText style={{ ...globalStyles.text, fontSize: '1.1rem' }}>
                Atualmente focado no ecossistema React, Node.js e tecnologias modernas que 
                potencializam tanto a experiência do usuário quanto a produtividade no desenvolvimento.
              </AnimatedText>
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
