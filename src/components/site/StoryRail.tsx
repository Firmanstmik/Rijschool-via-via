import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

const CHAPTERS = [
  { id: 'top', label: 'Begin' },
  { id: 'leswagen', label: 'Methode' },
  { id: 'aanbod', label: 'Gevoel' },
  { id: 'filosofie', label: 'Filosofie' },
  { id: 'aanpak', label: 'Persoonlijk' },
  { id: 'ervaring', label: 'Overtuiging' },
  { id: 'reviews', label: 'Stemmen' },
  { id: 'proefles', label: 'Kennismaking' },
] as const

/**
 * Quiet story rail — champagne progress + living chapter whisper.
 * Keeps the homepage feeling like one continuous editorial film.
 */
export function StoryRail() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  })
  const [active, setActive] = useState<string>(CHAPTERS[0].label)

  useEffect(() => {
    if (reduce) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible?.target?.id) return

        const match = CHAPTERS.find((chapter) => chapter.id === visible.target.id)
        if (match) setActive(match.label)
      },
      {
        root: null,
        threshold: [0.18, 0.35, 0.55],
        rootMargin: '-18% 0px -42% 0px',
      },
    )

    CHAPTERS.forEach((chapter) => {
      const el = document.getElementById(chapter.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [reduce])

  if (reduce) return null

  return (
    <div className="vv-story-rail" aria-hidden>
      <motion.div className="vv-story-rail__bar" style={{ scaleX: progress }} />
      <p className="vv-story-rail__whisper" key={active}>
        {active}
      </p>
    </div>
  )
}
