import axios from "axios"
const URL = 'http://localhost:8080'
const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}
export const usuarioFindAll = async()=>{
    try {
     const respuesta = await axios.get(`${URL}/usuarios`,config())   
     return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioFindById = async(id)=>{
    try {
        const respuesta = await axios.get(`${URL}/usuarios/${id}`,config())
        return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioSave= async (usuario)=>{
    try {
        console.log(usuario);
        
     const respuesta = await axios.post(`${URL}/usuarios`,usuario,config());  
     return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioUpdate = async (usuario)=>{
    try {
       
        
        const respuesta = await axios.put(`${URL}/usuarios/${usuario.id}`,usuario,config())
        return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioDelete = async (id)=>{
    try {
       
        const respuesta = await axios.delete(`${URL}/usuarios/${id}`,config())
        return respuesta; 
    } catch (error) {
        throw error;
    }
}