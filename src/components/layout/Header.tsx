import { motion } from 'framer-motion'

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header 
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'transparent',
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
        zIndex: 1000,
        padding: '1rem 0'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <motion.div 
          style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Portfolio
        </motion.div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
          {[
            { id: 'about', label: 'Sobre mim' },
            { id: 'projects', label: 'Projetos' },
            { id: 'certificates', label: 'Certificados' },
            { id: 'resume', label: 'Resumos' },
            { id: 'contact', label: 'Contatos' }
          ].map((item) => (
            <li key={item.id}>
              <motion.button 
                onClick={() => scrollToSection(item.id)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'white', 
                  cursor: 'pointer', 
                  fontSize: '1rem',
                  padding: '0.5rem 1rem'
                }}
                whileHover={{ scale: 1.05, color: '#667eea' }}
                whileTap={{ scale: 0.95 }}
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
