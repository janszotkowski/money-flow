/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TransactionsImport } from './routes/transactions'
import { Route as InvestmentsImport } from './routes/investments'
import { Route as AnalyticsImport } from './routes/analytics'
import { Route as AccountsImport } from './routes/accounts'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TransactionsRoute = TransactionsImport.update({
  id: '/transactions',
  path: '/transactions',
  getParentRoute: () => rootRoute,
} as any)

const InvestmentsRoute = InvestmentsImport.update({
  id: '/investments',
  path: '/investments',
  getParentRoute: () => rootRoute,
} as any)

const AnalyticsRoute = AnalyticsImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => rootRoute,
} as any)

const AccountsRoute = AccountsImport.update({
  id: '/accounts',
  path: '/accounts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/accounts': {
      id: '/accounts'
      path: '/accounts'
      fullPath: '/accounts'
      preLoaderRoute: typeof AccountsImport
      parentRoute: typeof rootRoute
    }
    '/analytics': {
      id: '/analytics'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof AnalyticsImport
      parentRoute: typeof rootRoute
    }
    '/investments': {
      id: '/investments'
      path: '/investments'
      fullPath: '/investments'
      preLoaderRoute: typeof InvestmentsImport
      parentRoute: typeof rootRoute
    }
    '/transactions': {
      id: '/transactions'
      path: '/transactions'
      fullPath: '/transactions'
      preLoaderRoute: typeof TransactionsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/accounts': typeof AccountsRoute
  '/analytics': typeof AnalyticsRoute
  '/investments': typeof InvestmentsRoute
  '/transactions': typeof TransactionsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/accounts': typeof AccountsRoute
  '/analytics': typeof AnalyticsRoute
  '/investments': typeof InvestmentsRoute
  '/transactions': typeof TransactionsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/accounts': typeof AccountsRoute
  '/analytics': typeof AnalyticsRoute
  '/investments': typeof InvestmentsRoute
  '/transactions': typeof TransactionsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/accounts' | '/analytics' | '/investments' | '/transactions'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/accounts' | '/analytics' | '/investments' | '/transactions'
  id:
    | '__root__'
    | '/'
    | '/accounts'
    | '/analytics'
    | '/investments'
    | '/transactions'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AccountsRoute: typeof AccountsRoute
  AnalyticsRoute: typeof AnalyticsRoute
  InvestmentsRoute: typeof InvestmentsRoute
  TransactionsRoute: typeof TransactionsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AccountsRoute: AccountsRoute,
  AnalyticsRoute: AnalyticsRoute,
  InvestmentsRoute: InvestmentsRoute,
  TransactionsRoute: TransactionsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/accounts",
        "/analytics",
        "/investments",
        "/transactions"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/accounts": {
      "filePath": "accounts.tsx"
    },
    "/analytics": {
      "filePath": "analytics.tsx"
    },
    "/investments": {
      "filePath": "investments.tsx"
    },
    "/transactions": {
      "filePath": "transactions.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
