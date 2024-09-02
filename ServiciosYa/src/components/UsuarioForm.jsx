import styles from './components.module.css'
import React, { useEffect, useState } from 'react';
import { useUsuario } from '../hooks/useUsuario';
const generos = [
    { label: 'Hombre', value: 'HOMBRE' },
    { label: 'Mujer', value: 'MUJER' },
    { label: 'Otro', value: 'OTRO' }
];

export const UsuarioForm = ({ usuarioSeleccionado }) => {
    const { usuarioInicial, handlerAddUsuario, errors, usuarios } = useUsuario();
    const [usuarioForm, setUsuarioForm] = useState({});
    const { id, nombres, apellidos, password, direccion, documento, telefono, email, genero, fechaDeNacimiento, nombreDeUsuario, roles = [] } = usuarioForm;
    //const [id,setId]=useState(0)
    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddUsuario(usuarioForm);
    };

    useEffect(() => {
        setUsuarioForm({ ...usuarioSeleccionado });
    }, [usuarioSeleccionado]);

    const onChangeInput = ({ target }) => {
        const { name, value } = target;
        setUsuarioForm({
            ...usuarioForm,
            [name]: value
        });
    };

    const onChangeDropdown = (e) => {
        setUsuarioForm({
            ...usuarioForm,
            genero: e.target.value
        });
    };

    return (
        <form className={styles['user-form']} onSubmit={onSubmit}>
            <h4>{usuarioSeleccionado.id > 0 ? 'Editar' : 'Registrar'}Usuario</h4>
            {/* Campo Nombre */}
            <div className={styles['form-row']}>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input name='nombres' id='nombre' value={nombres} onChange={onChangeInput} />
                </div>
                <p>{errors?.nombres}</p>
                <div>
                    <label htmlFor='apellido'>Apellido</label>
                    <input name='apellidos' id='apellido' value={apellidos} onChange={onChangeInput} />
                </div>
                <p>{errors?.nombres}</p>
            </div>
            {/* Campo fecha de Nacimiento */}
            {/* Campo Password */}
            <div className={styles['form-row']}>
                <div>
                    <label htmlFor="fechaDeNacimiento">Fecha de Nacimiento</label>
                    <input type='date' name='fechaDeNacimiento' value={fechaDeNacimiento} onChange={onChangeInput} />
                </div>
                <p>{errors?.date}</p>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password} onChange={onChangeInput} />
                </div>
                <p>{errors?.password}</p>
            </div>
            {/* Campo Dirección */}
            {/* Campo Documento */}
            <div className={styles['form-row']}>
                <div>
                    <label htmlFor='direccion'>Dirección</label>
                    <input name='direccion' id='direccion' value={direccion} onChange={onChangeInput} />
                </div>
                <p>{errors?.direccion}</p>
                <div>
                    <label htmlFor='documento'>Documento</label>
                    <input name='documento' id='documento' value={documento} onChange={onChangeInput} />
                </div>
                <p>{errors?.documento}</p>
            </div>
            {/* Campo Teléfono */}
            {/* Campo Email */}
            <div className={styles['form-row']}>
                <div>
                    <label htmlFor='telefono'>Teléfono</label>
                    <input name='telefono' id='telefono' value={telefono} onChange={onChangeInput} />
                </div>
                <p>{errors?.telefono}</p>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name='email' id='email' value={email} onChange={onChangeInput} />
                </div>
                <p>{errors?.email}</p>
            </div>
            {/* Campo Nombre de Usuario */}
            {/* Dropdown de Género */}
            <div className={styles['form-row']}>
                <div>
                    <label htmlFor='nombreDeUsuario'>Nombre de Usuario</label>
                    <input name='nombreDeUsuario' id='nombreDeUsuario' value={nombreDeUsuario} onChange={onChangeInput} />
                </div>
                <p>{errors?.nombreDeUsuario}</p>
                <div>
                    <p>{errors?.nombreDeUsuario}</p>
                    <label>Genero: </label>
                    <select onChange={onChangeDropdown}>
                        {generos.map((genero) => (
                            <option
                                key={genero.value}
                                value={genero.value}

                            >
                                {genero.label}
                            </ option>
                        ))}

                    </select>
                </div>
                <p>{errors?.genero}</p>
            </div>
            {/* Input Hidden */}
            <input type="hidden" name="id" value={id} />

            {/* Botón */}
            <button type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
        </form>
    );
};
