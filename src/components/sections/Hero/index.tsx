import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { globalStyles } from '../../../styles/globalStyles'
import { animations, gsapConfig } from '../../../styles/animations'
import { theme } from '../../../styles/theme'
import profileImage from '../../../assets/image-profile.jpg'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = 'Frontend Developer'
    titleRef.current.innerHTML = text
      .split('')
      .map((char) => 
        char === ' ' 
          ? '<span class="letter" style="display: inline-block;">&nbsp;</span>'
          : `<span class="letter" style="display: inline-block;">${char}</span>`
      )
      .join('')

    let oldX = 0, oldY = 0, deltaX = 0, deltaY = 0

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
        const tl = gsap.timeline({ onComplete: () => { tl.kill() } })
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
          x: 0, y: 0, scale: 1, rotation: 0,
          duration: config.return.duration,
          ease: config.return.ease
        })
      })
    })

    const heroElement = heroRef.current
    heroElement?.addEventListener('mousemove', handleMouseMove)
    return () => heroElement?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} style={{
      ...globalStyles.hero,
      padding: '0 4rem',
      paddingTop: '80px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '100%',
        gap: '4rem'
      }}>
        <motion.div 
          style={{ flex: 1, textAlign: 'left' }}
          {...animations.heroContainer}
        >
          <motion.p 
            style={{
              color: theme.palette.text.secondary,
              fontSize: '1.3rem',
              marginBottom: '0.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Olá, eu sou
          </motion.p>
          <motion.h1 
            ref={titleRef}
            style={{
              ...globalStyles.heroTitle,
              cursor: 'pointer',
              textAlign: 'left'
            }}
            {...animations.heroTitle}
          >
            Frontend Developer
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ flex: '0 0 auto' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src={profileImage} 
            alt="Foto de perfil"
            style={{
              width: '450px',
              height: '550px',
              objectFit: 'cover',
              borderRadius: '6px',
              boxShadow: '0 12px 40px rgba(35, 67, 116, 0.25)'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
