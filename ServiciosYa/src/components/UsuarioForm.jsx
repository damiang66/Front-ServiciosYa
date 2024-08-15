import React, { useEffect, useState } from 'react'
import { useUsuario } from '../hooks/useUsuario'
import { useParams } from 'react-router-dom';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export const UsuarioForm = ({usuarioSeleccionado}) => {
    const {usuarioInicial,handlerAddUsuario,errors,usuarios}=useUsuario()
    const [usuarioForm,setUsuarioForm]=useState({})
    const {id,nombres}= usuarioForm()
   
  return (
   <>
     <div className="container m-2">
        <form onSubmit={onSubmit}>
            <FloatLabel >
                <InputText name='numeroCliente'  id="numeroCliente" value={numeroCliente} onChange={onInputChange} />
                <label htmlFor="numeroCliente">numeroCLiente</label>
            </FloatLabel>
            <p className="text-danger">{errors?.numeroCliente}</p>
            


            <FloatLabel  className='m2' >
                <InputText name='direccion'  id="direccion" value={direccion} onChange={onInputChange} />
                <label htmlFor="direccion">direccion</label>
            </FloatLabel >
            <p className="text-danger">{errors?.direccion}</p>
            <FloatLabel  className='m2' >
                <InputText name='localidad'  id="localidad" value={localidad} onChange={onInputChange} />
                <label htmlFor="localidad">localidad</label>
            </FloatLabel>
            <p className="text-danger">{errors?.localidad}</p>
            <FloatLabel  className='m2' >
                <InputText name='provincia'  id="provincia" value={provincia} onChange={onInputChange} />
                <label htmlFor="provincia">provincia</label>
            </FloatLabel>
            <p className="text-danger">{errors?.provincia}</p>
            <FloatLabel  className='m2' >
                <InputText name='telefono'  id="telefono" value={telefono} onChange={onInputChange} />
                <label htmlFor="telefono">telefono</label>
            </FloatLabel >
            <p className="text-danger">{errors?.telefono}</p>
            <FloatLabel  className='m2' >
                <InputText name='email' type='email'  id="email" value={email} onChange={onInputChange} />
                <label htmlFor="email">email</label>
            </FloatLabel>
            <p className="text-danger">{errors?.email}</p>

           
           

            <input type="hidden"
                name="id"
                value={id} />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {/*!handlerCloseForm || <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>*/}

        </form>
        </div>
   </>
  )
}
