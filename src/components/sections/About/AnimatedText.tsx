import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTextProps {
  children: string
  style?: React.CSSProperties
}

const AnimatedText = ({ children, style }: AnimatedTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = textRef.current
    const words = children.split(' ')
    
    text.innerHTML = words
      .map(word => `<span class="word" style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${word}</span></span>`)
      .join(' ')

    const wordElements = text.querySelectorAll('.word span')

    gsap.set(wordElements, { yPercent: 100 })

    gsap.to(wordElements, {
      yPercent: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'bottom 90%',
        scrub: 1
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === text) {
          trigger.kill()
        }
      })
    }
  }, [children])

  return (
    <p 
      ref={textRef} 
      style={{ 
        ...style,
        overflow: 'hidden'
      }}
    >
      {children}
    </p>
  )
}

export default AnimatedText
