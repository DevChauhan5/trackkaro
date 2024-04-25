import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_dashboardlayout/analytics')({
  component: () => <div>Hello /_protected/_dashboardlayout/analytics!</div>
})