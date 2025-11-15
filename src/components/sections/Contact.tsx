import { motion } from 'framer-motion'
import { globalStyles } from '../../styles/globalStyles'
import { animations } from '../../styles/animations'
import { Box } from '../layout'

const Contact = () => {
  return (
    <Box component="section" sx={{ ...globalStyles.sectionAlt }}>
      <motion.div 
        id="contact"
        style={globalStyles.container}
        {...animations.scaleIn}
      >
        <motion.div {...animations.containerScale}>
          <motion.h2 style={globalStyles.title} {...animations.titleFade}>
            Contatos
          </motion.h2>
          <motion.p style={globalStyles.text} {...animations.textFade}>
            Conteúdo em desenvolvimento...
          </motion.p>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Contact
