import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const adminLogin = async (email, password) => {
    try{
        const {data} = await axios.post(`${API_URL}/admin/login`, {email, password});
        return data;
    }catch(error){
        console.log(error);
    }
}