export const animations = {
  slideUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  slideDown: {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.3 }
  },

  containerFade: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 },
    viewport: { once: true }
  },

  titleFade: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 },
    viewport: { once: true }
  },

  textFade: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  },

  heroContainer: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },

  heroTitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.6 }
  },

  heroText: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.6 }
  },

  headerSlide: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  },

  logoHover: {
    whileHover: { y: -2 },
    transition: { duration: 0.2 }
  },

  buttonHover: {
    whileHover: { y: -2 },
    whileTap: { y: 0 },
    transition: { duration: 0.2 }
  }
}

export const gsapConfig = {
  letterEffect: {
    timeScale: 2.5,
    movement: {
      multiplier: 4,
      duration: 0.4,
      ease: 'power3.out'
    },
    scale: 1.5,
    rotation: {
      range: 60,
      random: () => (Math.random() - 0.5) * 60
    },
    return: {
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)'
    }
  }
}
