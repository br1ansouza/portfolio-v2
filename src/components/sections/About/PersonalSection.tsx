import { theme } from '../../../styles/theme'
import brazilFlag from '../../../assets/icons/brazil-flag.png'
import photo1 from '../../../assets/photos/photo-1.jpg'
import photo2 from '../../../assets/photos/photo-2.jpg'
import photo3 from '../../../assets/photos/photo-3.jpg'
import CardStack from './CardStack'

const PersonalSection = () => {
  const photos = [photo2, photo3, photo1]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: theme.palette.text.secondary }}>
          <img src={brazilFlag} alt="Brasil" style={{ width: '20px', height: 'auto' }} />
          <span style={{ fontSize: '1.1rem' }}>Florianópolis, BR</span>
        </div>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: theme.palette.text.secondary, marginBottom: '1.5rem' }}>
          Desenvolvedor apaixonado por criar experiências digitais. 
          Quando não estou codando, você me encontra explorando as trilhas 
          de Floripa ou com a câmera na mão registrando paisagens.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: theme.palette.text.secondary }}>
          Também curto pegar a moto e viajar, conhecer lugares novos 
          sempre que dá.
        </p>
      </div>

      <CardStack photos={photos} />
    </div>
  )
}

export default PersonalSection
