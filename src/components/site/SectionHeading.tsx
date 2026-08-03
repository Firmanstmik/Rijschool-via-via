import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn('vv-eyebrow mb-5', light && 'text-vv-steel/90')}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'vv-display text-[length:var(--vv-text-h2)]',
          light ? 'text-vv-void' : 'text-vv-snow',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-6 max-w-2xl text-[0.98rem] leading-[1.75]',
            align === 'center' && 'mx-auto',
            light ? 'text-vv-void/70' : 'text-vv-mist',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
