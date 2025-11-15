import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 700 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Frontend Developer
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Criando experiências digitais incríveis
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
