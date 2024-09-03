import axios from "axios";

export const loginUser = async ({email,password})=>{
    try {
        return await axios.post('http://localhost:8080/login',{email,password})
    } catch (error) {
        throw error;
    }
}