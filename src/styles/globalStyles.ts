import { theme } from './theme'

export const globalStyles = {
  section: {
    minHeight: '100vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: theme.spacing(8)
  },
  
  sectionAlt: {
    minHeight: '100vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: theme.spacing(8),
    backgroundColor: theme.palette.background.paper
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${theme.spacing(4)}`,
    textAlign: 'center' as const
  },

  title: {
    ...theme.typography.h2,
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary
  },

  text: {
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  },

  hero: {
    height: '100vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: 'white',
    textAlign: 'center' as const
  },

  heroTitle: {
    ...theme.typography.h1,
    marginBottom: theme.spacing(2),
    color: 'white'
  },

  heroText: {
    ...theme.typography.body2,
    opacity: 0.9,
    color: 'white'
  }
}
