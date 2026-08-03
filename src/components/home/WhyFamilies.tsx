import { UsersThree } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { SectionEyebrow } from '@/components/site/SectionEyebrow'
import { home } from '@/lib/content'

export function WhyFamilies() {
  const { why } = home

  return (
    <section
      id="waarom"
      className="vv-chapter--lg bg-vv-void"
      aria-labelledby="families-heading"
    >
      <div className="vv-shell">
        <Reveal className="mb-12 max-w-xl lg:mb-16">
          <SectionEyebrow icon={UsersThree} className="mb-6 md:mb-7">
            {why.eyebrow}
          </SectionEyebrow>
          <h2
            id="families-heading"
            className="vv-display text-[length:var(--vv-text-h2)] text-vv-snow"
          >
            {why.title}
            <br />
            {why.titleLine2}
          </h2>
        </Reveal>

        <RevealStagger className="space-y-8 md:space-y-10 lg:space-y-12">
          {why.items.map((item) => (
            <RevealItem key={item.num}>
              <article className="group grid gap-4 md:gap-6 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                <p className="text-sm font-semibold tracking-[0.22em] text-vv-champagne lg:col-span-1">
                  {item.num}
                </p>
                <h3 className="vv-heading text-[clamp(1.1rem,2.2vw,1.55rem)] text-vv-snow transition-colors duration-500 group-hover:text-vv-platinum lg:col-span-5">
                  {item.title}
                </h3>
                <p className="vv-body max-w-md lg:col-span-5 lg:col-start-8">
                  {item.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
