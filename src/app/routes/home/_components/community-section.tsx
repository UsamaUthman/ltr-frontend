import { ArrowRight, Hash, MessageCircleMore, UsersRound } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { communityHighlights, communityMessages } from '../_data/landing-content'

export function CommunitySection() {
  return (
    <section className="marketing-section community-section" id="community">
      <SectionShell className="grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="A community with purpose"
            title="Good conversations make the work less lonely."
            description="Learn alongside traders who care about preparation, honest review, and steady progress—not noise or trade calls."
          />
          <div className="community-highlights">
            {communityHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <span key={highlight.label}>
                  <Icon className="h-4 w-4" aria-hidden="true" /> {highlight.label}
                </span>
              )
            })}
          </div>
          <a className={`${buttonStyles.primary} mt-8`} href="/products/live-stream">
            Explore Live Stream <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="community-window" aria-label="LTR Trade community conversation preview">
          <div className="community-sidebar">
            <div className="community-server-mark">LA</div>
            <span className="is-active"><MessageCircleMore className="h-4 w-4" /></span>
            <span><UsersRound className="h-4 w-4" /></span>
          </div>
          <div className="community-main">
            <div className="community-topbar">
              <div>
                <Hash className="h-4 w-4" aria-hidden="true" />
                <strong>daily-review</strong>
              </div>
              <span>1,248 members</span>
            </div>
            <div className="community-messages">
              {communityMessages.map((message) => (
                <article key={message.name}>
                  <span className="community-avatar" style={{ background: message.color }}>
                    {message.name.charAt(0)}
                  </span>
                  <div>
                    <div className="community-message-meta">
                      <strong>{message.name}</strong>
                      <span>{message.role}</span>
                      <time>{message.time}</time>
                    </div>
                    <p>{message.message}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="community-input">Share a useful observation…</div>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}

