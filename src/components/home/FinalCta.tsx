import { ArrowRight, CalendarBlank, EnvelopeSimple, Phone } from '@phosphor-icons/react'
import { Reveal } from '@/components/site/Reveal'
import { SectionEyebrow } from '@/components/site/SectionEyebrow'
import { brand, home, images } from '@/lib/content'

export function FinalCta() {
  const { cta } = home

  return (
    <section
      id="proefles"
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <img
          src={images.cta}
          alt=""
          className="vv-grade h-full w-full object-cover opacity-28"
          loading="lazy"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(5,6,8,0.94) 0%, rgba(5,6,8,0.82) 55%, rgba(5,6,8,0.7) 100%)',
          }}
          aria-hidden
        />
        <div className="vv-grain" aria-hidden />
      </div>

      <div className="vv-shell relative vv-chapter--lg">
        <div className="grid items-end gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow icon={CalendarBlank} className="mb-6 md:mb-7">
              {cta.eyebrow}
            </SectionEyebrow>
            <h2
              id="cta-heading"
              className="vv-display text-[length:var(--vv-text-display)] text-vv-snow"
            >
              {cta.titleLine1}
              <br />
              {cta.titleLine2}
            </h2>
            <p className="mt-6 max-w-md vv-body md:mt-8">{cta.body}</p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <div className="flex flex-col gap-3.5">
              <a href={brand.phoneHref} className="vv-btn vv-btn--primary">
                <Phone size={16} weight="light" aria-hidden />
                <span>Bel {brand.phone}</span>
                <ArrowRight size={16} weight="light" aria-hidden />
              </a>
              <a href={brand.emailHref} className="vv-btn vv-btn--ghost">
                <EnvelopeSimple size={16} weight="light" aria-hidden />
                <span>Mail {brand.email}</span>
              </a>
            </div>
            <p className="mt-8 text-[0.65rem] uppercase tracking-[0.22em] text-vv-fog md:mt-10">
              {cta.proof}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
