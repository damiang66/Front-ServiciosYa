import axios from "axios"
const URL = 'http://localhost:8080'
export const usuarioFindAll = async()=>{
    try {
     const respuesta = await axios.get(`${URL}/usuarios`)   
     return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioFindById = async(id)=>{
    try {
        const respuesta = await axios.get(`${URL}/usuarios/${id}`)
        return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioSave= async (usuario)=>{
    try {
     const respuesta = await axios.post(`${URL}/usuarios`,usuario);  
     return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioUpdate = async (id)=>{
    try {
        const respuesta = await axios.put(`${URL}/usuarios/${id}`)
        return respuesta;
    } catch (error) {
        throw error;
    }
}
export const usuarioDelete = async (id)=>{
    try {
        const respuesta = await axios.delete(`${URL}/usuarios/${id}`)
        return respuesta; 
    } catch (error) {
        throw error;
    }
}