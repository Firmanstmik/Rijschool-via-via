import {
  useCallback,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { showcase } from '@/lib/content'
import { BrandLogo } from '@/components/site/BrandLogo'
import { cn } from '@/lib/cn'

type Hotspot = (typeof showcase.hotspots)[number]

type LeaderLine = {
  id: string
  d: string
}

export function Showcase() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<string>(showcase.hotspots[0].id)
  const lineId = useId()
  const diagramRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const labelRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [leaders, setLeaders] = useState<LeaderLine[]>([])

  const leftSpots = showcase.hotspots.filter((s) => s.side === 'left')
  const rightSpots = showcase.hotspots.filter((s) => s.side === 'right')

  const updateLeaders = useCallback(() => {
    const diagram = diagramRef.current
    const car = carRef.current
    if (!diagram || !car) return

    if (!window.matchMedia('(min-width: 900px)').matches) {
      setLeaders([])
      return
    }

    const d = diagram.getBoundingClientRect()
    const c = car.getBoundingClientRect()
    if (d.width < 8 || c.width < 8) return

    const toPct = (left: number, top: number) => ({
      x: ((left - d.left) / d.width) * 100,
      y: ((top - d.top) / d.height) * 100,
    })

    setLeaders(
      showcase.hotspots.map((spot) => {
        const pin = toPct(
          c.left + (spot.x / 100) * c.width,
          c.top + (spot.y / 100) * c.height,
        )
        const edgeX =
          spot.side === 'left'
            ? ((c.left - d.left) / d.width) * 100 - 0.4
            : ((c.right - d.left) / d.width) * 100 + 0.4

        const labelEl = labelRefs.current[spot.id]
        let endX: number
        let endY: number
        if (labelEl) {
          const l = labelEl.getBoundingClientRect()
          endX =
            spot.side === 'left'
              ? ((l.right - d.left) / d.width) * 100
              : ((l.left - d.left) / d.width) * 100
          endY = ((l.top + l.height / 2 - d.top) / d.height) * 100
        } else {
          endX = spot.side === 'left' ? 1.5 : 98.5
          endY = pin.y
        }

        const midX = (edgeX + endX) / 2
        const dPath = `M ${pin.x.toFixed(2)} ${pin.y.toFixed(2)} L ${edgeX.toFixed(2)} ${pin.y.toFixed(2)} L ${midX.toFixed(2)} ${endY.toFixed(2)} L ${endX.toFixed(2)} ${endY.toFixed(2)}`

        return { id: spot.id, d: dPath }
      }),
    )
  }, [])

  useLayoutEffect(() => {
    updateLeaders()
    const ro = new ResizeObserver(updateLeaders)
    if (diagramRef.current) ro.observe(diagramRef.current)
    if (carRef.current) ro.observe(carRef.current)
    window.addEventListener('resize', updateLeaders)
    const img = carRef.current?.querySelector('img')
    img?.addEventListener('load', updateLeaders)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateLeaders)
      img?.removeEventListener('load', updateLeaders)
    }
  }, [updateLeaders])

  return (
    <section
      id="leswagen"
      className="vv-plate"
      aria-labelledby="showcase-heading"
    >
      <div className="vv-shell vv-plate__intro">
        <Reveal className="vv-plate__brand">
          <BrandLogo className="vv-plate__logo" compact />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="vv-plate__kicker">{showcase.panelTitle}</p>
          <h2 id="showcase-heading" className="vv-plate__title">
            {showcase.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="vv-plate__lead">{showcase.lead}</p>
        </Reveal>
      </div>

      <div className="vv-shell">
        <RevealStagger className="vv-plate__gallery">
          {showcase.gallery.map((card) => (
            <RevealItem key={card.label}>
              <article className="vv-plate-card">
                <div className="vv-plate-card__media">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    width={720}
                    height={960}
                  />
                </div>
                <div className="vv-plate-card__body">
                  <h3 className="vv-plate-card__label">{card.label}</h3>
                  <p className="vv-plate-card__text">{card.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <Reveal className="vv-shell vv-hotspot" delay={0.08}>
        <div className="vv-hotspot__diagram" ref={diagramRef}>
          <svg
            className="vv-hotspot__leaders"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient
                id={`${lineId}-stroke`}
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="rgba(185,169,148,0.08)" />
                <stop offset="35%" stopColor="rgba(226,212,188,0.75)" />
                <stop offset="65%" stopColor="rgba(226,212,188,0.75)" />
                <stop offset="100%" stopColor="rgba(185,169,148,0.08)" />
              </linearGradient>
            </defs>
            {leaders.map((line) => (
              <path
                key={line.id}
                d={line.d}
                stroke={`url(#${lineId}-stroke)`}
                className={cn(
                  'vv-hotspot__leader',
                  active === line.id && 'is-active',
                )}
              />
            ))}
          </svg>

          <div className="vv-hotspot__rail vv-hotspot__rail--left">
            {leftSpots.map((spot) => (
              <HotspotLabel
                key={`${spot.id}-label`}
                spot={spot}
                active={active === spot.id}
                onActivate={() => setActive(spot.id)}
                labelRef={(el) => {
                  labelRefs.current[spot.id] = el
                }}
              />
            ))}
          </div>

          <div className="vv-hotspot__stage">
            <div className="vv-hotspot__glow" aria-hidden />
            <div className="vv-hotspot__floor" aria-hidden />

            <div className="vv-hotspot__car" ref={carRef}>
              <img
                src={showcase.image}
                alt="Audi Q3 Sportback leswagen van Rijschool Via Via"
                className="vv-hotspot__img"
                width={1181}
                height={534}
                loading="lazy"
              />

              {showcase.hotspots.map((spot) => (
                <HotspotPin
                  key={spot.id}
                  spot={spot}
                  active={active === spot.id}
                  reduce={!!reduce}
                  onActivate={() => setActive(spot.id)}
                />
              ))}
            </div>
          </div>

          <div className="vv-hotspot__rail vv-hotspot__rail--right">
            {rightSpots.map((spot) => (
              <HotspotLabel
                key={`${spot.id}-label`}
                spot={spot}
                active={active === spot.id}
                onActivate={() => setActive(spot.id)}
                labelRef={(el) => {
                  labelRefs.current[spot.id] = el
                }}
              />
            ))}
          </div>
        </div>

        <div className="vv-hotspot__mobile">
          {showcase.hotspots.map((spot) => {
            const isActive = active === spot.id
            return (
              <button
                key={`${spot.id}-m`}
                type="button"
                className={cn('vv-hotspot__chip', isActive && 'is-active')}
                onClick={() => setActive(spot.id)}
                aria-pressed={isActive}
              >
                <span className="vv-hotspot__chip-dot" aria-hidden />
                <span className="vv-hotspot__chip-copy">
                  <span className="vv-hotspot__chip-title">{spot.title}</span>
                  <span className="vv-hotspot__chip-detail">{spot.detail}</span>
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="vv-plate__cta-wrap" delay={0.14}>
        <a href="#aanbod" className="vv-btn vv-btn--primary vv-btn--showroom">
          <span>{showcase.cta}</span>
        </a>
      </Reveal>
    </section>
  )
}

function HotspotPin({
  spot,
  active,
  reduce,
  onActivate,
}: {
  spot: Hotspot
  active: boolean
  reduce: boolean
  onActivate: () => void
}) {
  return (
    <button
      type="button"
      className={cn('vv-hotspot__pin', active && 'is-active')}
      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
      aria-label={spot.title}
      aria-pressed={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <span className="vv-hotspot__pin-ring" aria-hidden />
      <span className="vv-hotspot__pin-core" aria-hidden />
      {!reduce ? (
        <motion.span
          className="vv-hotspot__pin-pulse"
          aria-hidden
          animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        />
      ) : null}
    </button>
  )
}

function HotspotLabel({
  spot,
  active,
  onActivate,
  labelRef,
}: {
  spot: Hotspot
  active: boolean
  onActivate: () => void
  labelRef: (el: HTMLButtonElement | null) => void
}) {
  return (
    <button
      ref={labelRef}
      type="button"
      className={cn(
        'vv-hotspot__label',
        `vv-hotspot__label--${spot.side}`,
        active && 'is-active',
      )}
      style={{ top: `${spot.y}%` }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <span className="vv-hotspot__label-title">{spot.title}</span>
      <span className="vv-hotspot__label-detail">{spot.detail}</span>
    </button>
  )
}
