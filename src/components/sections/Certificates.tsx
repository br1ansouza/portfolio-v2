import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'

const Certificates = () => {
  return (
    <section style={globalStyles.sectionAlt}>
      <motion.div 
        id="certificates"
        style={globalStyles.container}
        {...animations.slideRight}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Certificados
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certificates
