import { NavLink } from "react-router-dom"
export default function Navbar(){
    return (
        <>
            <div className="text-center flex flex-row gap-6 justify-center items-center">
                <NavLink to={'/'} className="bg-gray-400 px-4 py-2 border rounded-xl hover:bg-blue-300">
                    Home
                </NavLink>
                <NavLink to={'/history'} className="bg-gray-400 px-4 py-2 border rounded-xl hover:bg-blue-300">
                    History
                </NavLink>
            </div>
        </>
    )
} 