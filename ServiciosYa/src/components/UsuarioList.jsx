import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';
import { useUsuario } from '../hooks/useUsuario';
export const UsuarioList = ({ usuarios }) => {
  const { handlerRemoveUsuario } = useUsuario()
  const editar = (rowData) => {
    return (
      <NavLink className="btn btn-primary" to={`/usuarioRegistroPage/${rowData.id}`}>
        Editar
      </NavLink>
    );
  };

  const eliminar = (rowData) => {
    return (
      <button className="btn btn-danger" onClick={() => handlerRemoveUsuario(rowData.id)}>
        Eliminar
      </button>
    );
  };
  return (
    <>
      <DataTable value={usuarios} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="Id"></Column>
        <Column field="nombres" header="Nombre"></Column>
        <Column field="apellidos" header="Apellido"></Column>
        <Column field="email" header="Email"></Column>
        <Column body={editar} header="Editar"></Column>
        <Column body={eliminar} header="Eliminar"></Column>
      </DataTable>
    </>
  )
}
