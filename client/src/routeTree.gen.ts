/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as authSignUpImport } from './routes/(auth)/sign-up'
import { Route as authSignInImport } from './routes/(auth)/sign-in'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const authSignUpRoute = authSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any)

const authSignInRoute = authSignInImport.update({
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-in': {
      preLoaderRoute: typeof authSignInImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-up': {
      preLoaderRoute: typeof authSignUpImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  authSignInRoute,
  authSignUpRoute,
])

/* prettier-ignore-end */
