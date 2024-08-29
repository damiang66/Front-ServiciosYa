import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './views/home.jsx'

import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppRouter } from './router/AppRouter'


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/usuarioPage", element: <UsuarioPage /> },
    { path: "/usuarioRegistroPage/:id", element: <UsuarioRegistroPage /> },
    { path: "/usuarioRegistroPage", element: <UsuarioRegistroPage /> }
  ])

  return (
    <>

     <RouterProvider router={router} />
    </>

    <Provider store={store}>
  
      <AppRouter/>
       
       </Provider>
     </>

  )
}

export default App
