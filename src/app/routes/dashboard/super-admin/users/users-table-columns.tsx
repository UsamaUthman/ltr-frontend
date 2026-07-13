import type { ColumnDef } from '@tanstack/react-table'
import {
  DataTableColumnHeader,
  DataTableRowActions,
  type DataTableFilter,
  type DataTableRowAction,
} from '@/components/data-table'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/lib/get-initials'
import type { DashboardDemoUser } from '../../_data/dashboard-demo-data'

const userRowActions: DataTableRowAction<DashboardDemoUser>[] = [
  {
    id: 'copy-email',
    label: 'Copy email',
    onSelect: (user) => {
      void navigator.clipboard?.writeText(user.email)
    },
  },
  {
    id: 'view-details',
    label: 'View details (API pending)',
    disabled: true,
    separatorBefore: true,
  },
]

const statusTone = {
  Active: 'success',
  Pending: 'warning',
  Inactive: 'neutral',
} as const

export const usersTableFilters: DataTableFilter[] = [
  {
    columnId: 'status',
    label: 'All statuses',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Pending', value: 'Pending' },
      { label: 'Inactive', value: 'Inactive' },
    ],
  },
]

export const usersTableColumns: ColumnDef<DashboardDemoUser>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-2.5">
        <Avatar className="h-8 w-8 border border-slate-200">
          <AvatarImage src={row.original.avatarUrl} alt={row.original.name} />
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <strong className="text-xs font-bold text-slate-700">{row.original.name}</strong>
      </span>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: 'type',
    header: 'Role / Type',
    cell: ({ row }) => (
      <Badge tone={row.original.type === 'Super Admin' ? 'info' : 'neutral'}>
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: 'plan',
    header: 'Plan',
    cell: ({ row }) => (
      <Badge tone={row.original.plan === 'Free' ? 'neutral' : 'info'}>{row.original.plan}</Badge>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    filterFn: 'equalsString',
    cell: ({ row }) => <Badge tone={statusTone[row.original.status]}>{row.original.status}</Badge>,
  },
  {
    id: 'joinedDate',
    accessorFn: (row) => new Date(row.joinedDate).getTime(),
    header: ({ column }) => <DataTableColumnHeader column={column} title="Joined date" />,
    cell: ({ row }) => row.original.joinedDate,
  },
  {
    accessorKey: 'lastActive',
    header: 'Last active',
  },
  {
    id: 'actions',
    enableSorting: false,
    enableGlobalFilter: false,
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => (
      <DataTableRowActions
        row={row.original}
        actions={userRowActions}
        label={`Actions for ${row.original.name}`}
      />
    ),
  },
]
