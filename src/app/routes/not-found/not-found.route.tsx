import { ArrowLeft } from 'lucide-react'
import { BrandMark } from '@/components/brand/brand-mark'
import { buttonStyles } from '@/components/ui/button-styles'

export function NotFoundRoute() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--marketing-navy-deep)] px-5 text-center text-white">
      <div>
        <a className="inline-flex" href="/" aria-label="LTR Trade home">
          <BrandMark inverse />
        </a>
        <p className="mt-12 text-7xl font-bold tracking-normal text-cyan-300 sm:text-8xl">404</p>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">That route is off the chart</h1>
        <p className="mx-auto mt-4 max-w-md text-blue-100/60">
          The page you requested does not exist or may have moved.
        </p>
        <a className={`${buttonStyles.primary} mt-8`} href="/">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Return home
        </a>
      </div>
    </main>
  )
}
