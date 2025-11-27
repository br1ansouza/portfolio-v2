import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { theme } from '../../styles/theme'

interface HeaderProps {
  smoother: React.MutableRefObject<any>
}

const Header = ({ smoother }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const headerOpacity = useTransform(scrollY, [0, 100, 400, 500], [1, 0, 0, 1])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 400)
  })

  const scrollToSection = (id: string) => {
    if (smoother.current) {
      smoother.current.scrollTo(`#${id}`, true, 'top 100px')
    }
  }

  const scrollToTop = () => {
    if (smoother.current) {
      smoother.current.scrollTo(0, true)
    }
  }

  useEffect(() => {
    const sections = ['about', 'projects', 'certificates', 'resume', 'contact']
    
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const navItems = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'resume', label: 'Resumos' },
    { id: 'contact', label: 'Contatos' }
  ]

  return (
    <motion.header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isScrolled ? 'rgba(255, 253, 241, 0.95)' : 'transparent',
      boxShadow: isScrolled ? theme.shadows[1] : 'none',
      borderBottom: isScrolled ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent',
      zIndex: 1000,
      padding: '1rem 0',
      opacity: headerOpacity,
      transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s'
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6rem'
        }}>
          <motion.button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Fredoka One', cursive",
              fontSize: '2rem',
              fontWeight: 700,
              color: theme.palette.text.primary,
              padding: 0
            }}
            whileHover={{ color: theme.palette.secondary.light }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            BS
          </motion.button>
          {!isScrolled && (
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '2rem', 
              margin: 0, 
              padding: 0
            }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button 
                    onClick={() => scrollToSection(item.id)} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.id ? theme.palette.text.primary : theme.palette.text.secondary,
                      cursor: 'pointer',
                      fontSize: '1rem',
                      padding: '0.5rem 0',
                      position: 'relative'
                    }}
                    whileHover={{ color: theme.palette.text.primary }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: theme.palette.text.primary
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isScrolled && (
          <motion.ul 
            style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '2rem', 
              margin: 0, 
              padding: 0,
              position: 'absolute',
              left: '35%',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button 
                  onClick={() => scrollToSection(item.id)} 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? theme.palette.text.primary : theme.palette.text.secondary,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    position: 'relative'
                  }}
                  whileHover={{ color: theme.palette.text.primary }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: theme.palette.text.primary
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
