import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Play, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { testimonials } from '../_data/testimonials'

export function SuccessStoriesSection() {
  const railRef = useRef<HTMLDivElement>(null)

  const moveCarousel = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    rail.scrollBy({
      left: rail.clientWidth * 0.78 * direction,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="marketing-section stories-section" id="stories">
      <SectionShell>
        <div className="stories-heading-row">
          <SectionHeading
            align="left"
            eyebrow="Success stories"
            title="Better process looks different for every trader."
            description="A few examples of how focused tools can turn reflection into measurable progress."
          />
          <div className="carousel-arrows" aria-label="Success story controls">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous stories">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Next stories">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="stories-rail" ref={railRef}>
          {testimonials.map((story) => (
            <article className={`story-card story-card--${story.tone}`} key={story.name}>
              <div className="story-visual">
                <span className="story-initials">{story.initials}</span>
                <span className="story-play" aria-hidden="true">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <div className="story-result">
                  <span>Measured result</span>
                  <strong>{story.result}</strong>
                </div>
              </div>
              <div className="story-content">
                <div className="flex items-center justify-between">
                  <Quote className="h-5 w-5 text-blue-200" aria-hidden="true" />
                  <div className="flex gap-0.5 text-amber-400" aria-label="Five star story">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star className="h-3 w-3 fill-current" key={star} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote>{story.quote}</blockquote>
                <div className="story-person">
                  <span>{story.initials}</span>
                  <div>
                    <strong>{story.name}</strong>
                    <p>{story.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  )
}

