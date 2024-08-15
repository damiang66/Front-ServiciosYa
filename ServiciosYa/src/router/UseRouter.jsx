import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { UsuarioPage } from '../page/UsuarioPage'
import { UsuarioRegistroPage } from '../page/UsuarioRegistroPage'

export const UseRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<UsuarioPage />} />
        <Route path="/usuarios" element={<UsuarioPage />} />
        <Route path="/usuarios/registrar" element={<UsuarioRegistroPage />} />
        <Route path="/usuarios/registrar/:id" element={<UsuarioRegistroPage />} />
    </Routes>
  )
}
