import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { globalStyles } from '../../../styles/globalStyles'
import { gsapConfig } from '../../../styles/animations'
import { theme } from '../../../styles/theme'
import profileImage from '../../../assets/image-profile.jpg'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = 'Brian de Souza'
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
      height: '100vh',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <motion.div 
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '4rem',
          paddingRight: '2rem',
          zIndex: 2
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p 
          style={{
            color: theme.palette.text.secondary,
            fontSize: '1.4rem',
            marginBottom: '0.5rem',
            fontFamily: "'Fredoka One', cursive"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Portfólio
        </motion.p>
        <div style={{ width: 'fit-content' }}>
          <motion.h1 
            ref={titleRef}
            style={{
              ...globalStyles.heroTitle,
              cursor: 'pointer',
              textAlign: 'left'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Brian de Souza
          </motion.h1>
          <motion.p 
            style={{
              color: theme.palette.text.secondary,
              fontSize: '1.3rem',
              fontFamily: "'Fredoka One', cursive",
              textAlign: 'right',
              marginTop: '-0.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Desenvolvedor
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '50%',
          zIndex: 1
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          src={profileImage} 
          alt="Foto de perfil"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center'
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
