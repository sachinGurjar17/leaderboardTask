import { useEffect, useState } from "react"
import { fetchUsers, claimPoint } from "../helper/api"

export default function LeaderBoard (){
    const [users, setUsers] = useState([])

    const handleClick = async(userId)=>{
        const addPoints = await claimPoint(userId);
        console.log(addPoints);
    }

    useEffect(()=>{
        const getAllUsers = async()=>{
            const data = await fetchUsers();
            const sortedData = data.sort((a, b) => b.totalPoints - a.totalPoints);
            setUsers(sortedData)
        }
        getAllUsers()
        setUsers(users);   
    },[handleClick])
    
    
    return (
        <>
            <div className="w-2/3 h-full border-gray-500 p-5 m-2" >
                <h1 className="text-center text-lg"> Leaderboard</h1>
                <div className="border-grau-400 border-2 rounded-xl p-4 bg-gray-100">
                    {
                        users.map((user,idx)=>(
                            <div className="flex flex-row justify-between items-center text-black border-2 border-gray-300 p-2 rounded-xl mb-2" >
                                <div className="text-lg">
                                    {idx === 0 && <span className="text-yellow-500 text-xl">🥇</span>}
                                    {idx === 1 && <span className="text-gray-400 text-xl">🥈</span>}
                                    {idx === 2 && <span className="text-orange-400 text-xl">🥉</span>}
                                    {user.name}
                                </div>
                                <div className="flex-row flex gap-4 justify-center items-center">
                                    <div>Total: {user.totalPoints}</div>
                                    <button onClick={()=>{handleClick(user._id)}} className="bg-red-300 font-bold p-2 border rounded-xl hover:bg-red-200">Claim 🎉</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

