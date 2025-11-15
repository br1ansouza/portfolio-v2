import { motion } from 'framer-motion'
import { globalStyles } from '../../../styles/globalStyles'
import { animations } from '../../../styles/animations'

const Projects = () => {
  return (
    <section style={globalStyles.section}>
      <motion.div 
        id="projects"
        style={globalStyles.container}
        {...animations.slideLeft}
      >
        <motion.div {...animations.containerFade}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Projetos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
