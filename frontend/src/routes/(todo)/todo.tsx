import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(todo)/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
