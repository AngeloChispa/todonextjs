import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><h1>todo</h1></div>
}
