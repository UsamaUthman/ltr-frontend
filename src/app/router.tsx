import { Navigate, createBrowserRouter } from 'react-router-dom'
import {
  ClientOverviewRoute,
  DashboardHomeRedirectRoute,
  DashboardProfileRoute,
  DashboardShell,
  SuperAdminOverviewRoute,
  SuperAdminUsersRoute,
} from './routes/dashboard'
import { HomeRoute } from './routes/home'
import { productLinks } from './routes/home/_data/marketing-content'
import { LoginRoute } from './routes/login'
import { NotFoundRoute } from './routes/not-found'
import { ProductDetailRoute } from './routes/products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
  },
  {
    path: '/login',
    element: <LoginRoute />,
  },
  {
    path: '/dashboard',
    element: <DashboardHomeRedirectRoute />,
  },
  {
    path: '/dashboard/client',
    element: <DashboardShell role="CLIENT" />,
    children: [
      {
        index: true,
        element: <Navigate replace to="overview" />,
      },
      {
        path: 'overview',
        element: <ClientOverviewRoute />,
      },
      {
        path: 'profile',
        element: <DashboardProfileRoute role="CLIENT" />,
      },
    ],
  },
  {
    path: '/dashboard/super-admin',
    element: <DashboardShell role="SUPER_ADMIN" />,
    children: [
      {
        index: true,
        element: <Navigate replace to="overview" />,
      },
      {
        path: 'overview',
        element: <SuperAdminOverviewRoute />,
      },
      {
        path: 'users',
        element: <SuperAdminUsersRoute />,
      },
      {
        path: 'profile',
        element: <DashboardProfileRoute role="SUPER_ADMIN" />,
      },
    ],
  },
  ...productLinks.map((product) => ({
    path: product.href,
    element: <ProductDetailRoute productSlug={product.slug} />,
  })),
  {
    path: '*',
    element: <NotFoundRoute />,
  },
])
