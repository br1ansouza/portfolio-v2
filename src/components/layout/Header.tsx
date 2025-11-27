import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { theme } from '../../styles/theme'
import siglaLogo from '../../assets/Sigla.png'

interface HeaderProps {
  smoother: React.MutableRefObject<any>
}

const Header = ({ smoother }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (id: string) => {
    if (smoother.current) {
      smoother.current.scrollTo(`#${id}`, true, 'top 100px')
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
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 253, 241, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[1],
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <img src={siglaLogo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
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
      </nav>
    </header>
  )
}

export default Header
