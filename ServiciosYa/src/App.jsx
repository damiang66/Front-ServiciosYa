import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { UsuarioPage } from './views/UsuarioPage.jsx'
import { UsuarioRegistroPage } from './views/UsuarioRegistroPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { Home } from './views/home.jsx'
import { LoginPage } from './auth/pages/LoginPage.jsx' 
import { Usuario } from './components/Usuario.jsx'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/usuario", element: <UsuarioPage /> },
    { path: "/usuarioLogin", element: <Usuario /> },
    { path: "/usuarios/registrar", element: <UsuarioRegistroPage /> },
    { path: "/usuarios/registrar/:id", element: <UsuarioRegistroPage /> },
    { path: "/login", element: <LoginPage /> }
  ])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
