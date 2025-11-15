import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'

const Resume = () => {
  return (
    <section style={globalStyles.section}>
      <motion.div 
        id="resume"
        style={globalStyles.container}
        {...animations.slideDown}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Resumos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Resume
