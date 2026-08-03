import {
  EnvelopeSimple,
  Globe,
  Phone,
  Star,
  ThumbsUp,
} from '@phosphor-icons/react'
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/site/Reveal'
import { BrandLogo } from '@/components/site/BrandLogo'
import { brand, home, testimonials } from '@/lib/content'
import { easeLuxury } from '@/lib/motion'

const ROTATE_MS = 3500

export function Testimonials() {
  const { conviction } = home
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: false, amount: 0.28 })
  const barsInView = useInView(stageRef, { once: true, amount: 0.35 })
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)

  const slides = testimonials
  const current = slides[active] ?? slides[0]

  useEffect(() => {
    if (reduce || paused || !inView || slides.length < 2) return

    const id = window.setInterval(() => {
      setDirection(1)
      setActive((prev) => (prev + 1) % slides.length)
    }, ROTATE_MS)

    return () => window.clearInterval(id)
  }, [reduce, paused, inView, slides.length])

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="vv-praise"
      aria-labelledby="reviews-heading"
    >
      <motion.div
        className="vv-praise__glow vv-praise__glow--a"
        aria-hidden
        animate={
          reduce || !inView
            ? undefined
            : { opacity: [0.55, 1, 0.55], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="vv-praise__glow vv-praise__glow--b"
        aria-hidden
        animate={
          reduce || !inView
            ? undefined
            : { opacity: [0.45, 0.95, 0.45], scale: [1.05, 1, 1.05] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.div
        className="vv-praise__glow vv-praise__glow--c"
        aria-hidden
        animate={
          reduce || !inView
            ? undefined
            : { opacity: [0.35, 0.8, 0.35], x: [0, 24, 0] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      <div className="vv-shell vv-praise__shell">
        <Reveal className="vv-praise__brand">
          <BrandLogo className="vv-praise__logo" compact />
          <h2 id="reviews-heading" className="vv-praise__eyebrow">
            {conviction.eyebrow}
          </h2>
        </Reveal>

        <Reveal className="vv-praise__stage" delay={0.06}>
          <div
            ref={stageRef}
            className="vv-praise__carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="vv-praise__viewport" aria-live="polite">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.article
                  key={current.name + current.title}
                  className="vv-praise-card"
                  custom={direction}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, x: direction * 72, scale: 0.985 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    reduce
                      ? undefined
                      : { opacity: 0, x: direction * -56, scale: 0.985 }
                  }
                  transition={{ duration: 0.55, ease: easeLuxury }}
                >
                  <div className="vv-praise-card__top">
                    <div className="vv-praise-card__person">
                      <img
                        src={current.image}
                        alt=""
                        className="vv-praise-card__avatar"
                        width={88}
                        height={88}
                        loading="lazy"
                      />
                      <div>
                        <p className="vv-praise-card__name">{current.name}</p>
                        <p className="vv-praise-card__meta">{current.meta}</p>
                        <div
                          className="vv-praise-card__stars"
                          aria-label={`${current.rating} van 5 sterren`}
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              weight={i < current.rating ? 'fill' : 'regular'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="vv-praise-card__platform">
                      <Star size={18} weight="fill" aria-hidden />
                      <span>Via Via</span>
                    </div>
                  </div>

                  <blockquote className="vv-praise-card__quote">
                    <p className="vv-praise-card__headline">{current.title}</p>
                    <p className="vv-praise-card__text">{current.quote}</p>
                  </blockquote>

                  <motion.div
                    className="vv-praise-card__thumb"
                    aria-hidden
                    animate={
                      reduce || !inView
                        ? { rotate: -8 }
                        : {
                            y: [0, -5, 0],
                            rotate: [-8, -4, -8],
                            scale: [1, 1.04, 1],
                          }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ThumbsUp size={34} weight="fill" />
                  </motion.div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="vv-praise__dots" role="tablist" aria-label="Reviews">
              {slides.map((slide, index) => (
                <button
                  key={slide.name + slide.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Review van ${slide.name}`}
                  className={`vv-praise__dot${index === active ? ' is-active' : ''}`}
                  onClick={() => goTo(index)}
                >
                  {index === active && !reduce && inView && !paused ? (
                    <motion.span
                      key={`progress-${active}`}
                      className="vv-praise__dot-progress"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="vv-praise__summary" delay={0.12}>
          <div className="vv-praise__score">
            <p className="vv-praise__score-value">{conviction.summaryLabel}</p>
            <p className="vv-praise__score-label">{conviction.summaryTitle}</p>
            <div className="vv-praise__score-stars" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  animate={
                    barsInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.6 }
                  }
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.4,
                    ease: easeLuxury,
                  }}
                >
                  <Star size={14} weight="fill" />
                </motion.span>
              ))}
            </div>
            <p className="vv-praise__score-detail">{conviction.summaryDetail}</p>
          </div>

          <ul className="vv-praise__bars" aria-label="Sterverdeling">
            {conviction.strengths.map((item, index) => (
              <li key={item.label}>
                <span className="vv-praise__bars-label">{item.label}</span>
                <span className="vv-praise__bars-track" aria-hidden>
                  <motion.span
                    className="vv-praise__bars-fill"
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={
                      barsInView
                        ? { scaleX: item.level / 5 }
                        : { scaleX: 0 }
                    }
                    transition={{
                      delay: 0.18 + index * 0.08,
                      duration: 0.85,
                      ease: easeLuxury,
                    }}
                    style={{ transformOrigin: 'left center' }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="vv-praise__contacts" delay={0.16}>
          <a href={brand.phoneHref} className="vv-praise__contact">
            <span className="vv-praise__contact-icon" aria-hidden>
              <Phone size={16} weight="fill" />
            </span>
            <span>{brand.phone}</span>
          </a>
          <a href={brand.siteUrl} className="vv-praise__contact">
            <span className="vv-praise__contact-icon" aria-hidden>
              <Globe size={16} weight="fill" />
            </span>
            <span>rijschoolviavia.nl</span>
          </a>
          <a href={brand.emailHref} className="vv-praise__contact">
            <span className="vv-praise__contact-icon" aria-hidden>
              <EnvelopeSimple size={16} weight="fill" />
            </span>
            <span>{brand.email}</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
