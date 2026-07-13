import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import type { Column } from '@tanstack/react-table'
import { cn } from '@/lib/utils'

type DataTableColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>
  title: string
  className?: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) return <span className={className}>{title}</span>

  const sorted = column.getIsSorted()
  const SortIcon = sorted === 'asc' ? ArrowUp : sorted === 'desc' ? ArrowDown : ArrowUpDown

  return (
    <button
      className={cn(
        '-ml-2 inline-flex h-8 items-center gap-1.5 rounded-md px-2 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200',
        className,
      )}
      type="button"
      onClick={() => column.toggleSorting(sorted === 'asc')}
    >
      {title}
      <SortIcon className="h-3 w-3 text-slate-400" aria-hidden="true" />
    </button>
  )
}
