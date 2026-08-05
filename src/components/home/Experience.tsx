import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { Reveal } from '@/components/site/Reveal'
import { home, images } from '@/lib/content'
import { easeLuxury } from '@/lib/motion'

export function Experience() {
  const { experience } = home
  const reduce = useReducedMotion()

  return (
    <section
      id="ervaring"
      className="vv-velocity"
      aria-labelledby="experience-heading"
    >
      <div className="vv-velocity__bg" aria-hidden>
        <img
          src={images.instructor}
          alt=""
          className="vv-velocity__bg-img"
          width={1200}
          height={1600}
          loading="lazy"
          decoding="async"
        />
        <div className="vv-velocity__bg-shade" />
      </div>

      <div className="vv-velocity__hud" aria-hidden>
        <span className="vv-velocity__ring" />
        <span className="vv-velocity__grid" />
        <span className="vv-velocity__nodes" />
      </div>

      <div className="vv-shell vv-velocity__shell">
        <div className="vv-velocity__layout">
          <Reveal className="vv-velocity__stat-wrap" delay={0.06}>
            <article className="vv-velocity__stat">
              <div className="vv-velocity__stat-sheen" aria-hidden />
              <p className="vv-velocity__stat-label">{experience.stat.label}</p>
              <ChartSpark reduce={!!reduce} />
              <p className="vv-velocity__stat-value">{experience.stat.value}</p>
              <p className="vv-velocity__stat-detail">{experience.stat.detail}</p>
            </article>
          </Reveal>

          <Reveal className="vv-velocity__copy" delay={0.1}>
            <p className="vv-velocity__eyebrow">{experience.eyebrow}</p>
            <h2 id="experience-heading" className="vv-velocity__title">
              {experience.titleLine1}
              <br />
              {experience.titleLine2}
            </h2>
            <p className="vv-velocity__lead">{experience.pull}</p>
            <p className="vv-velocity__body">{experience.body1}</p>
            <p className="vv-velocity__body">{experience.body2}</p>
          </Reveal>
        </div>

        <Reveal className="vv-velocity__cta-wrap" delay={0.16}>
          <a href="#proefles" className="vv-velocity__cta">
            <span>{experience.cta}</span>
            <span className="vv-velocity__cta-orb" aria-hidden>
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ChartSpark({ reduce }: { reduce: boolean }) {
  const line =
    'M4 54 C22 52 34 46 48 40 C66 32 74 38 90 26 C108 12 118 20 136 16 C154 12 166 8 188 10 C200 11 208 9 216 7'
  const area = `${line} L216 68 L4 68 Z`

  return (
    <div className="vv-velocity__chart-wrap">
      <svg
        className="vv-velocity__chart"
        viewBox="0 0 220 72"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="vv-velocity-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(243,230,212,0.42)" />
            <stop offset="45%" stopColor="rgba(185,169,148,0.16)" />
            <stop offset="100%" stopColor="rgba(185,169,148,0)" />
          </linearGradient>
          <linearGradient id="vv-velocity-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(143,122,98,0.25)" />
            <stop offset="28%" stopColor="rgba(185,169,148,0.7)" />
            <stop offset="62%" stopColor="rgba(243,230,212,1)" />
            <stop offset="100%" stopColor="rgba(185,169,148,0.75)" />
          </linearGradient>
          <filter
            id="vv-velocity-glow"
            x="-40%"
            y="-80%"
            width="180%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="vv-velocity-peak" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8ef" />
            <stop offset="45%" stopColor="#f3e6d4" />
            <stop offset="100%" stopColor="#9a8164" />
          </radialGradient>
        </defs>

        <g opacity="0.35">
          <line x1="4" y1="52" x2="216" y2="52" stroke="rgba(255,255,255,0.08)" />
          <line x1="4" y1="34" x2="216" y2="34" stroke="rgba(255,255,255,0.05)" />
          <line x1="4" y1="18" x2="216" y2="18" stroke="rgba(255,255,255,0.04)" />
        </g>

        <motion.path
          d={area}
          fill="url(#vv-velocity-fill)"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: easeLuxury }}
        />

        <motion.path
          d={line}
          stroke="url(#vv-velocity-stroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#vv-velocity-glow)"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: easeLuxury }}
        />

        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 1.35, ease: easeLuxury }}
        >
          <motion.circle
            cx="188"
            cy="10"
            r="11"
            fill="rgba(185,169,148,0.18)"
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.28, 1], opacity: [0.35, 0.15, 0.35] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '188px 10px' }}
          />
          <circle
            cx="188"
            cy="10"
            r="6.5"
            fill="none"
            stroke="rgba(243,230,212,0.45)"
            strokeWidth="1"
          />
          <circle cx="188" cy="10" r="3.4" fill="url(#vv-velocity-peak)" />
        </motion.g>
      </svg>
    </div>
  )
}
