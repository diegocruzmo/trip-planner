import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CreateTrip from './views/create-trip/index.tsx'
import Header from './components/custom/Header.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject
} from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  }
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
)
