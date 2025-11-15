import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'
import { Box } from '../layout'

const Resume = () => {
  return (
    <Box component="section" sx={{ ...globalStyles.section }}>
      <motion.div 
        id="resume"
        style={globalStyles.container}
        {...animations.slideDown}
      >
        <motion.div {...animations.containerScale}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Resumos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Resume
