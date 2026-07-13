type DataTableEmptyStateProps = {
  title?: string
  description?: string
}

export function DataTableEmptyState({
  title = 'No records found',
  description = 'Try adjusting the search or active filters.',
}: DataTableEmptyStateProps) {
  return (
    <div className="grid min-h-52 place-content-center px-6 py-10 text-center">
      <strong className="text-sm font-bold text-slate-700">{title}</strong>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  )
}
