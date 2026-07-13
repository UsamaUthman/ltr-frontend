import { DataTable } from '@/components/data-table'
import { superAdminUsersDemo } from '../../_data/dashboard-demo-data'
import { DashboardPageHeader } from '../../_components/dashboard-page-header'
import { usersTableColumns, usersTableFilters } from './users-table-columns'

export function SuperAdminUsersRoute() {
  return (
    <div className="dashboard-page">
      <DashboardPageHeader
        eyebrow="Super Admin workspace"
        title="Users"
        description="A scalable preview directory using reusable table, filter, pagination, and menu components."
      />

      <DataTable
        columns={usersTableColumns}
        data={superAdminUsersDemo}
        getRowId={(user) => user.id}
        searchPlaceholder="Search users by name or email..."
        filters={usersTableFilters}
        previewLabel="Preview users"
        initialPageSize={5}
        pageSizeOptions={[5, 10, 20]}
        emptyTitle="No preview users match"
        emptyDescription="Try a different name, email, or status filter."
        tableClassName="min-w-[72rem]"
      />
    </div>
  )
}
