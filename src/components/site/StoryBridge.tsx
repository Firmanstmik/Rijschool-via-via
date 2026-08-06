import { Reveal } from '@/components/site/Reveal'

/**
 * Soft narrative seam between chapters.
 * Makes the scroll feel like one continuous Via Via story.
 */
export function StoryBridge({ line }: { line: string }) {
  return (
    <div className="vv-story-bridge" aria-hidden>
      <Reveal className="vv-story-bridge__inner" delay={0.04}>
        <p className="vv-story-bridge__line">{line}</p>
      </Reveal>
    </div>
  )
}
