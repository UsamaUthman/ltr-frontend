import type { Table } from '@tanstack/react-table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DataTableSearch } from './data-table-search'

export type DataTableFilter = {
  columnId: string
  label: string
  options: Array<{ label: string; value: string }>
}

type DataTableToolbarProps<TData> = {
  table: Table<TData>
  searchPlaceholder?: string
  filters?: DataTableFilter[]
  previewLabel?: string
}

export function DataTableToolbar<TData>({
  table,
  searchPlaceholder,
  filters = [],
  previewLabel,
}: DataTableToolbarProps<TData>) {
  const filteredCount = table.getFilteredRowModel().rows.length

  return (
    <div className="flex flex-col gap-2.5 border-b border-slate-200 bg-white px-3.5 py-2.5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-bold text-slate-800">{previewLabel ?? 'Records'}</p>
        <p className="mt-0.5 text-[0.6875rem] text-slate-500">
          {filteredCount} {filteredCount === 1 ? 'record' : 'records'} shown
        </p>
      </div>

      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center md:justify-end">
        <DataTableSearch table={table} placeholder={searchPlaceholder} />
        {filters.map((filter) => {
          const column = table.getColumn(filter.columnId)
          if (!column) return null
          const value = String(column.getFilterValue() ?? 'all')

          return (
            <Select
              key={filter.columnId}
              value={value}
              onValueChange={(nextValue) => column.setFilterValue(nextValue === 'all' ? undefined : nextValue)}
            >
              <SelectTrigger className="w-full sm:w-36" aria-label={filter.label}>
                <SelectValue placeholder={filter.label} />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="all">{filter.label}</SelectItem>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        })}
      </div>
    </div>
  )
}
