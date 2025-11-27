import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState } from 'react'
import { theme } from '../../../styles/theme'

interface CardStackProps {
  photos: string[]
}

const CardStack = ({ photos }: CardStackProps) => {
  const [cards, setCards] = useState(photos)

  const sendToBack = () => {
    setCards((prev) => {
      const newCards = [...prev]
      const [first] = newCards.splice(0, 1)
      newCards.push(first)
      return newCards
    })
  }

  return (
    <div style={{ 
      position: 'relative', 
      height: '400px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {cards.map((photo, index) => (
        <Card 
          key={photo} 
          photo={photo} 
          index={index} 
          total={cards.length}
          onSendToBack={sendToBack}
        />
      ))}
      
      <p style={{
        position: 'absolute',
        bottom: '0',
        fontSize: '0.85rem',
        color: theme.palette.text.secondary,
        opacity: 0.6
      }}>
        Arraste para ver mais
      </p>
    </div>
  )
}

interface CardProps {
  photo: string
  index: number
  total: number
  onSendToBack: () => void
}

const Card = ({ photo, index, total, onSendToBack }: CardProps) => {
  const x = useMotionValue(0)
  const rotateZ = useTransform(x, [-200, 0, 200], [-15, 0, 15])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])
  
  const isFront = index === 0
  const rotation = index % 2 === 0 ? 3 : -3

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 80) {
      animate(x, 0, { duration: 0 })
      onSendToBack()
    } else {
      animate(x, 0, { type: 'spring', stiffness: 500, damping: 30 })
    }
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: theme.shadows[3],
        cursor: isFront ? 'grab' : 'default',
        zIndex: total - index,
        x: isFront ? x : 0,
        rotateZ: isFront ? rotateZ : rotation,
        opacity: isFront ? opacity : 1,
        scale: 1 - index * 0.06,
        y: index * 20
      }}
      drag={isFront ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: 'grabbing' }}
      layout
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <img 
        src={photo} 
        alt="Foto"
        style={{ 
          width: '550px',
          height: '400px',
          objectFit: 'cover',
          display: 'block',
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  )
}

export default CardStack
