import React from 'react'
import { useVendedor } from '../hooks/useVendedor';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';

export const VendedorList = ({vendedores}) => {
    const {handlerRemoveVendedor}= useVendedor()
    const editar = (rowData) => {
      return (
        <NavLink className="btn btn-primary" to={`/usuarios/registrar/${rowData.id}`}>
          Editar
        </NavLink>
      );
    };
  
    const eliminar = (rowData) => {
      return (
       
        <button className="btn btn-danger" onClick={() => handlerRemoveVendedor(rowData.id)}>
          Eliminar
        </button>
        
      );
    };
    return (
      <>
      <DataTable value={vendedores} tableStyle={{ minWidth: '50rem' }}>
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