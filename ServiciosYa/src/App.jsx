import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './views/Home.jsx'
import { UsuarioPage } from './views/UsuarioPage.jsx'
import { UsuarioRegistroPage } from './views/UsuarioRegistroPage.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'

function App() {
/*
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/usuarioPage", element: <UsuarioPage /> },
    { path: "/usuarioRegistroPage/:id", element: <UsuarioRegistroPage /> },
    { path: "/usuarioRegistroPage", element: <UsuarioRegistroPage /> }
  ])
*/
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
