import { motion } from 'framer-motion'
import { useState } from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import { theme } from '../../../styles/theme'
import brazilFlag from '../../../assets/icons/brazil-flag.png'
import photo1 from '../../../assets/photos/photo-1.jpg'
import photo2 from '../../../assets/photos/photo-2.jpg'
import photo3 from '../../../assets/photos/photo-3.jpg'

const About = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const photos = [photo2, photo3, photo1]

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length)
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
      <motion.div 
        id="about"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          style={{
            ...globalStyles.title,
            fontFamily: "'Fredoka One', cursive",
            textAlign: 'left',
            marginBottom: '3rem'
          }}
        >
          Sobre mim
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Texto pessoal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              color: theme.palette.text.secondary
            }}>
              <img 
                src={brazilFlag} 
                alt="Brasil" 
                style={{ width: '20px', height: 'auto' }}
              />
              <span style={{ fontSize: '1.1rem' }}>Florianópolis, BR</span>
            </div>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: theme.palette.text.secondary,
              marginBottom: '1.5rem'
            }}>
              Desenvolvedor apaixonado por criar experiências digitais. 
              Quando não estou codando, você me encontra explorando as trilhas 
              de Floripa ou com a câmera na mão registrando paisagens.
            </p>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: theme.palette.text.secondary
            }}>
              Atualmente focado no ecossistema React, Node.js e tecnologias modernas 
              que potencializam tanto a experiência do usuário quanto a produtividade 
              no desenvolvimento.
            </p>
          </motion.div>

          {/* Carrossel de fotos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: theme.shadows[3],
              position: 'relative',
              aspectRatio: '4/3'
            }}>
              <motion.img
                key={currentPhoto}
                src={photos[currentPhoto]}
                alt="Foto pessoal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Controles do carrossel */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1rem',
              alignItems: 'center'
            }}>
              <motion.button
                onClick={prevPhoto}
                style={{
                  background: 'none',
                  border: `2px solid ${theme.palette.text.secondary}`,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  color: theme.palette.text.secondary,
                  fontSize: '1.2rem'
                }}
                whileHover={{ scale: 1.1, borderColor: theme.palette.text.primary }}
                whileTap={{ scale: 0.95 }}
              >
                ←
              </motion.button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      background: currentPhoto === index 
                        ? theme.palette.text.primary 
                        : theme.palette.primary.dark,
                      cursor: 'pointer',
                      transition: 'background 0.3s'
                    }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextPhoto}
                style={{
                  background: 'none',
                  border: `2px solid ${theme.palette.text.secondary}`,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  color: theme.palette.text.secondary,
                  fontSize: '1.2rem'
                }}
                whileHover={{ scale: 1.1, borderColor: theme.palette.text.primary }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
