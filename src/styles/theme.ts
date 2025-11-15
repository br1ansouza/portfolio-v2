export const theme = {
  palette: {
    primary: {
      main: '#D0F2E7',
      light: '#E8F8F3',
      dark: '#A8E6D1'
    },
    secondary: {
      main: '#234374',
      light: '#4A6B9A',
      dark: '#1A3256'
    },
    background: {
      default: '#FCF9EA',
      paper: '#FCF9EA'
    },
    text: {
      primary: '#234374',
      secondary: '#4A6B9A',
      accent: '#1A3256'
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
    1: '0 2px 4px rgba(35, 67, 116, 0.1)',
    2: '0 4px 8px rgba(35, 67, 116, 0.15)',
    3: '0 8px 16px rgba(35, 67, 116, 0.2)'
  }
}
