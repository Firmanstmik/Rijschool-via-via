import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  CarProfile,
  SealCheck,
  CalendarBlank,
  SteeringWheel,
} from '@phosphor-icons/react'
import { Reveal } from '@/components/site/Reveal'
import { SectionEyebrow } from '@/components/site/SectionEyebrow'
import { home, images } from '@/lib/content'

const stats = [
  { icon: CarProfile, label: 'Leswagen', value: 'Audi Q3 Sportback' },
  { icon: SealCheck, label: 'Methode', value: 'RIS gecertificeerd' },
  { icon: CalendarBlank, label: 'Beschikbaar', value: '7 dagen per week' },
] as const

export function Craftsmanship() {
  const { craft } = home
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section
      id="vakmanschap"
      ref={ref}
      className="relative min-h-[min(88svh,920px)] overflow-hidden bg-vv-void lg:min-h-[92svh]"
      aria-labelledby="craft-heading"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y }}
      >
        <img
          src={images.driving}
          alt=""
          className="vv-grade h-full w-full scale-105 object-cover object-[center_48%]"
          loading="lazy"
          width={1600}
          height={1100}
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,6,8,0.92) 0%, rgba(5,6,8,0.7) 42%, rgba(5,6,8,0.25) 100%), linear-gradient(180deg, rgba(5,6,8,0.35) 0%, transparent 30%, rgba(5,6,8,0.75) 100%)',
        }}
        aria-hidden
      />
      <div className="vv-grain" aria-hidden />

      <div className="relative z-10 flex min-h-[min(88svh,920px)] items-end py-16 pb-20 md:py-20 lg:min-h-[92svh] lg:items-center lg:py-28">
        <div className="vv-shell">
          <Reveal className="max-w-xl">
            <SectionEyebrow icon={SteeringWheel} className="mb-6 md:mb-8">
              {craft.eyebrow}
            </SectionEyebrow>
            <h2
              id="craft-heading"
              className="vv-display text-[length:var(--vv-text-display)] text-vv-snow"
            >
              {craft.titleLine1}
              <br />
              {craft.titleLine2}
            </h2>
            <div className="mt-8 space-y-5 vv-body max-w-md md:mt-9">
              <p>{craft.body1}</p>
              <p>{craft.body2}</p>
            </div>

            <p className="mt-8 text-[0.9rem] leading-relaxed text-vv-platinum md:mt-10">
              {craft.callout}
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 md:mt-12 md:gap-x-14">
              {stats.map(({ icon: Glyph, label, value }) => (
                <div key={label}>
                  <dt className="mb-2 flex items-center gap-2">
                    <Glyph
                      size={16}
                      weight="light"
                      className="text-vv-champagne"
                      aria-hidden
                    />
                    <span className="vv-eyebrow">{label}</span>
                  </dt>
                  <dd className="text-lg font-semibold text-vv-snow">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
