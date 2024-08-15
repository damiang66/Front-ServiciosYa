import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
export const UsuarioList = ({usuarios}) => {
  return (
    <>
    <DataTable value={usuarios} tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id"></Column>
    <Column field="nombres" header="Nombre"></Column>
    <Column field="apellidos" header="Apellido"></Column>
    <Column field="email" header="Email"></Column>
</DataTable>
    </>
  )
}
