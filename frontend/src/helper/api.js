import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL ;
console.log(backendUrl);

export async function fetchUsers(){
    try{
        const response = await axios.get(`${backendUrl}/api/users`)
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export async function addNewUser(user){
    try{
        const response = await axios.post(`${backendUrl}/api/users`,user)
        toast.success('user added successfully')
        return response.data
    }catch(err){
        console.log(err);
        
    }
}

export async function getHistory(){
    try{
        const response = await axios.get(`${backendUrl}/api/history`);
        return response.data ;
    }catch(err){
        console.log(err);        
    }
}

export async function claimPoint(userId){
    try{
        const response = await axios.post(`${backendUrl}/api/points/claim`,{userId});
        toast.success("Points added to the user 🎉")
        return response.data ;
    }catch(err){
        console.log(err);
    }
}