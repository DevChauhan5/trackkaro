import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_dashboardlayout/transactions')({
  component: () => <div>Hello /_protected/_dashboardRoutes/_dasboardlayout/transactions!</div>
})