import axios from "axios";

export const loginUser = async ({nombreDeUsuario,password})=>{
    try {
        return await axios.post('http://localhost:8080/login',{nombreDeUsuario,password})
    } catch (error) {
        throw error;
    }
}