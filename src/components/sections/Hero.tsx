import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { globalStyles } from '../../styles/globalStyles'
import { animations, gsapConfig } from '../../styles/animations'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = 'Frontend Developer'
    titleRef.current.innerHTML = text
      .split('')
      .map((char, index) => 
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

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section ref={heroRef} style={globalStyles.hero}>
      <motion.div {...animations.heroContainer}>
        <motion.h1 
          ref={titleRef}
          style={{
            ...globalStyles.heroTitle,
            cursor: 'pointer'
          }}
          {...animations.heroTitle}
        >
          Frontend Developer
        </motion.h1>
        <motion.p style={globalStyles.heroText} {...animations.heroText}>
          Criando experiências digitais incríveis
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
