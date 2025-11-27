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
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <motion.button
              onClick={() => setActiveTab('tech')}
              disabled={activeTab === 'tech'}
              style={{
                background: activeTab === 'tech' ? theme.palette.primary.main : 'transparent',
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: activeTab === 'tech' ? 'default' : 'pointer',
                color: activeTab === 'tech' ? theme.palette.text.primary : theme.palette.primary.dark,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={activeTab !== 'tech' ? { scale: 1.1, backgroundColor: theme.palette.primary.light } : {}}
              whileTap={activeTab !== 'tech' ? { scale: 0.95 } : {}}
            >
              ‹
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('personal')}
              disabled={activeTab === 'personal'}
              style={{
                background: activeTab === 'personal' ? theme.palette.primary.main : 'transparent',
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: activeTab === 'personal' ? 'default' : 'pointer',
                color: activeTab === 'personal' ? theme.palette.text.primary : theme.palette.primary.dark,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={activeTab !== 'personal' ? { scale: 1.1, backgroundColor: theme.palette.primary.light } : {}}
              whileTap={activeTab !== 'personal' ? { scale: 0.95 } : {}}
            >
              ›
            </motion.button>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: '450px' }}>
          <AnimatePresence>
            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', width: '100%', top: 0 }}
              >
                <TechSection />
              </motion.div>
            )}
            {activeTab === 'personal' && (
              <motion.div
                key="personal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', width: '100%', top: 0 }}
              >
                <PersonalSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default About
