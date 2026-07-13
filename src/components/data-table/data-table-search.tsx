import { Search } from 'lucide-react'
import type { Table } from '@tanstack/react-table'

type DataTableSearchProps<TData> = {
  table: Table<TData>
  placeholder?: string
}

export function DataTableSearch<TData>({
  table,
  placeholder = 'Search records...',
}: DataTableSearchProps<TData>) {
  const value = String(table.getState().globalFilter ?? '')

  return (
    <label className="relative block min-w-0 flex-1 sm:w-72 sm:flex-none">
      <span className="sr-only">{placeholder}</span>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        className="min-h-9 w-full rounded-lg border border-slate-200 bg-white py-2 pr-3 pl-9 text-xs text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-3 focus:ring-blue-100"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
      />
    </label>
  )
}
