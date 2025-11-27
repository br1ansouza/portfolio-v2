import { motion } from 'framer-motion'
import { globalStyles } from '../../../styles/globalStyles'
import { animations } from '../../../styles/animations'

const Contact = () => {
  return (
    <section style={globalStyles.sectionAlt}>
      <motion.div 
        id="contact"
        style={globalStyles.container}
        {...animations.fadeIn}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Contatos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
