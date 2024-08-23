import React, { useEffect, useState } from 'react'
import { UsuarioList } from '../components/UsuarioList';
import Swal from 'sweetalert2';
import { useUsuario } from '../hooks/useUsuario';
import { useNavigate } from 'react-router-dom';

export const UsuarioPage = () => {
    
    const {usuarios,getUsuario}=useUsuario();
    const navegar = useNavigate()
    const abrirFormulario = ()=>{
        navegar('/usuarioRegistroPage')
    }
    useEffect(()=>{
getUsuario()
console.log(usuarios);

    },[])
  return (
    <>
    <div className="container m-4">
    <h2>Sección Usuario</h2>
   
  
    <div className="row">
        <div className="col">
           
                <button className="btn btn-primary my-2" onClick={abrirFormulario}>
                    Nuevo Usuario
                </button>
       
            {
                usuarios.length === 0
                    ? <div className="alert alert-warning">No hay ofertas en el sistema!</div>
                    : <UsuarioList usuarios={usuarios} />
            }
        </div>
    </div>
</div>
</>
);
  
}
