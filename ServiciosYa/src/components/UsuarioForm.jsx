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
        <>
            <div>
                <form onSubmit={onSubmit}>
                    {/* Campo Nombre */}
                    <div>
                        <div>
                            <input name='nombres' id='nombre' value={nombres} onChange={onChangeInput} />
                            <label htmlFor='nombre'>Nombre</label>
                        </div>
                        <p>{errors?.nombres}</p>
                    </div>
                    {/* Campo Nombre */}
                    <div>
                        <div>
                            <input name='apellidos' id='apellido' value={apellidos} onChange={onChangeInput} />
                            <label htmlFor='apellido'>Apellido</label>
                        </div>
                        <p>{errors?.nombres}</p>
                    </div>
                    {/* Campo fecha de Nacimiento */}
                    <div>
                        <input type='date' name='fechaDeNacimiento' value={fechaDeNacimiento} onChange={onChangeInput} />
                    </div>
                    {/* Campo Password */}
                    <div>
                        <div>
                            <input type='password' name='password' id='password' value={password} onChange={onChangeInput} />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <p>{errors?.password}</p>
                    </div>

                    {/* Campo Dirección */}
                    <div>
                        <div>
                            <input name='direccion' id='direccion' value={direccion} onChange={onChangeInput} />
                            <label htmlFor='direccion'>Dirección</label>
                        </div>
                        <p>{errors?.direccion}</p>
                    </div>

                    {/* Campo Documento */}
                    <div>
                        <div>
                            <input name='documento' id='documento' value={documento} onChange={onChangeInput} />
                            <label htmlFor='documento'>Documento</label>
                        </div>
                        <p>{errors?.documento}</p>
                    </div>

                    {/* Campo Teléfono */}
                    <div>
                        <div>
                            <input name='telefono' id='telefono' value={telefono} onChange={onChangeInput} />
                            <label htmlFor='telefono'>Teléfono</label>
                        </div>
                        <p>{errors?.telefono}</p>
                    </div>

                    {/* Campo Email */}
                    <div>
                        <div>
                            <input name='email' id='email' value={email} onChange={onChangeInput} />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <p>{errors?.email}</p>
                    </div>

                    {/* Campo Nombre de Usuario */}
                    <div>
                        <div>
                            <input name='nombreDeUsuario' id='nombreDeUsuario' value={nombreDeUsuario} onChange={onChangeInput} />
                            <label htmlFor='nombreDeUsuario'>Nombre de Usuario</label>
                        </div>
                        <p>{errors?.nombreDeUsuario}</p>
                    </div>

                    {/* Dropdown de Género */}
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
                    <p>{errors?.genero}</p>

                    {/* Input Hidden */}
                    <input type="hidden" name="id" value={id} />

                    {/* Botón */}
                    <button type="submit">
                        {id > 0 ? 'Editar' : 'Crear'}
                    </button>
                </form>
            </div>
        </>
    );
};
