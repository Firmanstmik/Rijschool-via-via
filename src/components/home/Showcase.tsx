import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { showcase } from '@/lib/content'
import { cn } from '@/lib/cn'

export function Showcase() {
  return (
    <section
      id="leswagen"
      className="vv-plate"
      aria-labelledby="showcase-heading"
    >
      <div className="vv-shell vv-plate__intro">
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
        <RevealStagger className="vv-plate__gallery" delayChildren={0.12}>
          {showcase.gallery.map((card, index) => (
            <RevealItem key={card.label}>
              <article
                className={cn(
                  'vv-plate-card',
                  `vv-plate-card--${card.crop}`,
                  `vv-plate-card--step-${index + 1}`,
                )}
              >
                <div className="vv-plate-card__media">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    width={720}
                    height={960}
                  />
                </div>
                <div className="vv-plate-card__body">
                  <p className="vv-plate-card__step" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="vv-plate-card__label">{card.label}</h3>
                  <p className="vv-plate-card__text">{card.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealStagger
          className="vv-plate__notes"
          delayChildren={0.35}
          staggerChildren={0.14}
        >
          {showcase.beliefs.map((belief, index) => (
            <RevealItem key={belief.id}>
              <article className="vv-plate-note">
                <p className="vv-plate-note__num" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="vv-plate-note__title">{belief.title}</h3>
                <p className="vv-plate-note__body">{belief.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <div className="vv-plate__atmosphere" aria-hidden>
        <img
          src={showcase.image}
          alt=""
          className="vv-plate__atmosphere-img"
          width={1181}
          height={534}
          loading="lazy"
        />
      </div>

      <Reveal className="vv-plate__cta-wrap" delay={0.14}>
        <a href="#aanpak" className="vv-btn vv-btn--primary vv-btn--showroom">
          <span>{showcase.cta}</span>
        </a>
      </Reveal>
    </section>
  )
}
