import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_dashboardlayout/dashboard')({
  component: () => <div>Hello /(protected)/_dashboardlayout/dashboard!</div>
})