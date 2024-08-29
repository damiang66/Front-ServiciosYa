import axios from "axios";
import { URL } from "../URL";

const url = 'http://localhost:8080/vendedores'
const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}
export const VendedorFindAll=async()=>{
    try {
        const respuesta = axios.get(url,config());
        return respuesta;
    } catch (error) {
       throw error; 
    }

}