import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider, useAuth } from './auth'
import {router} from './router'
import ReactDOM from 'react-dom/client'


function InnerApp() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<AuthProvider> <InnerApp></InnerApp></AuthProvider>)
}
