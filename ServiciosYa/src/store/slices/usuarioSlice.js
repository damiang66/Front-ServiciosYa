import { createSlice } from "@reduxjs/toolkit";
export const usuarioInicial = {
    id: 0,
    password: '',
    nombre: '',
    direccion: '',
    documento: "",
    apellido:"",
    telefono:"",
    email:"",
    genero:"",
    fechaDeNacimiento:"",
    edad:0,
    nombreDeUsuario:"",
    roles:[],
}
const initialErrors = {
    password: '',
    nombre: '',
    direccion: '',
    documento: "",
    apellido:"",
    telefono:"",
    email:"",
    genero:"",
    fechaDeNacimiento:"",
    edad:"",
    nombreDeUsuario:"",
}
export const usuarioSlice = createSlice({
    name: 'usuarios',
    initialState:{
        usuarios:[],
        usuarioSeleccionado:usuarioInicial,
        visibleForm:false,
        errors:initialErrors,
    },
    reducers:{
        addUsuario:(state,action)=>{
            state.usuarios=[
                ...state.usuarios,
                {
                    ...action.payload,
                }
            ];
            state.usuarioSeleccionado=usuarioInicial;
            state.visibleForm=false;
           
        },
        removeUsuario:(state,action)=>{
            state.usuarios= state.usuarios.filter(u=>u.id !== action.payload)
        },
        updateUsuarios:(state,action)=>{
            state.usuarios=state.usuarios.map(u => {
                //console.log(u.password)
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                       
                    };
                }
             
                return u;
            })
            state.usuarioSeleccionado=usuarioInicial;
            state.visibleForm=false;
        },
        loadingUsuarios:(state,action)=>{
            state.usuarios = action.payload
        },
        onUsuarioselectedForm:(state,action)=>{
            state.usuarioSeleccionado= action.payload;
            state.visibleForm=true;
        },
        onOpenForm:(state)=>{
            state.visibleForm=true;
        },
        onCloseForm:(state)=>{
            state.visibleForm=false;
            state.usuarioSeleccionado=usuarioInicial;
        },
        onError:(state,action)=>{
          state.errors=action.payload  
        }

    }
   
});
export const {
    addUsuario,
    removeUsuario,
    updateUsuarios,
    loadingUsuarios,
    onUsuarioselectedForm,
    onOpenForm,
    onCloseForm,
    onError,
    
}=usuarioSlice.actions;