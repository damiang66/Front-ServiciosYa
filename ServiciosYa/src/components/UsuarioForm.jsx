import React, { useEffect, useState } from 'react';
import { useUsuario } from '../hooks/useUsuario';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const generos = [
    { label: 'Hombre', value: 'HOMBRE' },
    { label: 'Mujer', value: 'MUJER' },
    { label: 'Otro', value: 'OTRO' }
];

export const UsuarioForm = ({ usuarioSeleccionado }) => {
    const { usuarioInicial, handlerAddUsuario, errors, usuarios } = useUsuario();
    const [usuarioForm, setUsuarioForm] = useState({});
    const { id, nombres,apellidos, password, direccion, documento, telefono, email, genero, fechaDeNacimiento, nombreDeUsuario, roles = [] } = usuarioForm;
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
            genero: e.value
        });
    };

    return (
        <>
            <div className="container m-2">
                <form onSubmit={onSubmit}>
                    {/* Campo Nombre */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='nombres' id='nombre' value={nombres} onChange={onChangeInput} />
                            <label htmlFor='nombre'>Nombre</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.nombres}</p>
                    </div>
                      {/* Campo Nombre */}
                      <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='apellidos' id='apellido' value={apellidos} onChange={onChangeInput} />
                            <label htmlFor='apellido'>Apellido</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.nombres}</p>
                    </div>
                    {/* Campo fecha de Nacimiento */}
                    <div className='m-4'>
                    <Calendar name='fechaDeNacimiento' value={fechaDeNacimiento} onChange={onChangeInput} />
                    </div>
                    {/* Campo Password */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText type='password' className='form-control my-3 w-50' name='password' id='password' value={password} onChange={onChangeInput} />
                            <label htmlFor='password'>Password</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.password}</p>
                    </div>

                    {/* Campo Dirección */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='direccion' id='direccion' value={direccion} onChange={onChangeInput} />
                            <label htmlFor='direccion'>Dirección</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.direccion}</p>
                    </div>

                    {/* Campo Documento */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='documento' id='documento' value={documento} onChange={onChangeInput} />
                            <label htmlFor='documento'>Documento</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.documento}</p>
                    </div>

                    {/* Campo Teléfono */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='telefono' id='telefono' value={telefono} onChange={onChangeInput} />
                            <label htmlFor='telefono'>Teléfono</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.telefono}</p>
                    </div>

                    {/* Campo Email */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='email' id='email' value={email} onChange={onChangeInput} />
                            <label htmlFor='email'>Email</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.email}</p>
                    </div>

                    {/* Campo Nombre de Usuario */}
                    <div className='m-4'>
                        <FloatLabel>
                            <InputText className='form-control my-3 w-50' name='nombreDeUsuario' id='nombreDeUsuario' value={nombreDeUsuario} onChange={onChangeInput} />
                            <label htmlFor='nombreDeUsuario'>Nombre de Usuario</label>
                        </FloatLabel>
                        <p className="text-danger">{errors?.nombreDeUsuario}</p>
                    </div>

                    {/* Dropdown de Género */}
                    <div className='m-4'>
                        <Dropdown
                            value={genero}
                            options={generos}
                            onChange={onChangeDropdown}
                            placeholder="Seleccione Género"
                            className="w-50 my-3"
                        />
                        <p className="text-danger">{errors?.genero}</p>
                    </div>

                    {/* Input Hidden */}
                    <input type="hidden" name="id" value={id} />

                    {/* Botón */}
                    <button className="btn btn-primary" type="submit">
                        {id > 0 ? 'Editar' : 'Crear'}
                    </button>
                </form>
            </div>
        </>
    );
};
