import { ArrowUpRight } from 'lucide-react'
import { announcement } from '../_data/marketing-content'

export function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <a href={announcement.href} className="announcement-track">
        <span className="announcement-pill">{announcement.eyebrow}</span>
        <span className="whitespace-nowrap font-medium">{announcement.message}</span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap font-bold text-white">
          {announcement.linkLabel}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </a>
    </aside>
  )
}

