export const theme = {
  palette: {
    primary: {
      main: '#667eea',
      light: '#9aa7ff',
      dark: '#3f51b5'
    },
    secondary: {
      main: '#764ba2',
      light: '#a478d4',
      dark: '#4a2c73'
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa'
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  },
  
  spacing: (factor: number) => `${factor * 8}px`,
  
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '1.2rem',
      lineHeight: 1.5
    }
  },

  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },

  shadows: {
    1: '0 2px 4px rgba(0,0,0,0.1)',
    2: '0 4px 8px rgba(0,0,0,0.15)',
    3: '0 8px 16px rgba(0,0,0,0.2)'
  }
}
