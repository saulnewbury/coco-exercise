import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import './App.css'

import Home from './pages/Home/Home'
import LaCampanya from './pages/LaCampanya/LaCampanya'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="" element={<LaCampanya />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
