import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usuarioDelete, usuarioFindAll, usuarioSave, usuarioUpdate } from '../servicios/usuarioServicio';
import { addUsuario, loadingUsuarios, onCloseForm, onError, onOpenForm, onUsuarioselectedForm, removeUsuario, updateUsuarios, usuarioInicial } from '../store/slices/usuarioSlice';
import Swal from 'sweetalert2';

export const useUsuario = () => {
    const {usuarios,usuarioSeleccionado,visibleForm,errors}= useSelector(state=>state.usuarios)
    const dispatch = useDispatch()
    const navigate = useNavigate();

   // const { login, handlerLogout } = useAuth();

    const getUsuario = async () => {
        try {
            
       
        const result = await usuarioFindAll();
        console.log(result);
        dispatch(loadingUsuarios(result.data));
          
     } catch (error) {
            
    }
}

    const handlerAddUsuario = async (usuario) => {
        // console.log(user);

        //if (!login.isAdmin) return;

        let response;
        try {
            console.log(usuario.id);

            if (usuario.id === undefined) {
              
                response = await usuarioSave(usuario);
                dispatch(addUsuario(response.data))
            } else {
               
                response = await usuarioUpdate(usuario);
                dispatch(updateUsuarios(response.data))
            }

            

            Swal.fire(
                (usuario.id === 0) ?
                    'Usuario Creado' :
                    'Usuario Actualizado',
                (usuario.id === 0) ?
                    'El Usuario ha sido creado con exito!' :
                    'El Usuario ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            // cambiar
            navigate('/usuarios');
        } catch (error) {
            if (error.response && error.response.status == 400) {
               dispatch( onError(error.response.data));
          
            } else if (error.response?.status == 401) {
                handlerLogout();
            } else if(error.response && error.response.status == 403) {
               Swal.fire('Error', 'error faltan datos o no tiene permisos para esta accion', 'warning');
            }else{
                throw error;   
            }
        }
    }

    const handlerRemoveUsuario = (id) => {
        
        
        // console.log(id);

      //  if (!login.isAdmin) return;

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then( async(result) => {
         
            if (result.isConfirmed) {
                
                try {
                 
                    await usuarioDelete(id);
                  
                    dispatch(removeUsuario(id));
                    Swal.fire(
                        'Usuario Eliminado!',
                        'El usuario ha sido eliminado con exito!',
                        'success'
                    );
                } catch (error) {
                    if (error.response?.status == 401) {
                        throw error;
                      //  handlerLogout();
                    }
                }
            }
        })

    }

    const handlerUsuarioSelectedForm = (usuario) => {
      
   dispatch(onUsuarioselectedForm({...usuario}))
    }

    const handlerOpenForm = () => {
     
        dispatch(onOpenForm())
    }

    const handlerCloseForm = () => {
      dispatch(onCloseForm())
      dispatch( onError({}));
    }
    return {
        usuarios,
        usuarioSeleccionado,
        usuarioInicial,
        visibleForm,
        errors,
        handlerAddUsuario,
        handlerRemoveUsuario,
        handlerUsuarioSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsuario,
    }
}
