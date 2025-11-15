export const animations = {
  slideUp: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideLeft: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideRight: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideDown: {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  containerScale: {
    initial: { scale: 0.8 },
    whileInView: { scale: 1 },
    transition: { duration: 0.8, delay: 0.2 },
    viewport: { once: true }
  },

  titleFade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
    viewport: { once: true }
  },

  textFade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.6 },
    viewport: { once: true }
  },

  heroContainer: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },

  heroTitle: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.3, duration: 0.8 }
  },

  heroText: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.6, duration: 0.8 }
  },

  headerSlide: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  },

  logoHover: {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.2 }
  },

  buttonHover: {
    whileHover: { scale: 1.05, color: '#667eea' },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  }
}
