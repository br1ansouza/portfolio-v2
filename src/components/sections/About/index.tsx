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

          <div style={{ 
            display: 'inline-flex', 
            backgroundColor: 'rgba(35, 67, 116, 0.1)',
            borderRadius: '12px',
            padding: '4px',
            position: 'relative'
          }}>
            <motion.div
              style={{
                position: 'absolute',
                backgroundColor: theme.palette.secondary.main,
                borderRadius: '8px',
                height: 'calc(100% - 8px)',
                top: '4px'
              }}
              animate={{
                width: activeTab === 'tech' ? '60px' : '76px',
                x: activeTab === 'tech' ? 0 : 64
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveTab('tech')}
              style={{
                padding: '8px 14px',
                background: 'none',
                border: 'none',
                color: activeTab === 'tech' ? '#fff' : theme.palette.text.secondary,
                fontWeight: 600,
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s'
              }}
            >
              Tech
            </button>
            
            <button
              onClick={() => setActiveTab('personal')}
              style={{
                padding: '8px 14px',
                background: 'none',
                border: 'none',
                color: activeTab === 'personal' ? '#fff' : theme.palette.text.secondary,
                fontWeight: 600,
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s'
              }}
            >
              Pessoal
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: '450px' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ position: 'absolute', width: '100%', top: 0 }}
              >
                <TechSection />
              </motion.div>
            )}
            {activeTab === 'personal' && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
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
