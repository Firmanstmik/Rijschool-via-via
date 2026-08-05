import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home } from '@/lib/content'

export function PersonalLearning() {
  const { personal } = home

  return (
    <section
      id="aanpak"
      className="vv-approach"
      aria-labelledby="personal-heading"
    >
      <div className="vv-approach__hero">
        <img
          src={personal.heroImage}
          alt={personal.heroAlt}
          className="vv-approach__hero-img"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <div className="vv-approach__hero-shade" aria-hidden />

        <div className="vv-shell vv-approach__hero-copy">
          <Reveal>
            <p className="vv-approach__eyebrow">{personal.eyebrow}</p>
            <h2 id="personal-heading" className="vv-approach__title">
              {personal.title}
            </h2>
            <p className="vv-approach__subtitle">{personal.subtitle}</p>
            <p className="vv-approach__lead">{personal.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="vv-shell vv-approach__body">
        <RevealStagger className="vv-approach__notes" delayChildren={0.1}>
          {personal.pillars.map((pillar) => (
            <RevealItem key={pillar.id}>
              <article className="vv-approach-note">
                <div className="vv-approach-note__media">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    loading="lazy"
                    width={640}
                    height={400}
                  />
                </div>
                <div className="vv-approach-note__copy">
                  <p className="vv-approach-note__num" aria-hidden>
                    {pillar.num}
                    <span className="vv-approach-note__rule" />
                  </p>
                  <h3 className="vv-approach-note__title">{pillar.title}</h3>
                  <p className="vv-approach-note__body">{pillar.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="vv-approach__closing" delay={0.2}>
          <p className="vv-approach__closing-text">{personal.closing}</p>
          <p className="vv-approach__signature">{personal.signature}</p>
        </Reveal>
      </div>
    </section>
  )
}
