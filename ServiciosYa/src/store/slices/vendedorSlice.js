import { createSlice } from "@reduxjs/toolkit";
export const vendedorInicial = {
   id:0,
    password: '',
    nombres: '',
    direccion: '',
    documento: "",
    apellidos:"",
    telefono:"",
    email:"",
    genero:"",
    fechaDeNacimiento:"",
    edad:null,
    nombreDeUsuario:"",
    roles:[],
}
const initialErrors = {
    password: '',
    nombres: '',
    direccion: '',
    documento: "",
    apellidos:"",
    telefono:"",
    email:"",
    genero:"",
    fechaDeNacimiento:"",
    edad:"",
    nombreDeUsuario:"",
}
export const vendedorSlice = createSlice({
    name: 'vendedores',
    initialState:{
        vendedores:[],
        vendedorSeleccionado:vendedorInicial,
        visibleForm:false,
        errors:initialErrors,
    },
    reducers:{
        addVendedor:(state,action)=>{
            state.vendedores=[
                ...state.vendedores,
                {
                    ...action.payload,
                }
            ];
            state.vendedorSeleccionado=vendedorInicial;
            state.visibleForm=false;
           
        },
        removeVendedor:(state,action)=>{
            state.vendedores= state.vendedores.filter(u=>u.id !== action.payload)
        },
        updateVendedor:(state,action)=>{
            state.vendedores=state.vendedores.map(u => {
                //console.log(u.password)
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                       
                    };
                }
             
                return u;
            })
            state.vendedorSeleccionado=vendedorInicial;
            state.visibleForm=false;
        },
        loadingVendedores:(state,action)=>{
            state.vendedores = action.payload
        },
        onVendedoreselectedForm:(state,action)=>{
            state.vendedorSeleccionado= action.payload;
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
    addVendedor,
    removeVendedor,
    updateVendedor,
    loadingVendedores,
    onVendedoreselectedForm,
    onOpenForm,
    onCloseForm,
    onError,
    
}=vendedorSlice.actions;