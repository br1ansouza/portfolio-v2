import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'
import { Box } from '../layout'

const Projects = () => {
  return (
    <Box component="section" sx={{ ...globalStyles.section }}>
      <motion.div 
        id="projects"
        style={globalStyles.container}
        {...animations.slideLeft}
      >
        <motion.div {...animations.containerScale}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Projetos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Projects
