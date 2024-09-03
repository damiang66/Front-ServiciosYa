import React from 'react'
import styles from './components.module.css'
import { NavLink } from 'react-router-dom';
import { useUsuario } from '../hooks/useUsuario';
export const UsuarioList = ({ usuarios }) => {
  const { handlerRemoveUsuario } = useUsuario()
  const editar = (rowData) => {
    return (
      <NavLink className="btn btn-primary" to={`/usuarios/registrar/${rowData}`}>
        Editar
      </NavLink>
    );
  };

  const eliminar = (rowData) => {
    return (
      <button className={styles["deleteButton"]} onClick={() => handlerRemoveUsuario(rowData)}>
        Eliminar
      </button>
    );
  };
  return (
    <>
      <table id="tabla" className={styles["user-table"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr className={styles["user-Table"]}>
              <td>{usuario.id}</td>
              <td>{usuario.nombres}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.email}</td>
              <td><button >{editar(usuario.id)}</button></td>
              <td>{eliminar(usuario.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}
