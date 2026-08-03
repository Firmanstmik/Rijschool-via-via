import { useReducedMotion, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeLuxury, fadeSlide, fadeUp, scaleIn } from '@/lib/motion'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'scale' | 'slide'
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const hidden =
    variant === 'scale'
      ? scaleIn.hidden
      : variant === 'slide'
        ? fadeSlide.hidden
        : fadeUp.hidden

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 1.05, ease: easeLuxury, delay },
      }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -6% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.14, delayChildren: 0.1 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
