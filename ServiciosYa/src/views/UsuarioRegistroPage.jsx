import React, { useEffect, useState } from 'react'
import { useUsuario } from '../hooks/useUsuario';
import { useParams } from 'react-router-dom';
import { usuarioFindById } from '../servicios/usuarioServicio';
import { UsuarioForm } from '../components/UsuarioForm';

export const UsuarioRegistroPage = () => {
  const {usuarios=[],usuarioInicial}=useUsuario();
  const [usuarioSeleccionado,setUsuarioSeleccionado]=useState(usuarioInicial);
  const [usuario,setUsuario]=useState({})
  const {id}= useParams();
  useEffect(()=>{
      if (id){
     
     
       traerUsuario(id)
      
   
      
      }
      setUsuarioSeleccionado(usuarioInicial)

  },[id])
  const traerUsuario = async(id)=>{
    try {
      const respuesta = await usuarioFindById(id);
      setUsuarioSeleccionado(respuesta.data)
     
    } catch (error) {
      throw error;
    }
   
  }
  return (
   <>
  <div className="container my-4">
            <h4>{ usuarioSeleccionado.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
            <div className="row">
                <div className="col">
                    <UsuarioForm usuarioSeleccionado={usuarioSeleccionado} />
                </div>
            </div>
        </div>
   </>
  )
}
