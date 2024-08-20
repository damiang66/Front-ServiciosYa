import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './views/home.jsx'

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Home />}
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
