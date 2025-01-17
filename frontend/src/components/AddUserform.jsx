import { useState } from "react"
import { addNewUser} from "../helper/api";


export default function AddUserform(){

    const [name, setName] = useState('');
    const [points,setPoints] = useState();

    const handleclick = async ()=>{
        const newUser = {name:name , totalPoints:points}
        const addData = await addNewUser(newUser);
        console.log("user added successfully",addData);  
        setName('');
        setPoints();    
    }

    return (
        <>
                <div className=" w-1/3 h-1/2 mt-14 bg-gray-50 m-2 p-4 border rounded-3xl flex flex-col gap-4 font-[500] text-[14px] text-gray-600">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-xl font-semibold text-gray-700">Add new users</h1>
                    </div>
                    <form   className="flex flex-col gap-4 p-2 text-gray-600">
                    <input
                        type="text"
                        required
                        placeholder="Name of new user"
                        className="w-full border-2 rounded-lg px-3 outline-none duration-150 bg-white/20 py-2"
                        value = {name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                        type="text"
                        required
                        placeholder="Assigned point to the user"
                        className="w-full border-2 rounded-lg px-3 outline-none duration-150 bg-white/20 py-2"
                        value={points}
                        onChange={(e)=>setPoints(e.target.value)}
                    />
                    <button
                        type="button"
                        className="w-full bg-gray-200 border rounded-lg"
                        onClick={handleclick} 
                        >Add</button>
                    </form>
                    
            </div>
        </>
    )
}