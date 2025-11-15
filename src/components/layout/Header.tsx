import { motion } from 'framer-motion'
import { animations } from '../../styles/animations'
import { theme } from '../../styles/theme'
import siglaLogo from '../../assets/Sigla.png'

interface HeaderProps {
  smoother: React.MutableRefObject<any>
}

const Header = ({ smoother }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    if (smoother.current) {
      smoother.current.scrollTo(`#${id}`, true, 'top 100px')
    }
  }

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    background: 'rgba(252, 249, 234, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[1],
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
    height: '40px',
    width: 'auto'
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
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
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
        <img 
          src={siglaLogo} 
          alt="Logo" 
          style={logoStyle}
        />
        <ul style={listStyle}>
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button 
                onClick={() => scrollToSection(item.id)} 
                style={buttonStyle}
                whileHover={{ 
                  y: -2,
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: theme.shadows[2]
                }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
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
