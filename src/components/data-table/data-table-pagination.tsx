import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type DataTablePaginationProps<TData> = {
  table: Table<TData>
  pageSizeOptions?: number[]
}

const paginationButtonClass =
  'grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-100 disabled:pointer-events-none disabled:opacity-35'

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [5, 10, 20],
}: DataTablePaginationProps<TData>) {
  const pageCount = Math.max(table.getPageCount(), 1)
  const pageIndex = table.getState().pagination.pageIndex

  return (
    <div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex shrink-0 items-center justify-between gap-2 text-[0.6875rem] text-slate-500 sm:justify-start">
        <span className="whitespace-nowrap">Items per page</span>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="h-8 min-h-8 w-[4.5rem] shrink-0 px-2" aria-label="Items per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top" align="start">
            {pageSizeOptions.map((pageSize) => (
              <SelectItem key={pageSize} value={String(pageSize)}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-3 sm:ml-auto sm:justify-end">
        <span className="shrink-0 text-[0.6875rem] font-semibold whitespace-nowrap text-slate-600">
          Page {pageIndex + 1} of {pageCount}
        </span>
        <div className="flex items-center gap-1">
          <button
            className={paginationButtonClass}
            type="button"
            aria-label="Go to first page"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.firstPage()}
          >
            <ChevronsLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            className={paginationButtonClass}
            type="button"
            aria-label="Go to previous page"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            className={paginationButtonClass}
            type="button"
            aria-label="Go to next page"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            className={paginationButtonClass}
            type="button"
            aria-label="Go to last page"
            disabled={!table.getCanNextPage()}
            onClick={() => table.lastPage()}
          >
            <ChevronsRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
