import { motion } from 'framer-motion'
import { animations } from '../../styles/animations'

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    background: 'transparent',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    zIndex: 1000,
    padding: '1rem 0'
  }

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  }

  const listStyle = {
    display: 'flex',
    listStyle: 'none' as const,
    gap: '2rem',
    margin: 0,
    padding: 0
  }

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem 1rem'
  }

  const navItems = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'resume', label: 'Resumos' },
    { id: 'contact', label: 'Contatos' }
  ]

  return (
    <motion.header style={headerStyle} {...animations.headerSlide}>
      <nav style={navStyle}>
        <motion.div style={logoStyle} {...animations.logoHover}>
          Portfolio
        </motion.div>
        <ul style={listStyle}>
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button 
                onClick={() => scrollToSection(item.id)} 
                style={buttonStyle}
                {...animations.buttonHover}
              >
                {item.label}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
