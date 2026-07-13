import { ArrowLeft, Construction } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BrandMark } from '@/components/brand/brand-mark'
import { buttonStyles } from '@/components/ui/button-styles'
import {
  getDashboardStartPath,
  setPreviewDashboardRole,
  type DashboardRole,
} from '../dashboard/_lib/mock-dashboard-session'

export function LoginRoute() {
  const navigate = useNavigate()

  const openPreview = (role: DashboardRole) => {
    setPreviewDashboardRole(role)
    navigate(getDashboardStartPath(role))
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[var(--marketing-ice)] px-5 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-white bg-white p-8 text-center shadow-[0_24px_80px_rgba(0,36,95,.12)] sm:p-10">
        <a className="inline-flex" href="/" aria-label="LTR Trade home">
          <BrandMark />
        </a>
        <span className="mx-auto mt-8 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[var(--marketing-blue)]">
          <Construction className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="nav-eyebrow mt-6">Coming in a later phase</p>
        <h1 className="mt-2 text-[1.75rem] font-bold leading-tight tracking-normal text-[var(--marketing-navy)] sm:text-[2rem]">
          Sign in is being prepared
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          Authentication is intentionally outside this phase. Use a demo workspace below to review
          the current dashboard shell with static preview data.
        </p>

        <div className="mt-7 border-t border-slate-100 pt-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-slate-400">
            Demo access only
          </p>
          <div className="mt-3 grid gap-2.5">
            <button
              className={`${buttonStyles.primary} w-full`}
              type="button"
              onClick={() => openPreview('SUPER_ADMIN')}
            >
              Preview Super Admin Dashboard
            </button>
            <button
              className={`${buttonStyles.secondary} w-full`}
              type="button"
              onClick={() => openPreview('CLIENT')}
            >
              Preview Client Dashboard
            </button>
          </div>
        </div>

        <a className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-[var(--marketing-blue)]" href="/">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
        </a>
      </div>
    </main>
  )
}
