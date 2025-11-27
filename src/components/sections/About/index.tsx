import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import { theme } from '../../../styles/theme'
import TechSection from './TechSection'
import PersonalSection from './PersonalSection'

const About = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'personal'>('tech')

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
      <motion.div 
        id="about"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', width: '100%' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <motion.h2 style={{ ...globalStyles.title, fontFamily: "'Fredoka One', cursive", textAlign: 'left', margin: 0 }}>
            Sobre mim
          </motion.h2>
          
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            <motion.button
              onClick={() => setActiveTab('tech')}
              disabled={activeTab === 'tech'}
              style={{
                background: 'none',
                border: 'none',
                cursor: activeTab === 'tech' ? 'default' : 'pointer',
                color: activeTab === 'tech' ? theme.palette.primary.dark : theme.palette.text.primary,
                fontSize: '1.5rem',
                padding: '0.3rem',
                opacity: activeTab === 'tech' ? 0.4 : 1,
                transition: 'all 0.3s'
              }}
              whileHover={activeTab !== 'tech' ? { scale: 1.2 } : {}}
              whileTap={activeTab !== 'tech' ? { scale: 0.95 } : {}}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('personal')}
              disabled={activeTab === 'personal'}
              style={{
                background: 'none',
                border: 'none',
                cursor: activeTab === 'personal' ? 'default' : 'pointer',
                color: activeTab === 'personal' ? theme.palette.primary.dark : theme.palette.text.primary,
                fontSize: '1.5rem',
                padding: '0.3rem',
                opacity: activeTab === 'personal' ? 0.4 : 1,
                transition: 'all 0.3s'
              }}
              whileHover={activeTab !== 'personal' ? { scale: 1.2 } : {}}
              whileTap={activeTab !== 'personal' ? { scale: 0.95 } : {}}
            >
              →
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'tech' ? (
            <motion.div
              key="tech"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TechSection />
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PersonalSection />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default About
