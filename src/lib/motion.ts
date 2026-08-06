export const easeLuxury = [0.22, 1, 0.36, 1] as const
export const easeOutExpo = [0.16, 1, 0.3, 1] as const

/** Quiet editorial rise — for chapter text */
export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.15, ease: easeLuxury },
  },
}

export const fadeIn = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: easeLuxury },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.975, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: easeLuxury },
  },
}

export const fadeSlide = {
  hidden: { opacity: 0, x: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: easeLuxury },
  },
}

/** Soft chapter arrival for whole sections */
export const chapterIn = {
  hidden: { opacity: 0.35, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, ease: easeLuxury },
  },
}
