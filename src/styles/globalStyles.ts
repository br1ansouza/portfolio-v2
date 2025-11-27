import { theme } from './theme'

export const globalStyles = {
  section: {
    minHeight: '100vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '4rem 0'
  },
  
  sectionAlt: {
    minHeight: '100vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '4rem 0'
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    textAlign: 'center' as const
  },

  title: {
    ...theme.typography.h2,
    marginBottom: '2rem',
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
    color: theme.palette.text.primary,
    textAlign: 'center' as const
  },

  heroTitle: {
    fontSize: '3.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    fontFamily: "'Fredoka One', cursive"
  },

  heroText: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary
  }
}
