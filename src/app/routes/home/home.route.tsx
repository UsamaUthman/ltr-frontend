import { Reveal } from '@/components/marketing/reveal'
import { BrokerSection } from './_components/broker-section'
import { CapitalRoadmapSection } from './_components/capital-roadmap-section'
import { CommunitySection } from './_components/community-section'
import { EducationSection } from './_components/education-section'
import { FaqSection } from './_components/faq-section'
import { HeroSection } from './_components/hero-section'
import { HowItWorksSection } from './_components/how-it-works-section'
import { MarketingFooter } from './_components/marketing-footer'
import { MarketingHeader } from './_components/marketing-header'
import { PricingSection } from './_components/pricing-section'
import { StatsStrip } from './_components/stats-strip'
import { SuccessStoriesSection } from './_components/success-stories-section'
import { TraderJourneySection } from './_components/trader-journey-section'
import { TradingConditionsSection } from './_components/trading-conditions-section'
import { ValuePropSection } from './_components/value-prop-section'

export function HomeRoute() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <MarketingHeader />
      <main>
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal delay={80}>
          <StatsStrip />
        </Reveal>
        <Reveal>
          <ValuePropSection />
        </Reveal>
        <Reveal>
          <HowItWorksSection />
        </Reveal>
        <Reveal>
          <PricingSection />
        </Reveal>
        <Reveal>
          <TraderJourneySection />
        </Reveal>
        <Reveal>
          <SuccessStoriesSection />
        </Reveal>
        <Reveal>
          <TradingConditionsSection />
        </Reveal>
        <Reveal>
          <CapitalRoadmapSection />
        </Reveal>
        <Reveal>
          <EducationSection />
        </Reveal>
        <Reveal>
          <CommunitySection />
        </Reveal>
        <Reveal>
          <BrokerSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
      </main>
      <Reveal>
        <MarketingFooter />
      </Reveal>
    </div>
  )
}
