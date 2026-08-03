import { Reveal } from '@/components/site/Reveal'
import { trustSignals } from '@/lib/content'

export function TrustStrip() {
  return (
    <section
      id="vertrouwen"
      className="relative border-b border-vv-line bg-vv-void"
      aria-label="Vertrouwen"
    >
      <div className="vv-shell py-10 lg:py-12">
        <Reveal>
          <ul className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-10 sm:gap-y-6 lg:flex-nowrap">
            {trustSignals.map((item, i) => (
              <li
                key={item.label}
                className="flex items-baseline gap-4 sm:max-w-[14rem] lg:max-w-none"
              >
                {i > 0 ? (
                  <span
                    className="mr-2 hidden h-3 w-px bg-vv-line-strong lg:block"
                    aria-hidden
                  />
                ) : null}
                <div>
                  <p className="text-[0.98rem] font-semibold tracking-tight text-vv-snow lg:text-[1.05rem]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-vv-fog">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
