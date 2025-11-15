import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'

const About = () => {
  return (
    <section style={globalStyles.sectionAlt}>
      <motion.div 
        id="about"
        style={globalStyles.container}
        {...animations.fadeIn}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Sobre mim
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
