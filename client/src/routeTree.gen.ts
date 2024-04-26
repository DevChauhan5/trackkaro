/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedDashboardlayoutImport } from './routes/_protected/_dashboardlayout'
import { Route as AuthSignlayoutImport } from './routes/_auth/_signlayout'
import { Route as ProtectedDashboardlayoutTransactionsImport } from './routes/_protected/_dashboardlayout.transactions'
import { Route as ProtectedDashboardlayoutSettingsImport } from './routes/_protected/_dashboardlayout.settings'
import { Route as ProtectedDashboardlayoutDashboardImport } from './routes/_protected/_dashboardlayout.dashboard'
import { Route as ProtectedDashboardlayoutBudgetImport } from './routes/_protected/_dashboardlayout.budget'
import { Route as ProtectedDashboardlayoutAnalyticsImport } from './routes/_protected/_dashboardlayout.analytics'
import { Route as AuthSignlayoutSignUpImport } from './routes/_auth/_signlayout.sign-up'
import { Route as AuthSignlayoutSignInImport } from './routes/_auth/_signlayout.sign-in'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProtectedDashboardlayoutRoute = ProtectedDashboardlayoutImport.update({
  id: '/_protected/_dashboardlayout',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignlayoutRoute = AuthSignlayoutImport.update({
  id: '/_auth/_signlayout',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedDashboardlayoutTransactionsRoute =
  ProtectedDashboardlayoutTransactionsImport.update({
    path: '/transactions',
    getParentRoute: () => ProtectedDashboardlayoutRoute,
  } as any)

const ProtectedDashboardlayoutSettingsRoute =
  ProtectedDashboardlayoutSettingsImport.update({
    path: '/settings',
    getParentRoute: () => ProtectedDashboardlayoutRoute,
  } as any)

const ProtectedDashboardlayoutDashboardRoute =
  ProtectedDashboardlayoutDashboardImport.update({
    path: '/dashboard',
    getParentRoute: () => ProtectedDashboardlayoutRoute,
  } as any)

const ProtectedDashboardlayoutBudgetRoute =
  ProtectedDashboardlayoutBudgetImport.update({
    path: '/budget',
    getParentRoute: () => ProtectedDashboardlayoutRoute,
  } as any)

const ProtectedDashboardlayoutAnalyticsRoute =
  ProtectedDashboardlayoutAnalyticsImport.update({
    path: '/analytics',
    getParentRoute: () => ProtectedDashboardlayoutRoute,
  } as any)

const AuthSignlayoutSignUpRoute = AuthSignlayoutSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => AuthSignlayoutRoute,
} as any)

const AuthSignlayoutSignInRoute = AuthSignlayoutSignInImport.update({
  path: '/sign-in',
  getParentRoute: () => AuthSignlayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_signlayout': {
      preLoaderRoute: typeof AuthSignlayoutImport
      parentRoute: typeof rootRoute
    }
    '/_protected/_dashboardlayout': {
      preLoaderRoute: typeof ProtectedDashboardlayoutImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_signlayout/sign-in': {
      preLoaderRoute: typeof AuthSignlayoutSignInImport
      parentRoute: typeof AuthSignlayoutImport
    }
    '/_auth/_signlayout/sign-up': {
      preLoaderRoute: typeof AuthSignlayoutSignUpImport
      parentRoute: typeof AuthSignlayoutImport
    }
    '/_protected/_dashboardlayout/analytics': {
      preLoaderRoute: typeof ProtectedDashboardlayoutAnalyticsImport
      parentRoute: typeof ProtectedDashboardlayoutImport
    }
    '/_protected/_dashboardlayout/budget': {
      preLoaderRoute: typeof ProtectedDashboardlayoutBudgetImport
      parentRoute: typeof ProtectedDashboardlayoutImport
    }
    '/_protected/_dashboardlayout/dashboard': {
      preLoaderRoute: typeof ProtectedDashboardlayoutDashboardImport
      parentRoute: typeof ProtectedDashboardlayoutImport
    }
    '/_protected/_dashboardlayout/settings': {
      preLoaderRoute: typeof ProtectedDashboardlayoutSettingsImport
      parentRoute: typeof ProtectedDashboardlayoutImport
    }
    '/_protected/_dashboardlayout/transactions': {
      preLoaderRoute: typeof ProtectedDashboardlayoutTransactionsImport
      parentRoute: typeof ProtectedDashboardlayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AuthSignlayoutRoute.addChildren([
    AuthSignlayoutSignInRoute,
    AuthSignlayoutSignUpRoute,
  ]),
  ProtectedDashboardlayoutRoute.addChildren([
    ProtectedDashboardlayoutAnalyticsRoute,
    ProtectedDashboardlayoutBudgetRoute,
    ProtectedDashboardlayoutDashboardRoute,
    ProtectedDashboardlayoutSettingsRoute,
    ProtectedDashboardlayoutTransactionsRoute,
  ]),
])

/* prettier-ignore-end */
