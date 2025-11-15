import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'
import { Box } from '../layout'

const About = () => {
  return (
    <Box component="section" sx={{ ...globalStyles.sectionAlt }}>
      <motion.div 
        id="about"
        style={globalStyles.container}
        {...animations.slideUp}
      >
        <motion.div {...animations.containerScale}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Sobre mim
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default About
