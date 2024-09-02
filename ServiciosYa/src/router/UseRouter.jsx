import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { UsuarioPage } from '../views/UsuarioPage'
import { UsuarioRegistroPage } from '../views/UsuarioRegistroPage'
import { Navbar } from '../components/NavBar'
// import { LoginPage } from '../auth/pages/LoginPage'

export const UseRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/usuarios" element={<UsuarioPage />} />
        <Route path="/usuarios/registrar" element={<UsuarioRegistroPage />} />
        <Route path="/usuarios/registrar/:id" element={<UsuarioRegistroPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/*!login.isAdmin || <>
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>
          */}
      </Routes>
    </>
  )
}
