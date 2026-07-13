import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { cn } from '@/lib/utils'
import { faqItems } from '../_data/faq-items'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="marketing-section faq-section" id="faq">
      <SectionShell className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div className="faq-intro">
          <span className="faq-intro-icon">
            <MessageCircleQuestion className="h-6 w-6" aria-hidden="true" />
          </span>
          <SectionHeading
            align="left"
            eyebrow="Frequently asked questions"
            title="The useful details, without the fine-print maze."
            description="This Phase 1 experience uses static content, but these answers show the intended product direction clearly."
          />
          <p className="faq-contact">
            Still curious? <a href="mailto:hello@ltralpha.com">Talk to our team.</a>
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const open = index === openIndex
            const answerId = `faq-answer-${index}`
            return (
              <article className={cn('faq-item', open && 'faq-item--open')} key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" id={answerId} role="region">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </SectionShell>
    </section>
  )
}

