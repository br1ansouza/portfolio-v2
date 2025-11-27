import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { gsapConfig } from '../styles/animations'

gsap.registerPlugin(ScrollTrigger)

export const useScrollTrigger = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = document.querySelectorAll('.tech-card')
      const config = gsapConfig.techCards
      
      cards.forEach((card) => {
        gsap.fromTo(card, config.from, {
          ...config.to,
          scrollTrigger: {
            trigger: card,
            ...config.scrollTrigger
          }
        })
      })
    },
    { scope: containerRef }
  )

  return containerRef
}
