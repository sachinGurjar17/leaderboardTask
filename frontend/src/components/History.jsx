import { useEffect, useState } from "react"
import { getHistory } from "../helper/api"

export default function History(){
    const [history , setHistory] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getHistory();
            const sortedData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setHistory(sortedData);
        }
        fetchData();
    },[])

    return (
        <>
            <div>
`            <div className="w-2/3 h-full border-gray-500 p-5 m-2 mx-auto" >
                <h1 className="text-center text-lg"> History</h1>
                <div className="border-grau-400 border-2 rounded-xl p-4 bg-gray-100">
                    {
                        history.map((user,idx)=>(
                            <div className="flex flex-row justify-between items-center text-black border-2 border-gray-300 p-2 rounded-xl mb-2" >
                                <div className="">Username: {user.userName}
                                </div>
                                <div className="flex-row flex gap-12 justify-center items-center">
                                    <div>Last Assigned Points: {user.points}</div>
                                    <div>Date: {user.timestamp.split('T')[0]}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>`
            </div>
        </>
    )
}