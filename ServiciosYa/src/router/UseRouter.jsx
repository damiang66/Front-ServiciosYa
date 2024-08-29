import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { UsuarioPage } from '../page/UsuarioPage'
import { UsuarioRegistroPage } from '../page/UsuarioRegistroPage'
import { Navbar } from '../components/NavBar'
import { VendedorPage } from '../page/VendedorPage'

export const UseRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      
        <Route path="/" element={<UsuarioPage />} />
        <Route path="/usuarios" element={<UsuarioPage />} />
        <Route path="/usuarios/registrar" element={<UsuarioRegistroPage />} />
        <Route path="/usuarios/registrar/:id" element={<UsuarioRegistroPage />} />
        <Route path="/vendedores" element={<VendedorPage />} />
        {/*!login.isAdmin || <>
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>
                    */}
   
    </Routes>
    </>
  )
}
