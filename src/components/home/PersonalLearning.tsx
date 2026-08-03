import { motion, useReducedMotion } from 'framer-motion'
import {
  CheckCircle,
  ClipboardText,
  SealCheck,
  UserFocus,
} from '@phosphor-icons/react'
import { Reveal } from '@/components/site/Reveal'
import { brand, home, images, teachingGoals } from '@/lib/content'
import { cn } from '@/lib/cn'

const pillarIcons = {
  instructor: UserFocus,
  plan: ClipboardText,
} as const

export function PersonalLearning() {
  const { personal } = home
  const reduce = useReducedMotion()
  const [left, right] = personal.pillars

  return (
    <section
      id="aanpak"
      className="vv-approach"
      aria-labelledby="personal-heading"
    >
      <div className="vv-approach__bg" aria-hidden>
        <img
          src={images.approach}
          alt=""
          className="vv-approach__bg-img"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
        />
        <div className="vv-approach__bg-shade" />
        <div className="vv-approach__bg-glow" />
      </div>

      <div className="vv-shell vv-approach__shell">
        <Reveal className="vv-approach__header">
          <p className="vv-approach__eyebrow">{personal.eyebrow}</p>
          <h2 id="personal-heading" className="vv-approach__title">
            {personal.title}
          </h2>
          <p className="vv-approach__lead">{personal.intro}</p>
        </Reveal>

        <div className="vv-approach__stage">
          <svg
            className="vv-approach__schematic"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="vv-approach__wire"
              d="M 18 42 H 34 V 50 H 42"
            />
            <path
              className="vv-approach__wire"
              d="M 82 42 H 66 V 50 H 58"
            />
            <path
              className="vv-approach__wire vv-approach__wire--soft"
              d="M 18 58 H 30 V 72"
            />
            <path
              className="vv-approach__wire vv-approach__wire--soft"
              d="M 82 58 H 70 V 72"
            />
          </svg>

          <Reveal className="vv-approach__rail vv-approach__rail--left" delay={0.08}>
            <PillarCard
              title={left.title}
              body={left.body}
              icon={pillarIcons[left.id as keyof typeof pillarIcons]}
              side="left"
            />
          </Reveal>

          <Reveal className="vv-approach__core" delay={0.12}>
            <div className="vv-approach__core-glow" aria-hidden />
            <motion.div
              className="vv-approach__core-product"
              animate={
                reduce
                  ? undefined
                  : { y: [0, -10, 0] }
              }
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={images.heroCutout}
                alt="Audi Q3 Sportback leswagen van Rijschool Via Via"
                className="vv-approach__core-img"
                width={1181}
                height={534}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="vv-approach__float"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            >
              <span className="vv-approach__float-icon" aria-hidden>
                <SealCheck size={22} weight="duotone" />
              </span>
              <span className="vv-approach__float-copy">
                <span className="vv-approach__float-title">
                  {personal.floatBadge.title}
                </span>
                <span className="vv-approach__float-detail">
                  {personal.floatBadge.detail}
                </span>
              </span>
            </motion.div>
          </Reveal>

          <Reveal className="vv-approach__rail vv-approach__rail--right" delay={0.16}>
            <PillarCard
              title={right.title}
              body={right.body}
              icon={pillarIcons[right.id as keyof typeof pillarIcons]}
              side="right"
            />
          </Reveal>
        </div>

        <div className="vv-approach__footer">
          <Reveal className="vv-approach__features" delay={0.18}>
            <p className="vv-approach__features-label">{personal.featuresLabel}</p>
            <ul className="vv-approach__features-list">
              {teachingGoals.map((goal) => (
                <li key={goal}>
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="vv-approach__features-icon"
                    aria-hidden
                  />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="vv-approach__cta-wrap" delay={0.22}>
            <a href="#proefles" className="vv-approach__cta">
              <span className="vv-approach__cta-dot" aria-hidden />
              <span>{personal.cta}</span>
            </a>
            <a href={brand.phoneHref} className="vv-approach__cta-sub">
              {brand.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  title,
  body,
  icon: Icon,
  side,
}: {
  title: string
  body: string
  icon: typeof UserFocus
  side: 'left' | 'right'
}) {
  return (
    <article className={cn('vv-approach__card', `vv-approach__card--${side}`)}>
      <div className="vv-approach__card-icon" aria-hidden>
        <Icon size={28} weight="duotone" />
      </div>
      <h3 className="vv-approach__card-title">{title}</h3>
      <p className="vv-approach__card-body">{body}</p>
    </article>
  )
}
