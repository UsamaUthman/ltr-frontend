import { ArrowRight, Instagram, Linkedin, Send, Youtube } from 'lucide-react'
import { BrandMark } from '@/components/brand/brand-mark'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { APP_METADATA } from '@/config/app-metadata'
import { footerGroups } from '../_data/marketing-content'

export function MarketingFooter() {
  return (
    <footer className="marketing-footer">
      <SectionShell>
        <div className="footer-cta">
          <div>
            <p className="nav-eyebrow text-cyan-300">Your next level starts here</p>
            <h2 className="mt-3 max-w-2xl text-[1.75rem] font-bold leading-[1.18] tracking-normal text-white sm:text-[2.15rem]">
              Ready to put your strategy to work?
            </h2>
          </div>
          <a className={buttonStyles.primary} href="/login">
            Choose your product <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="footer-main">
          <div className="max-w-sm">
            <a href="/" aria-label="LTR Trade home">
              <BrandMark inverse />
            </a>
            <p className="mt-5 text-sm leading-7 text-blue-100/60">
              A focused environment for traders who value process, consistency, and transparent
              opportunity.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                [Linkedin, 'LinkedIn'],
                [Instagram, 'Instagram'],
                [Youtube, 'YouTube'],
                [Send, 'Community'],
              ].map(([Icon, label]) => (
                <a className="social-link" href="/#community" aria-label={label as string} key={label as string}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-legal" id="legal">
          <p className="flex items-center gap-2">
            &copy; {new Date().getFullYear()} {APP_METADATA.name}. All rights reserved.
            <span className="footer-version">v{APP_METADATA.version}</span>
          </p>
          <p className="max-w-3xl lg:text-right">
            Trading involves significant risk. The information on this website is educational and
            does not constitute financial advice or a promise of future performance.
          </p>
        </div>
      </SectionShell>
    </footer>
  )
}
