import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'

const Hero = () => {
  return (
    <section style={globalStyles.hero}>
      <motion.div {...animations.heroContainer}>
        <motion.h1 style={globalStyles.heroTitle} {...animations.heroTitle}>
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
